import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_discord_discord_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"server_id" varchar
  );
  
  CREATE TABLE "pages_blocks_discord" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_discord_discord_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"server_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_discord" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_discord_discord_cards" ADD CONSTRAINT "pages_blocks_discord_discord_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_discord"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_discord" ADD CONSTRAINT "pages_blocks_discord_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_discord_discord_cards" ADD CONSTRAINT "_pages_v_blocks_discord_discord_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_discord"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_discord" ADD CONSTRAINT "_pages_v_blocks_discord_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_discord_discord_cards_order_idx" ON "pages_blocks_discord_discord_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_discord_discord_cards_parent_id_idx" ON "pages_blocks_discord_discord_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_discord_order_idx" ON "pages_blocks_discord" USING btree ("_order");
  CREATE INDEX "pages_blocks_discord_parent_id_idx" ON "pages_blocks_discord" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_discord_path_idx" ON "pages_blocks_discord" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_discord_discord_cards_order_idx" ON "_pages_v_blocks_discord_discord_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_discord_discord_cards_parent_id_idx" ON "_pages_v_blocks_discord_discord_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_discord_order_idx" ON "_pages_v_blocks_discord" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_discord_parent_id_idx" ON "_pages_v_blocks_discord" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_discord_path_idx" ON "_pages_v_blocks_discord" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_discord_discord_cards" CASCADE;
  DROP TABLE "pages_blocks_discord" CASCADE;
  DROP TABLE "_pages_v_blocks_discord_discord_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_discord" CASCADE;`)
}

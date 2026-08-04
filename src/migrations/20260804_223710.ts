import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "profile_categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  ALTER TABLE "profile_categories" ADD COLUMN "generate_slug" boolean DEFAULT true;
  ALTER TABLE "profile_categories" ADD COLUMN "slug" varchar NOT NULL;
  ALTER TABLE "profile_categories" ADD COLUMN "parent_id" integer;
  ALTER TABLE "profile_categories_breadcrumbs" ADD CONSTRAINT "profile_categories_breadcrumbs_doc_id_profile_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."profile_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "profile_categories_breadcrumbs" ADD CONSTRAINT "profile_categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."profile_categories"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "profile_categories_breadcrumbs_order_idx" ON "profile_categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "profile_categories_breadcrumbs_parent_id_idx" ON "profile_categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "profile_categories_breadcrumbs_doc_idx" ON "profile_categories_breadcrumbs" USING btree ("doc_id");
  ALTER TABLE "profile_categories" ADD CONSTRAINT "profile_categories_parent_id_profile_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."profile_categories"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "profile_categories_slug_idx" ON "profile_categories" USING btree ("slug");
  CREATE INDEX "profile_categories_parent_idx" ON "profile_categories" USING btree ("parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "profile_categories_breadcrumbs" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "profile_categories_breadcrumbs" CASCADE;
  ALTER TABLE "profile_categories" DROP CONSTRAINT "profile_categories_parent_id_profile_categories_id_fk";
  
  DROP INDEX "profile_categories_slug_idx";
  DROP INDEX "profile_categories_parent_idx";
  ALTER TABLE "profile_categories" DROP COLUMN "generate_slug";
  ALTER TABLE "profile_categories" DROP COLUMN "slug";
  ALTER TABLE "profile_categories" DROP COLUMN "parent_id";`)
}

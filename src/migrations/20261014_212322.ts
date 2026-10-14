import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_archive_relation_to" ADD VALUE 'profiles';
  ALTER TYPE "public"."enum__pages_v_blocks_archive_relation_to" ADD VALUE 'profiles';
  ALTER TABLE "pages_rels" ADD COLUMN "profile_categories_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "profiles_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "profile_categories_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "profiles_id" integer;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_profile_categories_fk" FOREIGN KEY ("profile_categories_id") REFERENCES "public"."profile_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_profiles_fk" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_profile_categories_fk" FOREIGN KEY ("profile_categories_id") REFERENCES "public"."profile_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_profiles_fk" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_profile_categories_id_idx" ON "pages_rels" USING btree ("profile_categories_id");
  CREATE INDEX "pages_rels_profiles_id_idx" ON "pages_rels" USING btree ("profiles_id");
  CREATE INDEX "_pages_v_rels_profile_categories_id_idx" ON "_pages_v_rels" USING btree ("profile_categories_id");
  CREATE INDEX "_pages_v_rels_profiles_id_idx" ON "_pages_v_rels" USING btree ("profiles_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_profile_categories_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_profiles_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_profile_categories_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_profiles_fk";
  
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::text;
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::"public"."enum_pages_blocks_archive_relation_to";
  ALTER TABLE "pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum_pages_blocks_archive_relation_to" USING "relation_to"::"public"."enum_pages_blocks_archive_relation_to";
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::text;
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DEFAULT 'posts'::"public"."enum__pages_v_blocks_archive_relation_to";
  ALTER TABLE "_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum__pages_v_blocks_archive_relation_to" USING "relation_to"::"public"."enum__pages_v_blocks_archive_relation_to";
  DROP INDEX "pages_rels_profile_categories_id_idx";
  DROP INDEX "pages_rels_profiles_id_idx";
  DROP INDEX "_pages_v_rels_profile_categories_id_idx";
  DROP INDEX "_pages_v_rels_profiles_id_idx";
  ALTER TABLE "pages_rels" DROP COLUMN "profile_categories_id";
  ALTER TABLE "pages_rels" DROP COLUMN "profiles_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "profile_categories_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "profiles_id";`)
}

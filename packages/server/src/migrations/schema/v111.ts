// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
/*
 * This is a generated file
 * Do not edit manually.
 */

import type { PoolClient } from 'pg';
import * as fns from '../migrate-functions';

// prettier-ignore
export async function run(client: PoolClient): Promise<void> {
  const results: { name: string; durationMs: number }[] = []
  await fns.query(client, results, `CREATE TABLE "Assistant" (
  "id" UUID PRIMARY KEY,
  "content" TEXT NOT NULL,
  "lastUpdated" TIMESTAMPTZ NOT NULL,
  "deleted" BOOLEAN NOT NULL DEFAULT false,
  "projectId" UUID NOT NULL,
  "__version" INTEGER NOT NULL,
  "_source" TEXT,
  "_profile" TEXT[],
  "compartments" UUID[] NOT NULL,
  "__sharedTokens" UUID[],
  "__sharedTokensText" TEXT[],
  "___securitySort" TEXT,
  "___tag" UUID[],
  "___tagText" TEXT[],
  "___tagSort" TEXT,
  "url" TEXT,
  "version" TEXT,
  "__identifier" UUID[],
  "__identifierText" TEXT[],
  "__identifierSort" TEXT,
  "name" TEXT,
  "status" TEXT,
  "__model" UUID[],
  "__modelText" TEXT[],
  "__modelSort" TEXT,
  "provider" TEXT,
  "bot" TEXT,
  "___compartmentIdentifierSort" TEXT,
  "__botIdentifierSort" TEXT
);`);
  await fns.query(client, results, `CREATE INDEX "Assistant_lastUpdated_idx" ON "Assistant" ("lastUpdated");`);
  await fns.query(client, results, `CREATE INDEX "Assistant_projectId_lastUpdated_idx" ON "Assistant" ("projectId", "lastUpdated");`);
  await fns.query(client, results, `CREATE INDEX "Assistant_projectId_idx" ON "Assistant" ("projectId");`);
  await fns.query(client, results, `CREATE INDEX "Assistant__source_idx" ON "Assistant" ("_source");`);
  await fns.query(client, results, `CREATE INDEX "Assistant__profile_idx" ON "Assistant" USING gin ("_profile");`);
  await fns.query(client, results, `CREATE INDEX "Assistant___version_idx" ON "Assistant" ("__version");`);
  await fns.query(client, results, `CREATE INDEX "Assistant_reindex_idx" ON "Assistant" ("lastUpdated", "__version") WHERE (deleted = false);`);
  await fns.query(client, results, `CREATE INDEX "Assistant_compartments_idx" ON "Assistant" USING gin ("compartments");`);
  await fns.query(client, results, `CREATE INDEX "Assistant___sharedTokens_idx" ON "Assistant" USING gin ("__sharedTokens");`);
  await fns.query(client, results, `CREATE INDEX "Assistant___sharedTokensTextTrgm_idx" ON "Assistant" USING gin (token_array_to_text("__sharedTokensText") gin_trgm_ops);`);
  await fns.query(client, results, `CREATE INDEX "Assistant____tag_idx" ON "Assistant" USING gin ("___tag");`);
  await fns.query(client, results, `CREATE INDEX "Assistant____tagTextTrgm_idx" ON "Assistant" USING gin (token_array_to_text("___tagText") gin_trgm_ops);`);
  await fns.query(client, results, `CREATE INDEX "Assistant_url_idx" ON "Assistant" ("url");`);
  await fns.query(client, results, `CREATE INDEX "Assistant_version_idx" ON "Assistant" ("version");`);
  await fns.query(client, results, `CREATE INDEX "Assistant___idnt_idx" ON "Assistant" USING gin ("__identifier");`);
  await fns.query(client, results, `CREATE INDEX "Assistant___idntTextTrgm_idx" ON "Assistant" USING gin (token_array_to_text("__identifierText") gin_trgm_ops);`);
  await fns.query(client, results, `CREATE INDEX "Assistant_name_idx" ON "Assistant" ("name");`);
  await fns.query(client, results, `CREATE INDEX "Assistant_status_idx" ON "Assistant" ("status");`);
  await fns.query(client, results, `CREATE INDEX "Assistant___model_idx" ON "Assistant" USING gin ("__model");`);
  await fns.query(client, results, `CREATE INDEX "Assistant___modelTextTrgm_idx" ON "Assistant" USING gin (token_array_to_text("__modelText") gin_trgm_ops);`);
  await fns.query(client, results, `CREATE INDEX "Assistant_provider_idx" ON "Assistant" ("provider");`);
  await fns.query(client, results, `CREATE INDEX "Assistant_bot_idx" ON "Assistant" ("bot");`);
  await fns.query(client, results, `CREATE TABLE "Assistant_History" (
  "versionId" UUID PRIMARY KEY,
  "id" UUID NOT NULL,
  "content" TEXT NOT NULL,
  "lastUpdated" TIMESTAMPTZ NOT NULL
);`);
  await fns.query(client, results, `CREATE INDEX "Assistant_History_id_idx" ON "Assistant_History" ("id");`);
  await fns.query(client, results, `CREATE INDEX "Assistant_History_lastUpdated_idx" ON "Assistant_History" ("lastUpdated");`);
  await fns.query(client, results, `CREATE TABLE "Assistant_References" (
  "resourceId" UUID NOT NULL,
  "targetId" UUID NOT NULL,
  "code" TEXT NOT NULL,
  PRIMARY KEY ("resourceId", "targetId", code)
);`);
  await fns.query(client, results, `CREATE INDEX "Assistant_Refs_targetId_code_idx" ON "Assistant_References" ("targetId", "code") INCLUDE ("resourceId");`);
}

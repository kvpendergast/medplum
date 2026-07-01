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
  await fns.query(client, results, `CREATE TABLE "AssistantTool" (
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
  "name" TEXT,
  "__identifier" UUID[],
  "__identifierText" TEXT[],
  "__identifierSort" TEXT,
  "assistant" TEXT,
  "___compartmentIdentifierSort" TEXT,
  "__assistantIdentifierSort" TEXT
);`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_lastUpdated_idx" ON "AssistantTool" ("lastUpdated");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_projectId_lastUpdated_idx" ON "AssistantTool" ("projectId", "lastUpdated");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_projectId_idx" ON "AssistantTool" ("projectId");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool__source_idx" ON "AssistantTool" ("_source");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool__profile_idx" ON "AssistantTool" USING gin ("_profile");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool___version_idx" ON "AssistantTool" ("__version");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_reindex_idx" ON "AssistantTool" ("lastUpdated", "__version") WHERE (deleted = false);`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_compartments_idx" ON "AssistantTool" USING gin ("compartments");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool___sharedTokens_idx" ON "AssistantTool" USING gin ("__sharedTokens");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool___sharedTokensTextTrgm_idx" ON "AssistantTool" USING gin (token_array_to_text("__sharedTokensText") gin_trgm_ops);`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool____tag_idx" ON "AssistantTool" USING gin ("___tag");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool____tagTextTrgm_idx" ON "AssistantTool" USING gin (token_array_to_text("___tagText") gin_trgm_ops);`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_name_idx" ON "AssistantTool" ("name");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool___idnt_idx" ON "AssistantTool" USING gin ("__identifier");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool___idntTextTrgm_idx" ON "AssistantTool" USING gin (token_array_to_text("__identifierText") gin_trgm_ops);`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_assistant_idx" ON "AssistantTool" ("assistant");`);
  await fns.query(client, results, `CREATE TABLE "AssistantTool_History" (
  "versionId" UUID PRIMARY KEY,
  "id" UUID NOT NULL,
  "content" TEXT NOT NULL,
  "lastUpdated" TIMESTAMPTZ NOT NULL
);`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_History_id_idx" ON "AssistantTool_History" ("id");`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_History_lastUpdated_idx" ON "AssistantTool_History" ("lastUpdated");`);
  await fns.query(client, results, `CREATE TABLE "AssistantTool_References" (
  "resourceId" UUID NOT NULL,
  "targetId" UUID NOT NULL,
  "code" TEXT NOT NULL,
  PRIMARY KEY ("resourceId", "targetId", code)
);`);
  await fns.query(client, results, `CREATE INDEX "AssistantTool_Refs_targetId_code_idx" ON "AssistantTool_References" ("targetId", "code") INCLUDE ("resourceId");`);
  await fns.query(client, results, `ALTER TABLE IF EXISTS "Assistant" ADD COLUMN IF NOT EXISTS "tool" TEXT[]`);
  await fns.query(client, results, `ALTER TABLE IF EXISTS "Assistant" ADD COLUMN IF NOT EXISTS "__toolIdentifierSort" TEXT`);
  await fns.query(client, results, `CREATE INDEX IF NOT EXISTS "Assistant_tool_idx" ON "Assistant" USING gin ("tool")`);
}

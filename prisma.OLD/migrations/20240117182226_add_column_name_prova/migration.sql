/*
  Warnings:

  - Added the required column `nome_prova` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "enun" TEXT NOT NULL,
    "a1" TEXT NOT NULL,
    "a2" TEXT NOT NULL,
    "a3" TEXT NOT NULL,
    "a4" TEXT NOT NULL,
    "a5" TEXT NOT NULL,
    "resp" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "nome_prova" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_questions" ("a1", "a2", "a3", "a4", "a5", "ano", "area", "cargo", "created_at", "enun", "id", "materia", "nivel", "resp", "updated_at") SELECT "a1", "a2", "a3", "a4", "a5", "ano", "area", "cargo", "created_at", "enun", "id", "materia", "nivel", "resp", "updated_at" FROM "questions";
DROP TABLE "questions";
ALTER TABLE "new_questions" RENAME TO "questions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

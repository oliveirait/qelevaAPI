-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "enun" TEXT NOT NULL,
    "a1" TEXT NOT NULL,
    "a2" TEXT NOT NULL,
    "a3" TEXT NOT NULL,
    "a4" TEXT NOT NULL,
    "a5" TEXT NOT NULL,
    "resp" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

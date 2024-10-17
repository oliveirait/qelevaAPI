/*
  Warnings:

  - A unique constraint covering the columns `[enun]` on the table `questions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "questions_enun_key" ON "questions"("enun");

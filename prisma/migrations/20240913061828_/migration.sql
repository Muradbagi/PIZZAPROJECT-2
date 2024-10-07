/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAT` on the `ProductItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductItem" DROP COLUMN "createdAt",
DROP COLUMN "updatedAT";

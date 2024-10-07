/*
  Warnings:

  - Added the required column `updatedAT` to the `ProductItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAT" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "pizzaType" DROP NOT NULL;

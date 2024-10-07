/*
  Warnings:

  - Added the required column `pizzaType` to the `ProductItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "pizzaType" INTEGER NOT NULL;

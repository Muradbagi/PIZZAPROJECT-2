/*
  Warnings:

  - You are about to drop the column `pizzaId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `VerificationCode` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `VerificationCode` table. All the data in the column will be lost.
  - You are about to drop the `Pizza` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IngredientToPizza` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_pizzaId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_cartId_fkey";

-- DropForeignKey
ALTER TABLE "Pizza" DROP CONSTRAINT "Pizza_productId_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToPizza" DROP CONSTRAINT "_IngredientToPizza_A_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToPizza" DROP CONSTRAINT "_IngredientToPizza_B_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "pizzaId";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "cartId";

-- AlterTable
ALTER TABLE "VerificationCode" DROP COLUMN "expiresAt",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "Pizza";

-- DropTable
DROP TABLE "_IngredientToPizza";

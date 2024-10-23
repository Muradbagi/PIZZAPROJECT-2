import { Container, ProductImage, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variants";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  try {
    // Попытка получить продукт из базы данных по его ID
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });

    // Если продукт не найден, перенаправляем на страницу 404
    if (!product) return notFound();

    // Рендерим страницу продукта, если он найден
    return (
      <Container className="flex my-10">
        <div className="flex flex-1">
          <ProductImage imageUrl={product.imageUrl} size={40} />
        </div>

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />

          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <GroupVariants
            selectedValue="2"
            items={[
              { name: 'Маленькая', value: '1' },
              { name: 'Средняя', value: '2' },
              { name: 'Большая', value: '3', disabled: true },
            ]}
          />
        </div>
      </Container>
    );
  } catch (error) {
    // Логирование ошибки и переход на страницу 404, если произошла ошибка
    console.error("Error fetching product:", error);
    return notFound();
  }
}

import { Container, Title } from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";


export default function Home() {
  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>  

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
            <ProductsGroupList 
              title="Пиццы" 
              items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D610EF682CB8244F77682B80689.avif",
                  price: 600,
                  items: [{ price: 600 }],  
                },
                {
                  id: 2,
                  name: "Бургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D6169F149548AF85880D7F1E053.avif",
                  price: 600,
                  items: [{ price: 600 }],  
                },
                {
                  id: 3,
                  name: "Гавайская",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D617EF504B8B95C614B0EEAAAFB.avif",
                  price: 600,
                  items: [{ price: 600 }],  
                },
                {
                  id: 4,
                  name: "Четыре сезона",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D611B42752E8B4A68B50D980CDE.avif",
                  price: 600,
                  items: [{ price: 600 }],  
                },
                {
                  id: 5,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D610EF682CB8244F77682B80689.avif",
                  price: 600,
                  items: [{ price: 600 }],  
                },
                {
                  id: 6,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D610EF682CB8244F77682B80689.avif",
                  price: 600,
                  items: [{ price: 600 }],  
                },
              ]} 
              categoryId={1} />
                  <ProductsGroupList 
              title="Комбо" 
              items={[
                {
                  id: 7,
                  name: "Омлет с пепперони",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif",
                  price: 200,
                  items: [{ price: 600 }],  
                },
                {
                  id: 8,
                  name: "Омлет сырный",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE797033873EB1B4B77F7E70BBA37E.avif",
                  price: 250,
                  items: [{ price: 600 }],  
                },
                {
                  id: 9,
                  name: "Омлет с пепперони",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif",
                  price: 200,
                  items: [{ price: 200 }],  
                },
                {
                  id: 10,
                  name: "Омлет сырный",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE797033873EB1B4B77F7E70BBA37E.avif",
                  price: 250,
                  items: [{ price: 250 }],  
                },
                {
                  id: 11,
                  name: "Сырники со сгущенным молоком",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D61877A2EE09AA2178718EFB59C.avif",
                  price: 165,
                  items: [{ price: 165 }],  
                },
                {
                  id: 12,
                  name: "Сырники с малиновым вареньем",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:584x584/11EE7D610EF682CB8244F77682B80689.avif",
                  price: 170,
                  items: [{ price: 170 }],  
                },
              ]} 
              categoryId={2} />
            </div>
            <div className="flex items-center gap-6 mt-12">
              <span className="text-sm text-gray-400">5 из 65</span>
            </div>
          </div>
        </div>
      </Container>
    </main> 
  );
};

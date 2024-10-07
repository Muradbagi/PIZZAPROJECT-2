import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

interface ReturnProps {
  items: Ingredient[];    
}

export const useFilterIngredients = (): ReturnProps => {
    const [items, setItems] = React.useState<Ingredient[]>([]);
    
    React.useEffect(() => {
        async function fetchIngredients() {
          try {
            const ingredients = await Api.ingredients.getAll();
            return ingredients;
          } catch (error) {
            console.log(error);  
          }
        }    
  
      fetchIngredients();
    }, []);    
};
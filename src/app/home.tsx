import { useEffect, useState,  } from "react"   
import { View, Text, Alert } from "react-native"

import { api } from "@/services/api"

import { Categories, CategoriesProps,  } from "@/components/categories"

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]) 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  async function fetchCategories() {
    try {
      const { data } = await api.get<CategoriesProps>("/categories")  
      setCategories(data)
      
    } catch (error) {
      console.log(error)      
      Alert.alert("Erro ao buscar categorias")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
        onSelect={setSelectedCategory}
        selected={selectedCategory || ""}
        data={[]}      /> 
      <Text>Home</Text>
    </View>
  )
}
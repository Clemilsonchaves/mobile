import { useEffect, useState,  } from "react"   
import { View, Text, Alert } from "react-native"

import { api } from "@/services/api"
import { Places } from "@/components/places"

import { Categories, CategoriesProps,  } from "@/components/categories"
import { PlaceProps } from "@/components/place"

type MarketsProps = PlaceProps  


export default function Home() {
  
  const [categories, setCategories] = useState<CategoriesProps[]>([]) 
  const [category, setCategory ] = useState("") 
  const [ markets, setMarkets] = useState<MarketsProps[]>([])

  async function fetchCategories() {
    try {
      const { data } = await api.get<CategoriesProps[]>("/categories")  
      setCategories(data)
      setCategory(data[0].id)
      
    } catch (error) {
      console.log(error)      
      Alert.alert("Erro ao buscar categorias")
    }
  }

  async function fetchMarkets() {
    try {

      if (!category) {
        return
      }

      const { data } = await api.get<PlaceProps[]>("/markets/category/" + category )
      setMarkets(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Locais", "Não foi possível carregar os locais.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])


  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
         data={categories}
         onSelect={setCategory}
         selected={category}
      />
      <Places data={markets} />
     
    </View>
  )
}
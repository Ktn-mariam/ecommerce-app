import { createContext, useState, useEffect } from 'react'

const ProductListContext = createContext<ProductListType>({
  productList: [],
  categories: [],
  currentCategory: 'All',
  setCurrentCategory: () => {},
})

export interface ProductListType {
  productList: ProductType[]
  categories: string[]
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}

export interface ProductType {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export const ProductListContextProvider = ({ children }: Props) => {
  const [productList, setProductList] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [currentCategory, setCurrentCategory] = useState<string>('All')

  useEffect(() => {
    const fetchProductLists = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => {
            return json
          })
        console.log(response)
        setProductList(response)
      } catch (error) {
        console.log('Error fetching items:', error)
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories',
        )
        const json = await response.json()
        setCategories(json)
      } catch (error) {
        console.log('Error fetching items:', error)
      }
    }
    fetchCategories()
    fetchProductLists()
  }, [productList])

  const contextValue = {
    productList,
    categories,
    currentCategory,
    setCurrentCategory,
  }

  return (
    <ProductListContext.Provider value={contextValue}>
      {children}
    </ProductListContext.Provider>
  )
}

export default ProductListContext

import { createContext, useState, useEffect } from 'react'

const ProductListContext = createContext<ProductListType>({
  productList: [],
})

export interface ProductListType {
  productList: ProductType[]
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
    fetchProductLists()
  }, [productList])

  const contextValue = {
    productList,
  }

  return (
    <ProductListContext.Provider value={contextValue}>
      {children}
    </ProductListContext.Provider>
  )
}

export default ProductListContext

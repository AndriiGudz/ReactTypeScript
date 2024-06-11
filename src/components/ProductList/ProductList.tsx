import {
  ProductListComponent,
  ProductElement,
  ProductsId,
  ProductsName,
  AddResult,
  DivLine
} from './styles'
import { ProductListTypes } from './types'
import { products } from './data'
import Button from 'components/Button/Button'
import { useState } from 'react'
import { v4 } from 'uuid'

function ProductList() {
  const [addedProducts, setAddedProducts] = useState<string[]>([]);

  const addProductToList = (productName: string) => {
    setAddedProducts((prevProducts) => [...prevProducts, productName]);
  };

  const productElements = products.map((product) => {
    return (
      <ProductElement key={product.id}>
        <ProductsId>{product.id}</ProductsId>
        <ProductsName>{product.name}</ProductsName>
        <Button name="add" onClick={() => addProductToList(product.name)} />
      </ProductElement>
    )
  })

  const noteList = addedProducts.map((product) => (
    <div key={v4()}>{product}</div>
  ));

  return (
    <ProductListComponent>
      {productElements}
      <DivLine></DivLine>
      <AddResult>{noteList}</AddResult>
    </ProductListComponent>
  )
}

export default ProductList

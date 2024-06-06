import {
  ProductListComponent,
  ProductElement,
  ProductsId,
  ProductsName,
  AddResult,
} from './styles'
import { ProductListTypes } from './types'
import { products } from './data'
import Button from 'components/Button/Button'

function ProductList() {
  const productElements = products.map((product) => {
    // const BtnClick = () => {
    //   addProductToList(product.name)
    // }

    return (
      <ProductElement key={product.id}>
        <ProductsId>{product.id}</ProductsId>
        <ProductsName>{product.name}</ProductsName>
        <Button name="add" />
      </ProductElement>
    )
  })

  return (
    <ProductListComponent>
      {productElements}
      <div></div>
      {/* <AddResult>{addProductToList}</AddResult> */}
    </ProductListComponent>
  )
}

export default ProductList

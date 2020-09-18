export type ProductProps = {
  product: ProductT
  onProductClick: any
}

type ProductT = {
  key: string
  state: string
  category: string
  title: string
  filling: string
  info: Array<string>
  weight: number
  bottomtext: string
  bottomfailtext: string
}

export type ProductsProps = {
  products: Array<ProductT>
}

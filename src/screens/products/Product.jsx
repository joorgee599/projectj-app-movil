import { View } from "react-native"
import { productStyles } from "../../styles/Product"
import DataProducts from "../../components/products/DataProducts"


const Product = () => {
  return (
   <View style={productStyles.container}>
      <DataProducts />
      </View>
  )
}

export default Product
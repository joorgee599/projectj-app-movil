import { View } from "react-native"
import { userStyles } from "../../styles/User"
import DataUser from "../../components/users/DataUser"


export const User = () => {
  return (
   <View style={userStyles.container}>
      <DataUser />
      </View>
  )
}

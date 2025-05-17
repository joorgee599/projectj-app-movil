import { View } from "react-native"
import { Text } from "react-native-paper"
import { authStyles } from "../styles/Auth"
import FormLogin from "../components/auth/FormLogin"


const Login = () => {
  return (
    <View style={authStyles.container}>
       <FormLogin/>
        
    </View>
  )
}

export default Login
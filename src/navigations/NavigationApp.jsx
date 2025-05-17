import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PaperProvider } from "react-native-paper"
import Login from "../screens/Login";

const Stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function NavigationApp() {
  return (
    <PaperProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                name="Login"
                component={Login}
                options={{headerShown:false}}>
                    
                </Stack.Screen>

            </Stack.Navigator>
            
        </NavigationContainer>
    </PaperProvider>
  )
}

export default NavigationApp
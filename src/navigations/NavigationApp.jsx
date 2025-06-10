import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import Login from "../screens/Login";
import { TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import { FontAwesome } from "@expo/vector-icons";
import { User } from "../screens/users/User";
import EditUser from "../components/users/EditUser";
import Product from "../screens/products/Product";
import ShowProducts from "../components/products/ShowProducts";
import FormProducts from "../components/products/FormProducts";
import FormEditProducts from "../components/products/FormEditProducts";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const WelcomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home"; // Nombre del icono para la pestaña Home
          }
            else if (route.name === "User") {
              iconName = focused ? "user" : "user"; // Nombre del icono para la pestaña Proveedor
            } 
           else if (route.name === "Product") {
              iconName = focused ? "car" : "car"; // Nombre del icono para la pestaña Proveedor
            }
            //  else if (route.name === "Recepción en planta") {
            //   iconName = focused ? "car" : "car"; // Nombre del icono para la pestaña Proveedor
            // }
          // Puedes cambiar el conjunto de iconos según tus necesidades
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#47596e", // Color del icono activo
        tabBarInactiveTintColor: "gray", // Color del icono inactivo
        // tabBarStyle: { display: isSyncing ? "none" : "flex" },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        options={{ headerShown: true ,unmountOnBlur:true}}
        name="User"
        component={User}
      />

        <Tab.Screen
          options={{ headerShown: false,unmountOnBlur:true }}
          name="Product"
          component={Product}
        />
      {/* 
     
        
     
    

      <Tab.Screen
                options={{ headerShown: false,unmountOnBlur:true }}
                name="Recepción en planta"
                component={RecepcionPlanta}
              />
   */}
    </Tab.Navigator>
  );
};
function NavigationApp() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="EditUser"
            component={EditUser}
            
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="ShowProducts"
            component={ShowProducts}
            
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="FormProducts"
            component={FormProducts}
            
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="FormEditProducts"
            component={FormEditProducts}
            
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={WelcomeTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default NavigationApp;

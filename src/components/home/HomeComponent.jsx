import React from 'react'
import { Alert,  View } from 'react-native'
import { homeStyles } from '../../styles/Home'
import { logoutController } from '../../controllers/AuthController'
import { useNavigation } from '@react-navigation/native'
import { Button, Text } from 'react-native-paper'

const HomeComponent = () => {
    const navigation = useNavigation();

  const  handleLogout = async (e) => {   
    e.preventDefault();
   // console.log("logout");
     const response = await logoutController();
    // console.log("logout");
       if (response.success) {
   
         Alert.alert(response.message || "Cierre de sesión exitoso.");
         navigation.navigate("Login");
        
       } else {
         Alert.alert(response.message || "No se pudo cerrar sesión.");
         navigation.navigate("Welcome");
       }
  }         
  return (
    <View>
        <Text>
         Bienvenido a project 
         </Text>
         <Button 
         style={homeStyles.button}
         onPress={handleLogout}
         labelStyle={{ color: '#fff' }}
         icon="logout"
         mode="contained"
          >
            Cerrar sesión
          </Button>
    </View>
   
  )
}

export default HomeComponent
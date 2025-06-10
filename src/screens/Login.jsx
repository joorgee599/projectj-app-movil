import { View } from "react-native";
import { Text } from "react-native-paper";
import { authStyles } from "../styles/Auth";
import FormLogin from "../components/auth/FormLogin";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const userAutenticate = async () => {
    await AsyncStorage.getItem("user").then((data) => {
      if (data) {
        const user = JSON.parse(data);
        if (user && user.token) {
          
          navigation.navigate("Welcome");
        } else {
          
          navigation.navigate("Login");
        }
      } else {
        return null;
      }
    });
  };
  useEffect(() => {
    userAutenticate();
  }, []);

  return (
    <View style={authStyles.container}>
      <FormLogin />
    </View>
  );
};

export default Login;

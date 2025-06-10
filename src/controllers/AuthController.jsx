// src/controllers/auth/loginController.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthModel } from "../models/AuthModel";


export const loginController = async (credentials) => {
 
  const authModel = new AuthModel();
  const response = await authModel.login(credentials);
  

  if (response.success) {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({
        id: response.user.id,
        name: response.user.name,
        token: response.token,
      })
    );
  }
   

  return response;
};

export const logoutController = async () => {
  
  const authModel = new AuthModel();
  
 
  const response = await authModel.logout();
  if (response.success) {
    AsyncStorage.removeItem("user");
  }
  return response;
};

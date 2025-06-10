import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { userStylesDos } from "../../styles/User";
import useForm from "../../hooks/useForm";
import { getUsersByIdController, updateUserController } from "../../controllers/users/UserController";
import { useEffect } from "react";

const EditUser = () => {
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();

  const { values, handleChange, resetValues, setFormValues } = useForm({
    id: "",
    name: "",
    email: "",
  });
   useEffect(() => {
    getUsersById();        
  }, []);
    
    const getUsersById = async () => {
      const response = await getUsersByIdController(id);
      
      if(response.success){
       
        setFormValues({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
         
        });
      }else{
        alert(response.message || "Error al obtener el usuario");
      } 
     
    }
    

    const handleSubmit = async () => {
      const response= await updateUserController(values);
      if(response.success){
         navigation.navigate("Welcome");
       //  navigation.goBack();
        resetValues();
        alert(response.message || "usuario actualizado correctamente");  
      } else{
        alert(response.message || "Error al actualizar el usuario");
      }
  }

    
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={userStylesDos.card2}>
          <View style={userStylesDos.mb_2}>
            <TextInput
              mode="outlined"
              label="Nombre"
              placeholder="Nombre"
              left={<TextInput.Icon color="black" icon="group" />}
              value={values.name}
              onChangeText={(text) => handleChange("name", text)}
              style={userStylesDos.inputMnifest}
              theme={{
                colors: {
                  onSurfaceVariant: "black",
                },
              }}
            />
          </View>
          <View style={userStylesDos.mb_2}>
            <TextInput
              mode="outlined"
              label="Correo Electrónico"
              placeholder="Correo Electrónico"
              left={<TextInput.Icon color="black" icon="face-agent" />}
              value={values.email}
              onChangeText={(text) => handleChange("email", text)}
              style={userStylesDos.inputMnifest}
              theme={{
                colors: {
                  onSurfaceVariant: "black",
                },
              }}
            />
          </View>
          <Button 
            mode="contained"
            icon="content-save-edit"
            onPress={() => handleSubmit()}  
            style={{ 
              marginTop: 10,
              marginBottom: 60,
              backgroundColor: "#47596e", 
             }}
             labelStyle={{ color: "#fff" }}
           //  loading={false} // Puedes controlar el estado de carga aquí
           
          >
            Editar Usuario    
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditUser;

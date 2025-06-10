import { Alert, Image, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import useForm from "../../hooks/useForm";
import { authStyles } from "../../styles/Auth";
import { useNavigation } from "@react-navigation/native";
import { loginController } from "../../controllers/AuthController";

const FormLogin = () => {
    const navigation = useNavigation();
  const { values, handleChange, resetValues, setFormValues } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginController(values);

    if (response.success) {

      Alert.alert(response.message || "Inicio de sesión exitoso.");
      navigation.navigate("Welcome");
      resetValues();
    } else {
      Alert.alert(response.message || "No se pudo iniciar sesión.");
    //  navigation.navigate("Welcome");
    }
  };


return (
    <View>
      <Image
        source={require("../../../assets/logo-projectj.png")}
        style={{ width: 250, height: 180, margin: 5, alignSelf: "center" }}
      />
      <TextInput
        style={authStyles.input}
        placeholder={"Email"}
        value={values.email}
        onChangeText={(text) => handleChange("email", text)}
        theme={{ colors: { onSurfaceVariant: "black" } }}
      />

      <TextInput
        style={authStyles.input}
        placeholder={"Conraseña"}
        value={values.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry={true}
        theme={{ colors: { onSurfaceVariant: "black" } }}
      />

      <Button icon="login" mode="contained" onPress={handleSubmit}>Iniciar sesión</Button>
    </View>
  );
};

export default FormLogin;

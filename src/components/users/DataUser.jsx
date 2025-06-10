import { Image, View, ScrollView } from "react-native";
import { Text, Button, Card, List, Avatar } from "react-native-paper";
import { userStyles } from "../../styles/User";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getShowUsersController } from "../../controllers/users/UserController";
import { useNavigation } from "@react-navigation/native";

const DataUser = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState({});
  useEffect(() => {
    getUsersById();
  }, []);

  const getUsersById = async () => {
    const userData = await AsyncStorage.getItem("user");
    const user = JSON.parse(userData);
    const id = user?.id || null;
    const response = await getShowUsersController(id);
    // console.log(response);
    if (response.success) {
      setUsers(response.data);
    } else {
      alert(response.message || "Error al obtener el users");
      return null;
    }
  };
  return (
    <>
      <ScrollView style={userStyles.scrollContainer}>
        <View style={userStyles.innerContainer}>
          <Image
            source={require("../../../assets/logo-projectj.png")}
            style={userStyles.logo}
          />
          <Card style={userStyles.card}>
            <Card.Content>
              <List.Icon color="white" />
              <Text style={userStyles.headerText}>Administrador</Text>
              <List.Icon color="white" />
            </Card.Content>
            <Card.Content style={userStyles.cardBody}>
              <View style={userStyles.avatarContainer}>
                <Avatar.Icon
                  size={80}
                  icon="account-tie"
                  style={userStyles.avatar}
                />
              </View>
            </Card.Content>
            <Card.Content>
              <Text style={userStyles.syncText}>{users.name}</Text>
              <Text style={userStyles.syncText}>{users.email}</Text>
            </Card.Content>
          </Card>
          {/* <Card style={userStyles.card}>
          <Card.Content>
            <Text style={userStyles.syncTextBold}>Cadenas de Manifiesto</Text>
            <Text style={userStyles.syncText}>Fecha: {currentDate}</Text>
            <Text style={userStyles.syncText}>
              Total sin sincronizar: {countManifest}
            </Text>
          </Card.Content>
        </Card> */}
        </View>
        <Button
          style={userStyles.button}
          labelStyle={{ color: "#fff" }}
          icon="pencil"
          mode="contained"
          onPress={() => {
            navigation.navigate("EditUser", { id: users.id });
           
          }}
        >
          Editar usuario
        </Button>
      </ScrollView>
    </>
  );
};

export default DataUser;

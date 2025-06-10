import { useEffect, useState } from "react";
import { View, FlatList, Image } from "react-native";
import { Searchbar, Card, Button, Text, Chip } from "react-native-paper";
import logoProjectJ from "../../../assets/logo-projectj.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { getProductsController } from "../../controllers/products/ProductController";
import { productStyles } from "../../styles/Product";

const DataProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await getProductsController();
    setProducts(response?.data || []);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Card style={{ marginBottom: 10 }}>
      <Card.Title title={item.name} subtitle={`Código: ${item.code}`} />
      <Card.Content>
        <Text>{item.description}</Text>
        <Text>Precio: ${item.price}</Text>
        <Text>Categoría: {item.category?.name}</Text>
        <Text>Marca: {item.brand?.name}</Text>
        <Chip style={{ marginTop: 5 }} icon="information">
          {item.status === 1 ? "Activo" : "Inactivo"}
        </Chip>
      </Card.Content>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Actions>
        <Button
          icon={() => <Icon name="eye" size={16} />}
          onPress={() => navigation.navigate("ShowProducts", { id: item.id })}
        >
          Ver
        </Button>
        <Button
          icon={() => <Icon name="edit" size={16} />}
          onPress={() => navigation.navigate("FormEditProducts", { id: item.id })}
        >
          Editar
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={productStyles.container}>
      <Button
        icon="plus"
        mode="outlined"
        onPress={() => navigation.navigate("FormProducts")}
        style={{ marginBottom: 10 }}
      >
        Nuevo Producto
      </Button>

      <Searchbar
        placeholder="Buscar producto..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        style={{ marginBottom: 10 }}
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default DataProducts;

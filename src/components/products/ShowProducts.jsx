import React, { useEffect, useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Button, Card, Text, Chip } from "react-native-paper";
import { getShowProductsController } from "../../controllers/products/ProductController";
import logoProjectJ from "../../../assets/logo-projectj.png"; // Imagen local fallback
import { productStyles } from "../../styles/Product";

const ShowProducts = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const response = await getShowProductsController(id);
    if (response.success) {
      setProduct(response.data);
    } else {
      alert(response.message || "Error al obtener el producto");
    }
  };

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando producto...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={productStyles.scrollContainer}>
      <View
        style={{
          marginBottom: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="titleLarge">Ver producto</Text>
        <Button mode="outlined" onPress={() => navigation.goBack()}>
          Atrás
        </Button>
      </View>

      <Card>
        <Card.Title title={`Detalles del producto #${product.id}`} />
        <Card.Content>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Código:</Text> {product.code}
          </Text>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Nombre:</Text> {product.name}
          </Text>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Descripción:</Text>{" "}
            {product.description}
          </Text>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Categoría:</Text>{" "}
            {product.category?.name}
          </Text>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Marca:</Text>{" "}
            {product.brand?.name}
          </Text>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Precio:</Text> ${product.price}
          </Text>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Estado:</Text>{" "}
            <Chip
              style={{ marginVertical: 4 }}
              textStyle={{ color: product.status === 1 ? "green" : "red" }}
            >
              {product.status === 1 ? "Activo" : "Inactivo"}
            </Chip>
          </Text>
          <Text variant="bodyMedium">
            <Text style={{ fontWeight: "bold" }}>Fecha de creación:</Text>{" "}
            {product.created_at}
          </Text>
        </Card.Content>
        <Card.Cover
          source={product.image ? { uri: product.image } : logoProjectJ}
          style={{ marginTop: 10 }}
        />
      </Card>
    </ScrollView>
  );
};

export default ShowProducts;

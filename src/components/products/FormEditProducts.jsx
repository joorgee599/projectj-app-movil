import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import useForm from "../../hooks/useForm";

import { getDataSelectsController, getProductsByIdController, updateProductController } from "../../controllers/products/ProductController";
import { productStylesDos } from "../../styles/Product";


const FormEditProducts = () => {
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();

  const { values, handleChange, resetValues, setFormValues } = useForm({
    id: "",
    name: "",
    code: "",
    description: "",
    price: "",
    category_id: null,
    brand_id: null,
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getProductById();
    getDataSelects();
  }, []);

  const getProductById = async () => {
    const response = await  getProductsByIdController(id);
    console.log(response.data);
    if (response.success) {
      setFormValues({
        id: response.data.product.id,
        name: response.data.product.name,
        code: response.data.product.code,
        description: response.data.product.description,
        price: response.data.product.price.toString(),
        category_id: response.data.product.category_id,
        brand_id: response.data.product.brand_id,
      });
    } else {
      alert(response.message || "Error al obtener el producto");
    }
  };

  const getDataSelects = async () => {
    const response = await getDataSelectsController();
    if (response.success) {
      setCategories(response.data.categories);
      setBrands(response.data.brands);
    } else {
      alert(response.message || "Error al obtener las categorías y marcas");
    }
  };

  const handleSubmit = async () => {
    const response = await updateProductController(values);
    if (response.success) {
      resetValues();
      navigation.navigate("Welcome"); // o navigation.goBack()
      alert("Producto actualizado correctamente");
    } else {
      alert(response.message || "Error al actualizar el producto");
    }
  };

  return (
    <View >
      <ScrollView style={productStylesDos.scrollContainer}>
        
        <View style={productStylesDos.card2}>
            <View
                style={{
                  marginBottom: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="titleLarge">Editar producto</Text>
                <Button mode="outlined" onPress={() => navigation.goBack()}>
                  Atrás
                </Button>
              </View>
            
          {/* Nombre */}
          <View style={productStylesDos.mb_2}>
            <TextInput
              mode="outlined"
              label="Nombre"
              placeholder="Nombre del producto"
              value={values.name}
              onChangeText={(text) => handleChange("name", text)}
              style={productStylesDos.inputMnifest}
              left={<TextInput.Icon color="black" icon="tag" />}
              theme={{ colors: { onSurfaceVariant: "black" } }}
            />
          </View>

          {/* Código */}
          <View style={productStylesDos.mb_2}>
            <TextInput
              mode="outlined"
              label="Código"
              placeholder="Código del producto"
              value={values.code}
              onChangeText={(text) => handleChange("code", text)}
              style={productStylesDos.inputMnifest}
              left={<TextInput.Icon color="black" icon="barcode" />}
              theme={{ colors: { onSurfaceVariant: "black" } }}
            />
          </View>

          {/* Descripción */}
          <View style={productStylesDos.mb_2}>
            <TextInput
              mode="outlined"
              label="Descripción"
              placeholder="Descripción del producto"
              value={values.description}
              onChangeText={(text) => handleChange("description", text)}
              multiline
              style={productStylesDos.inputMnifest}
              theme={{ colors: { onSurfaceVariant: "black" } }}
            />
          </View>

          {/* Precio */}
          <View style={productStylesDos.mb_2}>
            <TextInput
              mode="outlined"
              label="Precio"
              placeholder="Precio del producto"
              value={values.price}
              onChangeText={(text) => handleChange("price", text)}
              keyboardType="numeric"
              style={productStylesDos.inputMnifest}
              left={<TextInput.Icon color="black" icon="cash" />}
              theme={{ colors: { onSurfaceVariant: "black" } }}
            />
          </View>

          {/* Categoría */}
          <Text style={{ marginTop: 10, marginBottom: 4 }}>Categoría</Text>
          <Picker
            selectedValue={values.category_id}
            onValueChange={(value) => handleChange("category_id", value)}
            style={{ marginBottom: 10 }}
          >
            <Picker.Item label="Selecciona una categoría" value={null} />
            {categories.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>

          {/* Marca */}
          <Text style={{ marginTop: 10, marginBottom: 4 }}>Marca</Text>
          <Picker
            selectedValue={values.brand_id}
            onValueChange={(value) => handleChange("brand_id", value)}
            style={{ marginBottom: 20 }}
          >
            <Picker.Item label="Selecciona una marca" value={null} />
            {brands.map((item) => (
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            ))}
          </Picker>

          {/* Botón */}
          <Button
            mode="contained"
            icon="content-save-edit"
            onPress={handleSubmit}
            style={{ marginBottom: 60, backgroundColor: "#47596e" }}
            labelStyle={{ color: "#fff" }}
          >
            Editar Producto
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default FormEditProducts;

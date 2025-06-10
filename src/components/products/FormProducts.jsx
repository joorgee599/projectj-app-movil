import { useNavigation } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import useForm from "../../hooks/useForm";
import { createProductController, getDataSelectsController } from "../../controllers/products/ProductController";
import { productStylesDos } from "../../styles/Product";


const FormProducts = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
   const [brands, setBrands] = useState([]);
   useEffect(() => {
      getDataSelects();   
  }, []);    
                
    const getDataSelects = async () => {
      const response =  await getDataSelectsController();
      if(response.success){
        console.log(response.data);
        setCategories(response.data.categories);
        setBrands(response.data.brands);
    }else{
        alert(response.message || "Error al obtener las categorias y marcas");
      }
  }

  const { values, handleChange, resetValues } = useForm({
    name: "",
    code: "",
    description: "",
    price: "",
    category_id: "",
    brand_id: "",
  });

  const handleSubmit = async () => {
    const response = await createProductController(values);

    if (response.success) {
      resetValues();
      alert(response.message || "Producto creado correctamente");
      navigation.navigate("Welcome");
    } else {
      alert(response.message || "Error al crear el producto");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={productStylesDos.card2}>
          <View
                style={{
                  marginBottom: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="titleLarge">Crear producto</Text>
                <Button mode="outlined" onPress={() => navigation.goBack()}>
                  Atrás
                </Button>
              </View>

          <TextInput
            mode="outlined"
            label="Nombre"
            placeholder="Nombre del producto"
            value={values.name}
            onChangeText={(text) => handleChange("name", text)}
            style={productStylesDos.inputMnifest}
          />

          <TextInput
            mode="outlined"
            label="Código"
            placeholder="Código"
            value={values.code}
            onChangeText={(text) => handleChange("code", text)}
            style={productStylesDos.inputMnifest}
          />

          <TextInput
            mode="outlined"
            label="Descripción"
            placeholder="Descripción del producto"
            multiline
            numberOfLines={4}
            value={values.description}
            onChangeText={(text) => handleChange("description", text)}
            style={productStylesDos.inputMnifest}
          />

          <TextInput
            mode="outlined"
            label="Precio"
            placeholder="Precio"
            keyboardType="numeric"
            value={values.price}
            onChangeText={(text) => handleChange("price", text)}
            style={productStylesDos.inputMnifest}
          />

          <Text style={{ marginTop: 10, fontSize: 16 }}>Categoría</Text>
          <Picker
            selectedValue={values.category_id}
            onValueChange={(value) => handleChange("category_id", value)}
            style={{ marginBottom: 10 }}
          >
            <Picker.Item label="Selecciona una categoría..." value="" />
            {categories.map((cat) => (
              <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
            ))}
          </Picker>

          <Text style={{ marginTop: 10, fontSize: 16 }}>Marca</Text>
          <Picker
            selectedValue={values.brand_id}
            onValueChange={(value) => handleChange("brand_id", value)}
            style={{ marginBottom: 10 }}
          >
            <Picker.Item label="Selecciona una marca..." value="" />
            {brands.map((brand) => (
              <Picker.Item key={brand.id} label={brand.name} value={brand.id} />
            ))}
          </Picker>

          <Button
            mode="contained"
            icon="content-save"
            onPress={handleSubmit}
            style={{
              marginTop: 20,
              marginBottom: 60,
              backgroundColor: "#47596e",
            }}
            labelStyle={{ color: "#fff" }}
          >
            Crear Producto
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default FormProducts;

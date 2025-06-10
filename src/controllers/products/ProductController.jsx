import { ProductModel } from "../../models/products/ProductModel";


export const getProductsController = async () => {
  const productModel = new ProductModel();

  
    const response = await productModel.getProductsModel();
    return response;
 
};
export const getProductsByIdController = async (id) => {
  const productModel = new ProductModel();
   
    const response = await productModel.getProductsByIdModel(id);
    return response;
  
};

export const createProductController = async (data) => {
  const productModel = new ProductModel();

    const response = await productModel.createProductModel(data);
    return response;
  
}

export const updateProductController = async (data) => {
  const productModel = new ProductModel();

    const response = await productModel.updateProductModel(data);
    return response;
  
};

export const getDataSelectsController = async () => {
  const productModel = new ProductModel();

    const response = await productModel.getDataSelectsModel();
    return response;
  
}

export const getShowProductsController = async (id) => {
  const productModel = new ProductModel();

    const response = await productModel.getShowProductsModel(id);
    return response;
  
}

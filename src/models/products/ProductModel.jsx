import { ApiBaseEndpoint } from "../../api/ApiBaseEndPoint";


export class ProductModel {
  constructor() {
    this.apiBaseEndoint = new ApiBaseEndpoint();
  }

  async getProductsModel() {
    try {
      const response = await this.apiBaseEndoint.get(`products`);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al lista los productos",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: response.message || "Error al lista los productos, revise el servidor",
        status:response.status
      }
    }
  }

  async getProductsByIdModel(id) {    
    try {
      const response = await this.apiBaseEndoint.get(`products/${id}/edit`);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al obtener el producto",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al obtener el producto, revise el servidor",
        status:error.status
      }
    }
  }


  async createProductModel(data) {
    try {
      const response = await this.apiBaseEndoint.post(`products`, data);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al crear el producto",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al crear el producto, revise el servidor",
        status:error.status
      }
    }
  }


  async updateProductModel(data) {
    try {
      const response = await this.apiBaseEndoint.put(`products/${data.id}`, data);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al actualizar el producto",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al actualizar el producto, revise el servidor",
        status:error.status
      }
    }
  }

  async getDataSelectsModel() {
    try {
      const response = await this.apiBaseEndoint.get(`products/create`);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al obtener los datos de los selects",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al obtener los datos de los selects, revise el servidor",
        status:error.status
      }
    }
  }

  async getShowProductsModel(id) {
    try {
      const response = await this.apiBaseEndoint.get(`products/${id}`);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al obtener el producto",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al obtener el producto, revise el servidor",
        status:error.status
      }
    }
  }
}

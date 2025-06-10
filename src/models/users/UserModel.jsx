import { ApiBaseEndpoint } from "../../api/ApiBaseEndPoint";


export class UserModel {
  constructor() {
    this.apiBaseEndoint = new ApiBaseEndpoint();
  }

 

  async getUsersByIdModel(id) {    
    try {
      const response = await this.apiBaseEndoint.get(`users/${id}/edit`);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al obtener el ususario",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al obtener el ususario, revise el servidor",
        status:error.status
      }
    }
  }


 
  async updateUserModel(data) {
    try {
      const response = await this.apiBaseEndoint.put(`users/${data.id}`, data);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al actualizar el ususario",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al actualizar el ususario, revise el servidor",
        status:error.status
      }
    }
  }

  async getDataSelectsModel() {
    try {
      const response = await this.apiBaseEndoint.get(`users/create`);

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

  async getShowUsersModel(id) {
    try {
      const response = await this.apiBaseEndoint.get(`users/${id}`);

      if(response.status == 200){

        return {
          success:true,
          data:response.data,
          message:response.message
        }

      }

      return {
        success:false,
        message: response.message || "Error al obtener el ususario",
        status:response.status
      }

    } catch (error) {
      return {
        success:false,
        message: error.message || "Error al obtener el ususario, revise el servidor",
        status:error.status
      }
    }
  }
}

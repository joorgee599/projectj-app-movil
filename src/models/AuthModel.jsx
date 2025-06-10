// src/models/AuthModel.js

import { ApiBaseEndpoint } from "../api/ApiBaseEndPoint";
import { ApiBaseEndpointNotAuth } from "../api/ApiBaseEndPointNotAuth";
export class AuthModel {
  constructor() {
    this.apiBaseEndointNotAuth = new ApiBaseEndpointNotAuth();
    this.apiBaseEndoint = new ApiBaseEndpoint();
  }

  async login(credentials) {
    try {
      const response = await this.apiBaseEndointNotAuth.post(
        "login",
        credentials
      );

      if (response.status === 200) {
        const { token, user } = response.data;

        return {
          success: true,
          user,
          token,
          message: response.message,
        };
      }

      return {
        success: false,
        message: response.message || "Credenciales inválidas",
        status: response.status,
      };
    } catch (error) {
      return {
        success: false,
        message: "Error inesperado en login",
        error: error.message,
      };
    }
  }

  async logout() {
    try {
      
      const response = await this.apiBaseEndoint.post("logout");

      if (response.status === 200) {
        return {
          success: true,
          message: response.message,
        };
      }

      return {
        success: false,
        message: response.message || "Error al cerra la sesión",
        status: response.status,
      };
    } catch (error) {
      return {
        success: false,
        message: "Error inesperado al cerrar sesión",
        error: error.message,
      };
    }
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";

export class ApiBaseEndpoint {
  constructor(baseURL) {
    this.baseURL = baseURL || "http://192.168.1.7:8000/api/";
  }

  async buildHeaders(extraHeaders = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...extraHeaders,
    };

    try {
      const userData = await AsyncStorage.getItem("user");
      const user = userData ? JSON.parse(userData) : null;
      const token = user?.token || null;

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error leyendo token para headers:", error);
    }

    return headers;
  }

  async get(endpoint, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const header = await this.buildHeaders(headers);
      const response = await fetch(url, {
        method: "GET",
        headers: header,
      });

      const responses = await response.json();

      return responses;
    } catch (error) {
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }

  async post(endpoint, data = {}, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;

    try {
      const header = await this.buildHeaders(headers);
      const response = await fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(data),
      });
      // return await this.handleResponse(response);
      const json = await response.json();
      return json;
    } catch (error) {
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }

  async put(endpoint, data = {}, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;

    try {
      const header = await this.buildHeaders(headers);
      const response = await fetch(url, {
        method: "PUT",
        headers: header,
        body: JSON.stringify(data),
      });
      // return await this.handleResponse(response);
      const json = await response.json();
      return json;
    } catch (error) {
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }

  // async handleResponse(response) {
  //   // if (response.status === 401) {
  //   //   Swal.fire({
  //   //     icon: "warning",
  //   //     title: "Session expired",
  //   //     text: "Your session has expired. Please log in again.",
  //   //     confirmButtonColor: "#0273b0",
  //   //     confirmButtonText: "Accept",
  //   //     allowOutsideClick: false, // Permite cerrar haciendo clic fuera
  //   //     allowEscapeKey: false, // Permite cerrar con Escape
  //   //   }).then((result) => {
  //   //     if (result.isConfirmed) {
  //   //       // El usuario hizo clic en Aceptar
  //   //       localStorage.removeItem("user");
  //   //       window.location.href = "/auth/login";
  //   //     }
  //   //   });

  //   //   throw new Error("Unauthorized: Token expirado o no válido");
  //   // }

  //   // Intentar parsear la respuesta JSON
  //   try {
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     throw new Error("Error parsing response: " + error.message);
  //   }
  // }
}

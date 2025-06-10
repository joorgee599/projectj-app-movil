
// esto es para las peticiones que no necesiten token o estar logueado

export class ApiBaseEndpointNotAuth {
  constructor(baseURL) {
    this.baseURL = baseURL || "http://192.168.1.7:8000/api/";
  }


  async get(endpoint, headers = {}) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
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
  //.log(this.baseURL);
    const url = `${this.baseURL}${endpoint}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      });

      const responses = await response.json();
     // console.log(responses);
      return responses;
    } catch (error) {
      console.log(error.message);
      return {
        status: 500,
        message: "Error de red",
        error: error.message,
      };
    }
  }
}

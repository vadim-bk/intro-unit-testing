const { default: Axios } = require("axios");

class Ajax {
  static echo(data) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data) {
          res(data);
        } else {
          rej(new Error("error"));
        }
      }, 150);
    });
  }

  static async get() {
    try {
      const response = await Axios.get("https://jsonplaceholder.typicode.com/todos");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Ajax;

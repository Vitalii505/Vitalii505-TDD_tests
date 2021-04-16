import axios from "axios";
class Loader {
  #URL = "https://jsonplaceholder.typicode.com/todos";
  async countTodos() {
    const todos = await axios.get(this.#URL);
    return todos.length;
  }
}

export { Loader };
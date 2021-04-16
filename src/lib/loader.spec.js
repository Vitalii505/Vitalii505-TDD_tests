import axios from "axios";

import { Loader } from "./loader";
const DEMO_DATASET = [1, 2, 3, 4, 5, 78];

// const fakeFetchJSONMethod = () => {
//   return Promise.resolve(DEMO_DATASET);
// };

// const fakeFetch = () => {
//   return Promise.resolve({
//     json: fakeFetchJSONMethod,
//   });
// };

// global.fetch = jest.fn(fakeFetch);

jest.mock("axios");

axios.get.mockResolvedValue(DEMO_DATASET);
describe("Loader", () => {
  describe("countTodos()", () => {
    it("should return todos count", async () => {
      expect.assertions(1);

      const loader = new Loader();
      const result = await loader.countTodos();
      const EXPECTED_RESULT = DEMO_DATASET.length;
      expect(result).toBe(EXPECTED_RESULT);
    });
  });
});
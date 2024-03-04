import { HttpResponse, http } from "msw";

import { popularSearchData } from "./data/popularSearchData";

const handler = [
  http.get("/api/search/popularkeyword", async () => {
    try {
      return new HttpResponse(JSON.stringify(popularSearchData), {
        status: 200
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  })
];

export default handler;

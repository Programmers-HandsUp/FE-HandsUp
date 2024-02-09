import { postListData } from "./data/postListData";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/members", () => {
    return HttpResponse.json(postListData);
  }),
];

export default handlers;

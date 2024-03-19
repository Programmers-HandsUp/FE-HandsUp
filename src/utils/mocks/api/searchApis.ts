import { http, HttpResponse } from "msw";

import { popularSearchData } from "./data/popularSearchData";
import { postListData } from "./data/postListData";

const handler = [
  http.get("/api/search/popularkeyword", async () => {
    try {
      return new HttpResponse(JSON.stringify(popularSearchData), {
        status: 200
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }),
  http.get("/api/search/:id", async ({ params, request }) => {
    const { searchParams } = new URL(request.url);
    const { id } = params;
    const size = Number(searchParams.get("size"));
    const page = Number(searchParams.get("page"));

    const result = postListData.filter((item) =>
      item.postName.includes(id as string)
    );

    const totalCount = result.length;
    const totalPages = Math.ceil(totalCount / size);

    const nextPage = page < totalPages - 1 ? page + 1 : null;

    return HttpResponse.json({
      content: result.slice(page * 5, page * 5 + size),
      pageNumber: page,
      pageSize: size,
      totalPages,
      totalCount,
      nextPage
    });
  })
];

export default handler;

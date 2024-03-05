import { HttpResponse, http } from "msw";
import {
  reviewLabelList,
  purchaseList,
  reviewList,
  saleList
} from "./data/mypageData";

const handlers = [
  http.get("/api/users/buy", ({ request }) => {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");

    let responseList;

    switch (status) {
      case "finished":
      case "bidding":
      case "pending":
        responseList = purchaseList.filter(
          (item) => item.auctionStatus === status
        );
        break;
      default:
        responseList = purchaseList;
    }

    return HttpResponse.json(responseList);
  }),
  http.get("/api/users/:userId/sales", ({ request }) => {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");

    let responseList;

    switch (status) {
      case "finished":
      case "bidding":
      case "pending":
        responseList = saleList.filter((item) => item.auctionStatus === status);
        break;
      default:
        responseList = saleList;
    }

    return HttpResponse.json(responseList);
  }),
  http.get("/api/users/:userId/reviews/labels", () => {
    return HttpResponse.json(reviewLabelList);
  }),
  http.get("/api/users/:userId/reviews", () => {
    return HttpResponse.json(reviewList);
  })
];

export default handlers;

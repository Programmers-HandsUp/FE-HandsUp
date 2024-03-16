import { http, HttpResponse } from "msw";

import { notification, notificationBadge } from "./data/notificationData";

const handlers = [
  http.get("/api/notifications", () => {
    return HttpResponse.json(notification);
  }),
  http.get("/api/notifications/count", () => {
    return HttpResponse.json(notificationBadge);
  })
];

export default handlers;

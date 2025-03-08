import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ROUTE_PATH } from "../shared/constants";
import HomePage from "@/pages/Home";

const router: RouteObject[] = [
  { path: ROUTE_PATH.home, element: <HomePage /> },
];

export const myRouter = createBrowserRouter(router);

export const goTo = myRouter.navigate;

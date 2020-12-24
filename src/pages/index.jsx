import { lazy } from "react";

const pages = [
  { path: "/", component: lazy(() => import("./Home/Home.page")) },
  { path: "/signup", component: lazy(() => import("./SignUp/SignUp.page")) },
  { path: "/login", component: lazy(() => import("./Login/Login.page")) },
];

export default pages;

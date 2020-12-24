import { lazy } from "react";

export const Navbar = lazy(() => import("./Navbar/Navbar.component"));
export const Error404 = lazy(() => import("./errors/Error404.component"));
export const Error403 = lazy(() => import("./errors/Error403.component"));

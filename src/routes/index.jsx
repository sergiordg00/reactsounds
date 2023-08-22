import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/pages/not-found";
import Prueba from "@/pages/prueba";

const router = createBrowserRouter([
  { path: '/', element: "Home" },
  { path: '*', element: <NotFound/> },
  { path: '/prueba', element: <Prueba/> },
]);

export default router;
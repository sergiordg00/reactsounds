import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Prueba from "@/pages/prueba";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/prueba', element: <Prueba/> }
    ]
  },
  { path: '*', element: <NotFound/> },
]);

export default router;
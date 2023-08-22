import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import NotFound from "@/pages/not-found";
import Prueba from "@/pages/prueba";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      { path: '/', element: "Home" },
      { path: '*', element: <NotFound/> },
      { path: '/prueba', element: <Prueba/> }
    ]
  },
]);

export default router;
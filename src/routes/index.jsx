import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Playbum from "@/pages/playbum";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/album/:id', element: <Playbum type="album"/> },
      { path: '/playlist/:id', element: <Playbum type="playlist"/> },
    ]
  },
  { path: '*', element: <NotFound/> },
]);

export default router;
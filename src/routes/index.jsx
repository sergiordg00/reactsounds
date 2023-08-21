import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/pages/not-found";

const router = createBrowserRouter([
  { path: '/', element: "Home" },
  { path: '*', element: <NotFound/> },
]);

export default router;
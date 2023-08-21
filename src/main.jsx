import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './routes';

import './assets/css/reset.css';
import './assets/css/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>,
);

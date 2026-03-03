import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { QuemSomosPage } from "./pages/QuemSomosPage";
import { ServicosPage } from "./pages/ServicosPage";
import { ContatoPage } from "./pages/ContatoPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <HomePage /> 
      },
      { 
        path: "quem-somos", 
        element: <QuemSomosPage /> 
      },
      { 
        path: "servicos", 
        element: <ServicosPage /> 
      },
      { 
        path: "contato", 
        element: <ContatoPage /> 
      },
    ],
  },
]);

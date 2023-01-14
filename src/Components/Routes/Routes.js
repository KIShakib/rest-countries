import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Countries from "../Pages/Countries/Countries";
import CountryDetails from "../Pages/Countries/CountryDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Countries />
            },
            {
                path: "/name/:name",
                element: <CountryDetails />,
                loader: ({ params }) => fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
            }
        ]
    }
])
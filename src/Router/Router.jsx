import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeSection from "../HomeSection";
import User from "../Component/user";
import AddCofeeSec from "../Component/AddcoffeeSection/AddCofeeSec";
import ViewDetails from "../Component/ViewDetails/ViewDetails";
import UpdateDetails from "../Component/UpdateCoffeeDetails/UpdateDetails";
import ErrorPage from "../Component/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:App,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          index:true,
          Component:HomeSection,
          loader:()=>fetch('https://coffee-server-green.vercel.app/coffee'),
          
        },
        {
          path:'/addCoffee',
          Component:AddCofeeSec
        },
        {
          path:'/viewdetails/:id',
          Component:ViewDetails,
          loader:({params})=>fetch(`https://coffee-server-green.vercel.app/coffee/${params.id}`)
        },
        {
          path:'/updateDetails/:id',
          Component:UpdateDetails,
          loader:({params})=>fetch(`https://coffee-server-green.vercel.app/coffee/${params.id}`)
        }
      ]
    },
  ]);
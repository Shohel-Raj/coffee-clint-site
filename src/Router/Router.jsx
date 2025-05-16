import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeSection from "../HomeSection";
import User from "../Component/user";
import AddCofeeSec from "../Component/AddcoffeeSection/AddCofeeSec";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:App,
      children:[
        {
          index:true,
          Component:HomeSection,
          loader:()=>fetch('/Carddata.json')
        },
        {
          path:'/addCoffee',
          Component:AddCofeeSec
        }
      ]
    },
  ]);
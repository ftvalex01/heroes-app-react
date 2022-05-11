import React from "react";
import {createRoot} from "react-dom/client"
import { HeroesApp } from "./HeroesApp";


const container = document.getElementById('root')
const rootElement = createRoot(container)


rootElement.render(
    <HeroesApp/>,
);
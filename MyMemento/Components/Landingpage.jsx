import React from "react";
import { Landing_about } from "./Landing_about";
import { Landing_contact } from "./Landing_contact";
import { Landing_main } from "./Landing_main";
import { Landing_Nav } from "./Landing_Nav";
export const Landingpage = ()=>{
    return (
    <div>
        <Landing_Nav/>
        <Landing_main/>
        <Landing_about/>
        <Landing_contact/>
    </div>
    )
}
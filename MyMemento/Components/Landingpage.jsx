import React from "react";
import { Landing_about } from "./Landing_about";
import { Landing_contacts } from "./Landing_contacts";
import { Landing_main } from "./Landing_main";
import { Landing_Nav } from "./Landing_Nav";
import SignUpSignIn from "./SignUpSignIn";
export const Landingpage = ()=>{
    return (
    <div>
        <Landing_Nav/>
        <SignUpSignIn/>
        <Landing_main/>
        <Landing_about/>
        <Landing_contacts/>
    </div>
    )
}
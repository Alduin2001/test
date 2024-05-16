import React from "react";
import {Routes,Route} from 'react-router-dom';
import { Home } from "./home";
import { Register } from "./register";
import { Auth } from "./auth";
import { Profile } from "./profile";
export function Main(){
    return(
    <main className="bg-image bg-cover h-full w-full text-white">
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/register" Component={Register}/>
            <Route path="/auth" Component={Auth}/>
            <Route path="/profile" Component={Profile}/>
        </Routes>
    </main>
    );
}
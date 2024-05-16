import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import io from 'socket.io-client';
export default function Header(){
    const [isConnected,setIsConnected] = useState(false);    
    useEffect(()=>{
        const socket = io('http://localhost:3007');
        console.log(socket)
        return ()=>socket.disconnect();
    },[]);

    return(
        <header className="p-1 flex justify-around gap-1 bg-purple-500 text-white">
            <Link to="/" className="hover:text-cyan-700">Главная</Link>
            <div className="flex gap-1">
            <Link to="/register" className="hover:text-cyan-700">Регистрация</Link>
            <Link to="/auth" className="hover:text-cyan-700">Авторизация</Link>
            <Link to="/profile" className="hover:text-cyan-700">Профиль</Link>
            </div>
        </header>
    )
}
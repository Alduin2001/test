import React from "react";
export function Profile(){

    return(
        <section className="bg-black bg-opacity-50 p-2 w-4/5 mx-auto h-full">
            <div className="bg-purple-600 flex flex-col gap-1 p-2">
            <h1>Профиль</h1>
            <form className="flex flex-col gap-1">
                <input type="text" className="bg-transparent border-b-2 p-1" placeholder="Имя"/>
                <input type="text" className="bg-transparent border-b-2 p-1" placeholder="Фамилия"/>
                <input type="text" className="bg-transparent border-b-2 p-1" placeholder="Логин"/>
                <input type="submit" className="bg-blue-400 rounded-sm p-1" value="Поменять"/>
            </form>
            </div>
        </section>
    )
}
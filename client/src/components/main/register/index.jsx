import React,{useState,useEffect} from "react";
import user from "../../../stores/userStore";
export function Register(){
    const [formData,setFormData] = useState({
        firstname:'',
        lastname:'',
        login:'',
        password:''
    });
    const handleChange = (ev)=>{
        const {name,value} = ev.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }));
    }
    const handleSubmit = (ev)=>{
        ev.preventDefault();
        user.register(formData);
        console.log(user.success_register);
    }
    return(
        <form className="flex flex-col gap-1 h-4/5 bg-black bg-opacity-50 p-2 w-4/5 mx-auto" onSubmit={handleSubmit}>
            <h1>Регистрация</h1>
            <div className="flex flex-col gap-1">
                <input type="text" className="bg-transparent outline-none border-b-2 border-b-black" placeholder="Имя" onChange={handleChange} value={formData.firstname} name="firstname"/>
                <input type="text" className="bg-transparent outline-none border-b-2 border-b-black" placeholder="Фамилия" onChange={handleChange} value={formData.lastname} name="lastname"/>
                <input type="text" className="bg-transparent outline-none border-b-2 border-b-black" placeholder="Логин" onChange={handleChange} value={formData.login} name="login"/>
                <input type="password" className="bg-transparent outline-none border-b-2 border-b-black" placeholder="Пароль" onChange={handleChange} value={formData.password} name="password"/>
                <input type="submit" className="cursor-pointer bg-green-400 p-1 rounded-lg" value="Зарегистрироваться"/>
                {user.success_register.trim()!='' && (<div className="p-1 bg-green-500 text-white">{user.success_register}Вы успешно зарегистировались</div>)}
                
            </div>
        </form>
    );
}
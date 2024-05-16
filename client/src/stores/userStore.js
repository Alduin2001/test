import { makeAutoObservable } from 'mobx';
import axios from 'axios';
class UserStore{
    token = '';
    authTime = 0;
    expires = 0;
    isAuth = false;
    success_register = '';
    success_auth = '';
    constructor(){
        makeAutoObservable(this);
    }

    async register(user){
        await axios.post('http://localhost:3007/add_user',user)
        .then(res=>{
            console.log(res.data.msg);
            this.success_register = res.data.msg;
        })
        .catch(err=>console.log(err));
    }
    async login(user){
        await axios.post('http://localhost:3007/auth_user',user)
        .then(res=>{
            console.log(res);
            this.isAuth = true;
            this.token  = res.token;
            this.success_auth = 'Успешно авторизовались';
        })
    }
    async logout(ev){
        this.token = '';
        this.isAuth = false;
    }

    async isAuthenticated(){

    }

}
let user = new UserStore();
export default user;
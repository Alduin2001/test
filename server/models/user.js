const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'Поле обязательно для заполнения']
    },
    lastname:{
        type:String,
        required:[true,'Поле обязательно для заполнения']
    },
    login:{
        type:String,
        required:[true,'Поле обязательно для заполнения'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Поле обязательно для заполнения']
    },
    auth_token:{
        type:String,
        required:false
    },
    is_admin:{
        type:String,
        required:false
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
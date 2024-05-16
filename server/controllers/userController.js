const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

class UserController {
    static async create(req, res) {
        try {
            const { firstname, lastname, login, password } = req.body;
            const salt = await bcrypt.genSalt(5);
            const hashed = await bcrypt.hash(password, salt);
            const user = new User({
                firstname:firstname,
                lastname:lastname,
                login:login,
                password: hashed
            });
            await user.save();
            res.json({ msg: 'Пользователь успешно зарегистрировался' });
        } catch (error) {
            res.status(500).json({ msg: 'Не удалось зарегистрировать пользователя', error });
        }
    }

    static async auth(req, res) {
        try {
            const { login, password } = req.body;
            const findUser = await User.findOne({ login });
            if (!findUser) {
                return res.status(404).json({ msg: 'Пользователь не найден' });
            }
            const passwordMatch = await bcrypt.compare(password, findUser.password);
            if (!passwordMatch) {
                return res.status(401).json({ msg: 'Проверти правильность введённых данных' });
            }
            const userData = {
                user_id: findUser._id,
                firstname: findUser.firstname,
                lastname: findUser.lastname
            };
            const token = jwt.sign(userData, process.env.SECRET_KEY, { expiresIn: '30m' });
            findUser.auth_token = token;
            await findUser.save();
            res.json({ token });
        } catch (error) {
            res.status(500).json({ msg: 'Ошибка при аутентификации пользователя', error });
        }
    }

    static async logout(req, res) {
        try {
            const { user_id } = req.body;
            const findUser = await User.findOne({ _id: user_id });
            if (!findUser) {
                return res.status(404).json({ msg: 'Пользователь не найден' });
            }
            findUser.auth_token = '';
            await findUser.save();
            res.json({ msg: 'Пользователь успешно вышел из системы' });
        } catch (error) {
            res.status(500).json({ msg: 'Ошибка при выходе пользователя из системы', error });
        }
    }
}

module.exports = UserController;
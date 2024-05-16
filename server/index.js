const express = require('express');
const cors = require('cors');
const connectDB = require('./connection/db.js');
const http = require('http');
const socketIO = require('socket.io');
const router = require('./routes');

// Создаем экземпляр приложения Express
const app = express();

// Создаем HTTP-сервер на основе Express-приложения
const server = http.createServer(app);

// Инициализируем Socket.IO и подключаем его к серверу
const io = socketIO(server,{
  cors:'*'
});

// Определяем порт для сервера, используя переменную окружения или порт по умолчанию
const port = process.env.PORT || 7005;

// Парсим JSON-формат для запросов
app.use(express.json());

// Подключаемся к базе данных
connectDB();

// Разрешаем CORS для всех источников
app.use(cors({origin:'*'}));

// Используем роутер для маршрутизации запросов
app.use(router);

// Обработчик подключения к сокету
io.on('connection', (socket) => {
  console.log('Connected!');
   
  // Обработчик отключения сокета
  socket.on('disconnect', () => {
    console.log('Disconnected!');
  });
});

// Запускаем сервер на определенном порту
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

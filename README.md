🚀 Express MongoDB App: Auth, Sessions & Articles
Учебный проект на Node.js и Express, демонстрирующий реализацию надежной аутентификации на основе сессий с использованием Passport.js и хранением данных в MongoDB.
🌟 Ключевые возможности
🔑 Аутентификация через Passport.js: Использование Local Strategy для входа по email и паролю.
🛡 Управление сессиями: Безопасное хранение состояния пользователя через express-session и Cookies.
💾 MongoDB Persistence: Полноценная работа с базой данных (CRUD) — чтение и создание статей через Mongoose.
🎨 Theme Switcher: Сохранение предпочтений темы оформления (Light/Dark) в куках браузера.
🧱 MVC Архитектура: Четкое разделение на модели (Mongoose), маршруты и представления (EJS).
🛠 Технологический стек
Backend: Node.js, Express.js
Database: MongoDB (Local / Atlas) + Mongoose
Auth: Passport.js, express-session
Templates: EJS
Security: Helmet, dotenv, connect-flash
📂 Структура проекта
text
├── src/
│   ├── models/          # Схемы данных Mongoose (Article.js, User.js)
│   ├── routes/          # Маршрутизация (index.js, articles.routes.js)
│   ├── utils/           
│   │   ├── passport.js  # Конфигурация стратегии аутентификации
│   │   └── authMiddleware.js # Проверка доступа (isAuthenticated)
│   └── views/           # Шаблоны страниц (index.ejs, articles.ejs, login.ejs)
├── .env                 # Переменные окружения (MONGO_URI, PORT)
├── app.js               # Конфигурация Express и Middleware
└── server.js            # Точка входа и подключение к БД
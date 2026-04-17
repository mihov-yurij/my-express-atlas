require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');
const url = process.env.MONGO_URI; 
const PORT = process.env.PORT || 5000;


if (!url) {
    console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: MONGO_URI не определен в файле .env");
    process.exit(1); 
}

console.log("⏳ Попытка подключения к базе данных...");

mongoose.connect(url)
  .then(() => {
    console.log("✅ УСПЕХ: База данных подключена успешно.");

      app.listen(PORT, () => {
      console.log(`🚀 СЕРВЕР ЗАПУЩЕН: http://localhost:${PORT}`);
      console.log(`📡 Нажмите Ctrl+C для остановки`);
    });
  })
  .catch(err => {
    console.error("❌ ОШИБКА ПОДКЛЮЧЕНИЯ К БД:");
    console.error(`👉 Сообщение: ${err.message}`);
    console.log("-----------------------------------------");
    console.log("💡 Совет: Проверьте запущен ли локальный сервер MongoDB");
  });
process.on('unhandledRejection', (err) => {
    console.log(`❌ Необработанная ошибка: ${err.message}`);
    process.exit(1);
});











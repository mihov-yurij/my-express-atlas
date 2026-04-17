const express = require('express');
const router = express.Router();
const Article = require('../models/Article'); 

router.get('/', async (req, res) => {
    try {
              const articles = await Article.find(); 
        
                res.render('index', { 
            articles: articles 
        });
    } catch (err) {
        console.error("Ошибка при получении данных:", err);
        res.render('index', { articles: [] }); 
    }
});

module.exports = router;





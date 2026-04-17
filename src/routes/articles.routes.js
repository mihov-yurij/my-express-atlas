const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.render('articles', { articles: articles }); 
    } catch (err) {
        res.status(500).send(err.message);
    }
});


module.exports = router;


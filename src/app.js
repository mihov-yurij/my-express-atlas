const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash'); 
const cookieParser = require('cookie-parser'); 
const routes = require('./routes/index');
const articleRoutes = require('./routes/articles.routes');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
require('./utils/passport')(passport); 
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.currentTheme = req.cookies?.userTheme || 'light'; 
    res.locals.user = req.user || null;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});
app.use('/articles', articleRoutes);
app.use('/', routes);

module.exports = app;



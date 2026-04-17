const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User.js'); 

module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            // Ищем в MongoDB
            const user = await User.findOne({ email: email });
            if (!user) return done(null, false, { message: 'Юзер не найден' });

            if (password === user.password) { 
                return done(null, user);
            } else {
                return done(null, false, { message: 'Неверный пароль' });
            }
        } catch (err) { return done(err); }
    }));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id); 
        done(null, user);
    });
};



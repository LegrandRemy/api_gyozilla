const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth (req,res,next){
    //On stocke le token
    const token = req.header('auth-token');
    //On verifie si le token est bon
    if(!token) return res.status(401).send('Accés Refusé');
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Le token est invalide');
    }
}

module.exports = {auth};
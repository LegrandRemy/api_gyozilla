const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('../models/index');
const User = db['Users'];

const options = {
    expiresIn: '1800s',
}


router.post('/api/users/login', async (req,res) => {
    //On cherche l'utilisateur par son email.
    const user = await User.findOne({where: {email:req.body.email}});
    //On verifie si l'email existe
    if (!user) return res.status(400).send('L\'email n\'existe pas');
    
    //On créée le token en lui assignant le user.id, la clef presente dans .env et la durée d'expiration
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, options);
    res.send(token);
})

module.exports = router;
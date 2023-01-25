const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('../models/index');
const User = db['Users'];
const bcrypt = require('bcryptjs');

const options = {
    expiresIn: '1800s',
}

//Register Form
router.post('api/users/register', [
    check('lastname').not().isEmpty(),
    check('firstname').not().isEmpty(),
    check('email').not().isEmpty().isEmail(),
    check('password').isLength({
        min: 8
    }),
    check('password_confirmation').custom((value, {
        req
    }) => {
        if (value !== req.body.password) {
            throw new Error('Le mot de passe confirmé ne correspond pas');
        }
        return true;
    }),
    check('phone').not().isEmpty().isLength({
        min: 10,
        max:10
    }),
    check('adress').not().isEmpty(),
    check('zipcode').not().isEmpty().isLength({
        min:5
    }),
    check('city').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({errors: errors.array()});

    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if (err) return res.status(500).json({message: 'Erreur serveur'});
        const newUser = User.create(req.body, {
            password: hash
        });
        const token = jwt.sign({id:newUser.id}, process.env.JWT_SECRET,options);
        res.json({message: 'Création',token});
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    });
});

//Login Form
router.post('/api/users/login', [
    check('email').isEmail(),
    check('password').isLength({
        min: 8
    })
], async (req, res) => {
    //On verifie les données
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    //On cherche l'utilisateur par son email.
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    //On verifie si l'email existe
    if (!user) return res.status(400).send('L\'email n\'existe pas');

    //On contrôle le mp en post et celui hasher
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
        if (!result) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }
    })

    //On créée le token en lui assignant le user.id, la clef presente dans .env et la durée d'expiration
    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET, options);
    res.send(token);
})

module.exports = router;
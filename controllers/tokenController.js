require('dotenv').config
const jwt = require('jsonwebtoken');
const db = require('../models/index')
const bcrypt = require('bcrypt')
const Customers = db['Customers']
const Employees = db['Employees']

exports.getToken = async (req, res) => {
    try {
        const customer = await Customers.findOne({
            where: {email:req.body.email}
        })
        const employee = await Employees.findOne({
            where: {email:req.body.email}
        })

        if (!customer && !employee) {
            return res.status(400).send({ message: 'L\'email n\'existe pas' });
        } else {
            let user;
            let isEmployee;

            if (customer) {
                user = customer;
                isEmployee = false;
            } else {
                user = employee;
                isEmployee = true;
            }

            const passwordMatch = await bcrypt.compare(req.body.password, user.password)

            if (passwordMatch) {
                let payload;
                if (isEmployee) {
                    payload = {
                        lastname: user.lastname,
                        firstname: user.firstname,
                        login: user.login,
                        email: req.body.email,
                        phone: user.phone,
                        role: user.id_roles,
                        franchise: user.id_franchises,
                        createdAt: user.createdAt,
                        password: passwordMatch
                    };
                } else {
                    payload = {
                        lastname: user.lastname,
                        firstname: user.firstname,
                        username: req.body.email,
                        password: passwordMatch
                    };
                }
                
                const secret = process.env.JWT_SECRET;
                const options = { expiresIn: '24h' };
                const token = jwt.sign(payload, secret, options);
                req.session.token = token;
                res.status(200).json({ 
                    message: "Authentification réussi",
                    token: token
                });
            } else {
                return res.status(400).send({ message: 'Mot de passe incorrect' });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: 'Impossible de récupérer le token',
            error: error.message,
        });
    }
};


exports.verifyToken = (req, res, next) => {
    token = '';
    try {
        token = req.headers.authorization.split(" ")[1];
    } catch (error) {
        return res.status(401).json({
            message: 'Token non fourni'
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Token non valide',
            // error: error.message
        });
    }
};
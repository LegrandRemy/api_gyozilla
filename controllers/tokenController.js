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
        if (customer) {
            const passwordMatch = await bcrypt.compare(req.body.password, customer.password)
            if (passwordMatch) {
                const payload = {
                    username: req.body.email,
                    password: passwordMatch
                };
                
            const secret = process.env.JWT_SECRET;
            const options = { expiresIn: '24h' };
            const token = jwt.sign(payload, secret, options);
            req.session.token = token;
            res.status(200).json({ 
                message: "Authentification réussi",
                token: token
                });
            }
        }
        const employee = await Employees.findOne({
            where: {email:req.body.email}
        })
        if (employee) {
            const passwordMatch = await bcrypt.compare(req.body.password, employee.password)
            if (passwordMatch) {
                const payload = {
                    username: req.body.email,
                    password: passwordMatch
                };
                
            const secret = process.env.JWT_SECRET;
            const options = { expiresIn: '24h' };
            const token = jwt.sign(payload, secret, options);
            req.session.token = token;
            res.status(200).json({ 
                message: "Authentification réussi",
                token: token
                });
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
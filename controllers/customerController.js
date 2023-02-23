const db = require('../models/index')
const Customers = db['Customers']
const _ = require('lodash')
const {
    Op
} = require('sequelize')

exports.is_exist = async (email) => {
    Customers.findOne({
            $where: [{
                email: email,
            }, ],
        },
        (err, customer) => {
            if (err) throw err
            if (customer) {
                return true
            } else {
                return false
            }
        },
    )
}

exports.getAllCustomers = async (req, res) => {
    try {
        const where = {}
        if (req.query.id) {
            where.id = req.query.id
        }
        if (req.query.lastname) {
            where.lastname = req.query.lastname
        }
        if (req.query.firstname) {
            where.firstname = req.query.firstname
        }
        if (req.query.email) {
            where.email = req.query.email
        }
        if (req.query.password) {
            where.password = req.query.password
        }
        if (req.query.fidelityPoints) {
            where.fidelityPoints = req.query.fidelityPoints
        }
        const Customers = await Customers.findAll({
            where: {
                [Op.and]: [where],
            },
        })
        res.status(200).json(Customers)
    } catch (error) {
        res.status(500).json({
            message: 'Impossible de récupérer les clients',
            error: error.message,
        })
    }
}

exports.getCustomer = async (req, res) => {
    try {
        const customer = await Customers.findByPk(req.params.id)
        if (customer) {
            res.status(200).json(customer)
        } else {
            res.status(404).json({
                message: "Aucun client n'a été trouvé.",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Impossible de récupérer le client",
            error: error.message,
        })
    }
}

exports.createCustomer = async (req, res) => {
    try {
        const newCustomer = await Customers.create(req.body)
        res.status(201).json({
            message: 'created',
            data: newCustomer,
        })
    } catch (error) {
        res.status(500).json({
            message: "Le client n'a pas été créé",
            error: error.message,
        })
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const keys = Object.keys(req.body)
        const columns = await Customers.describe()
        const invalidFields = []
        for (let i = 0; i < keys.length; i++) {
            if (!columns.hasOwnProperty(keys[i])) {
                invalidFields.push(keys[i])
            }
        }
        if (invalidFields.length) {
            return res.status(400).json({
                message: `Le ou les champs qui n'existent pas : ${invalidFields.join(
          ', ',
        )}`,
            })
        }
        const oldCustomer = await Customers.findByPk(req.params.id)
        const updatedCustomer = await Customers.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        const newCustomer = await Customers.findByPk(req.params.id)
        const updatedProperties = _.omitBy(newCustomer.dataValues, (value, key) =>
            _.isEqual(value, oldCustomer.dataValues[key]),
        )
        const response = _.omit(updatedProperties, ['updatedAt'])
        res.status(200).json({
            message: 'Mis à jour',
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: "Le client n'a pas été mis à jour",
            error: error.message,
        })
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        await Customers.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(200).json({
            message: "Le client a été supprimé",
        })
    } catch (error) {
        res.status(500).json({
            message: "Le client n'a pas été supprimé",
            error: error.message,
        })
    }
}

const db = require('../models/index');
const User = db['Users'];

exports.is_existByMail = async (req,res)=> {
    try {
        
    } catch (error) {
        
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Impossible de récupérer les utilisateurs'
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: 'Impossible de récupérer l\'utilisateur'
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({
            message: 'L\'utilisateur n\'a pas été créé'
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({
            message: 'L\'utilisateur n\'a pas été mis à jour'
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'L\'utilisateur a été supprimé'
        });
    } catch (error) {
        res.status(500).json({
            message: 'L\'utilisateur n\'a pas été supprimé'
        });
    }
};
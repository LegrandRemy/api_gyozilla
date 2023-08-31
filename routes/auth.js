const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const db = require("../models/index");
const Employees = db["Employees"];
const bcrypt = require("bcryptjs");

const options = {
  expiresIn: "1800s",
};

//Register Form
// router.post('/api/users/register', async (req, res) => {
//     bcrypt.hash(req.body.password, 10, async (err, hash) => {
//         if (err) return res.status(500).json({
//             message: 'Erreur serveur'
//         });
//         let data = {
//             ...req.body,
//             password: hash
//         }
//         try {
//             const email_isExist = await User.findOne(
//                 {
//                     where: { email: req.body.email }
//                 },
//                 {
//                     email: req.body.email
//                 }
//             );
//             if (email_isExist) return res.status(401).send({ message: 'L\'adresse email existe déjà' });
//             const newUser = await User.create(data);
//             res.json({
//                 message: 'Création',
//                 newUser: newUser
//             });
//         } catch (error) {
//             res.send({
//                 error: error.message
//             });
//         }
//     });
// });

//Login Form
router.post("/api/employees/login", async (req, res) => {
  //On cherche l'utilisateur par son email.
  try {
    const employees = await Employees.findOne({
      where: {
        email: req.body.email,
      },
    });
    //On verifie si l'email existe
    if (!employees)
      return res.status(400).send({ message: "L'email n'existe pas" });

    //On contrôle le mp en post et celui hasher
    bcrypt.compare(req.body.password, employees.password, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Erreur serveur",
        });
      }
      if (!result) {
        return res.status(422).json({
          message: "Le mot de passe ou l'email est incorrect",
        });
      }
    });

    //On créée le token en lui assignant le user.id, la clef presente dans .env et la durée d'expiration
    const token = jwt.sign(
      { id: employees.id },
      process.env.JWT_SECRET,
      options
    );
    res.send({ token: token });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;

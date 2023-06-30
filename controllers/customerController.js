const db = require("../models/index");
const Customers = db["Customers"];
const _ = require("lodash");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

exports.is_exist = async (req, res) => {
  const email = req.params.email;

  try {
    const customer = await Customers.findOne({ where: { email: email } });
    if (customer) {
      return res.status(200).json({ message: "Utilisateur trouvé" });
    } else {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (err) {
    console.error(err); // Log the error
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.forgotPassword = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Votre nom d'utilisateur pour le service
      pass: process.env.GMAIL_PASS, // Votre mot de passe pour le service
    },
  });

  const { email } = req.body;

  try {
    const customer = await Customers.findOne({ where: { email: email } });

    if (!customer) {
      return res
        .status(400)
        .json({ message: "Aucun utilisateur avec cet e-mail n'a été trouvé." });
    }
    const secret = process.env.JWT_MAIL;
    const options = { expiresIn: "1h" };
    const token = jwt.sign({ userId: customer.id }, secret, options);
    const resetUrl = `${process.env.URL_APP}reset-password?token=${token}`;
    const message = {
      from: "gyozillacontact@gmail.com",
      to: customer.email,
      subject: "Réinitialisation de mot de passe",
      text: `Bonjour ${customer.firstname}, veuillez cliquer sur le lien suivant pour réinitialiser votre mot de passe : ${resetUrl}`,
      html: `<p>Bonjour ${customer.firstname},</p><p>veuillez cliquer sur le lien suivant pour réinitialiser votre mot de passe :</p><p><a href="${resetUrl}">${resetUrl}</a></p>`,
    };

    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({
          message:
            "Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation de mot de passe.",
        });
      } else {
        console.log(`E-mail envoyé à ${customer.email}: ${info.response}`);
        return res.status(200).json({
          message:
            "Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.",
        });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message:
        "Une erreur s'est produite lors de la réinitialisation du mot de passe.",
      error: err.message,
    });
  }
};

exports.resetPassword = async (req, res) => {
  const { token, password } = req.body;

  try {
    const secret = process.env.JWT_MAIL;
    const decodedToken = jwt.verify(token, secret);

    const customer = await Customers.findOne({
      where: { id: decodedToken.userId },
    });
    if (!customer) {
      return res.status(400).json({ message: "Client introuvable" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await customer.update({
        password: hashedPassword,
      });
      res.json({
        message: "Le mot de passe a été réinitialisé avec succès",
        data: customer,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Token non valide", error: error.message });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.lastname) {
      where.lastname = req.query.lastname;
    }
    if (req.query.firstname) {
      where.firstname = req.query.firstname;
    }
    if (req.query.email) {
      where.email = req.query.email;
    }
    if (req.query.password) {
      where.password = req.query.password;
    }
    if (req.query.fidelityPoints) {
      where.fidelityPoints = req.query.fidelityPoints;
    }
    const customers = await Customers.findAll({
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les clients",
      error: error.message,
    });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customers.findByPk(req.params.id);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({
        message: "Aucun client n'a été trouvé.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer le client",
      error: error.message,
    });
  }
};

exports.createCustomer = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  const newCustomer = null;

  try {
    const checkEmail = req.body.email;

    const checkCustomer = await Customers.findOne({
      where: { email: checkEmail },
    });

    if (checkCustomer) {
      return res.status(400).json({ message: "Le mail est déjà utilisé" });
    }

    Customers.beforeCreate(async (customer, options) => {
      const hashedPassword = await bcrypt.hash(customer.password, 10);
      customer.password = hashedPassword;
    });

    newCustomer = await Customers.create(req.body);
  } catch (error) {
    res.status(500).json({
      message: "Le client n'a pas été créé",
      error: error.message,
    });
  }

  if (newCustomer) {
    const secret = process.env.JWT_MAIL;
    const options = { expiresIn: "1h" };
    const token = jwt.sign({ email: newCustomer.email }, secret, options);
    const validatedUrl = `${process.env.URL_APP}verify/${token}`;
    const message = {
      from: "gyozillacontact@gmail.com",
      to: newCustomer.email,
      subject: "Validation du compte",
      text: `Bonjour ${newCustomer.firstname}, Veuillez cliquer sur le lien suivant pour valider votre compte afin de vous connecter : ${validatedUrl}`,
      html: `<p>Bonjour ${newCustomer.firstname},</p><p>Veuillez cliquer sur le lien suivant pour valider votre compte afin de vous connecter :</p><p><a href="${validatedUrl}">${validatedUrl}</a></p>`,
    };

    transporter.sendMail(message, async (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({
          message:
            "Une erreur s'est produite lors de l'envoi de l'e-mail de validation.",
          error: error.message,
        });
      } else {
        console.log(`E-mail envoyé à ${newCustomer.email}: ${info.response}`);
        return res.status(201).json({
          message:
            "Un e-mail de validation a été envoyé à votre adresse e-mail.",
          data: newCustomer,
        });
      }
    });
  }
};

exports.verifyCustomer = async (req, res) => {
  try {
    //On utilise le même token que pour la cration du client
    const secret = process.env.JWT_MAIL;
    //On verifie le token passer dans l'url en params
    const decodedToken = jwt.verify(req.params.token, secret);
    //On cherche le client via le token car à la création on stock l'email utilisé à la création dans le token
    const customer = await Customers.findOne({
      where: { email: decodedToken.email },
    });
    if (!customer) {
      return res
        .status(400)
        .json({ message: "Le lien de vérification est invalide." });
    } else {
      //Pour expliquer rapidement, au clic sur le lien on met à jour le champ is_verified. Cette methode est appelé en front dans le module Verify.
      //On va pourvoir par la suite check ce champ à la connexion. Mais ça se passe dans le token.controller !
      await customer.update({
        is_verified: true,
      });
      res.status(200).json({
        message: "Votre compte a été vérifié avec succès.",
        data: customer,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Une erreur est survenue.",
      error: error.message,
    });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    const columns = await Customers.describe();
    const invalidFields = [];
    for (let i = 0; i < keys.length; i++) {
      if (!columns.hasOwnProperty(keys[i])) {
        invalidFields.push(keys[i]);
      }
    }
    if (invalidFields.length) {
      return res.status(400).json({
        message: `Le ou les champs qui n'existent pas : ${invalidFields.join(
          ", "
        )}`,
      });
    }
    const oldCustomer = await Customers.findByPk(req.params.id);
    const updatedCustomer = await Customers.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const newCustomer = await Customers.findByPk(req.params.id);
    const updatedProperties = _.omitBy(newCustomer.dataValues, (value, key) =>
      _.isEqual(value, oldCustomer.dataValues[key])
    );
    const response = _.omit(updatedProperties, ["updatedAt"]);
    res.status(200).json({
      message: "Mis à jour",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Le client n'a pas été mis à jour",
      error: error.message,
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customers.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Le client a été supprimé",
    });
  } catch (error) {
    res.status(500).json({
      message: "Le client n'a pas été supprimé",
      error: error.message,
    });
  }
};

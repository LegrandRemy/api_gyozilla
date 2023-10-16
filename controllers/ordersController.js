const { Op } = require("sequelize");
const db = require("../models/index");
const Order = db["Orders"];
const _ = require("lodash");
const nodemailer = require("nodemailer");
const { format } = require("date-fns-tz");
const { utcToZonedTime } = require("date-fns-tz");

const OrderLines = db["OrderLines"];
const Products = db["Products"];
const Menus = db["Menus"];

exports.isOrder_Exist = async (req, res) => {
  const checkIdOrder = await Order.findOne({ where: { id: req.body.email } });
  if (checkIdOrder)
    return res.status(401).send({ message: "La commande existe déjà" });
};

exports.getAllOrders = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.total_price) {
      where.total_price = req.query.total_price;
    }
    if (req.query.id_status) {
      where.id_status = req.query.id_status;
    }
    if (req.query.id_franchises) {
      where.id_franchises = req.query.id_franchises;
    }
    if (req.query.date_order) {
      where.date_order = req.query.date_order;
    }
    if (req.query.id_order_types) {
      where.id_order_types = req.query.id_order_types;
    }
    const orders = await Order.findAll({
      where: {
        [Op.and]: [where],
      },
      include: ["order_type", "order_lines", "customers"],
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les commandes",
      error: error.message,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: ["order_type"],
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer la commande",
      error: error.message,
    });
  }
};

exports.getOrderByCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const orders = await Order.findAll({
      where: { id_customers: id },
      include: [
        "order_type",
        "order_status",
        {
          model: OrderLines,
          as: "order_lines",
          include: {
            model: Products,
            as: "products",
            include: {
              model: Menus,
              as: "menu",
            },
          },
        },
      ],
    });
    res.status(200).json({
      message: "getAllOrderCustomers",
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Impossible de récupérer les commandes de l'utilisateur",
      error: error.message,
    });
  }
};

exports.getOneOrderByCustomer = async (req, res) => {
  const customerId = req.params.customerId;
  const orderId = req.params.orderId;
  try {
    const order = await Order.findAll({
      where: { id_customers: customerId, id: orderId },
      include: [
        "order_type",
        "order_status",
        {
          model: OrderLines,
          as: "order_lines",
          include: {
            model: Products,
            as: "products",
            include: {
              model: Menus,
              as: "menu",
            },
          },
        },
      ],
    });
    res.status(200).json({
      message: "getOneOrderByCustomers",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer la commandes de l'utilisateur",
      error: error.message,
    });
  }
};

exports.getAllOrdersByFranchise = async (req, res) => {
  const franchiseId = req.params.franchiseId;
  try {
    const orders = await Order.findAll({
      where: { id_franchises: franchiseId },
      include: [
        "order_status",
        "order_type",
        {
          model: OrderLines,
          as: "order_lines",
          include: ["products"],
        },
        "customers",
      ],
    });
    res.status(200).json({
      message: "getAllOrdersByFranchise",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les commandes de la franchise",
      error: error.message,
    });
  }
};

exports.getAllOrdersByFranchisePeriod = async (req, res) => {
  const franchiseId = req.params.franchiseId;
  const period = req.params.period;

  try {
    const periodesConfig = {
      day: {
        startDate: () => {
          const startDate = new Date();
          startDate.setHours(0, 0, 0, 0);
          return startDate;
        },
        endDate: () => {
          const endDate = new Date();
          endDate.setHours(23, 59, 59, 999);
          return endDate;
        },
      },
      week: {
        startDate: () => {
          const startDate = new Date();
          startDate.setDate(startDate.getDate() - startDate.getDay());
          startDate.setHours(0, 0, 0, 0);
          return startDate;
        },
        endDate: () => {
          const endDate = new Date();
          endDate.setDate(endDate.getDate() - endDate.getDay() + 6);
          endDate.setHours(23, 59, 59, 999);
          return endDate;
        },
      },
      month: {
        startDate: () => {
          const startDate = new Date();
          startDate.setDate(1);
          startDate.setHours(0, 0, 0, 0);
          return startDate;
        },
        endDate: () => {
          const endDate = new Date();
          endDate.setMonth(endDate.getMonth() + 1);
          endDate.setDate(0);
          endDate.setHours(23, 59, 59, 999);
          return endDate;
        },
      },
      year: {
        startDate: () => {
          const startDate = new Date();
          startDate.setMonth(0);
          startDate.setDate(1);
          startDate.setHours(0, 0, 0, 0);
          return startDate;
        },
        endDate: () => {
          const endDate = new Date();
          endDate.setMonth(11);
          endDate.setDate(31);
          endDate.setHours(23, 59, 59, 999);
          return endDate;
        },
      },
    };

    if (!(period in periodesConfig)) {
      return res.status(400).json({
        message: "Période non prise en charge",
      });
    }

    const startDate = periodesConfig[period].startDate();
    const endDate = periodesConfig[period].endDate();

    const orders = await Order.findAll({
      where: {
        id_franchises: franchiseId,
        date_order: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    res.status(200).json({
      message: "getAllOrdersByFranchise",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les commandes de la franchise",
      error: error.message,
    });
  }
};

exports.getOrderByStatus = async (req, res) => {
  const idStatus = req.params.idStatus;
  try {
    const orders = await Order.findAll({
      where: { id_status: idStatus },
      include: ["status"],
    });
    res.status(200).json({
      message: "getAllOrderStatus",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les commandes par leur status",
      error: error.message,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    if (req.body.date_order === undefined) {
      req.body.date_order = new Date();
    }
    const existingOrder = await Order.findOne({
      where: {
        total_price: req.body.total_price,
        id_status: req.body.id_status,
        id_franchises: req.body.id_franchises,
        date_order: req.body.date_order,
        id_order_types: req.body.id_order_types,
      },
    });

    if (existingOrder) {
      return res.status(400).json({ message: "La commande existe déjà" });
    }

    const newOrder = await Order.create(req.body);
    res.status(201).json({ message: "created", data: newOrder });
  } catch (error) {
    res.status(500).json({
      message: "La commande n'a pas été créée",
      error: error.message,
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    const columns = await Order.describe();
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
    const oldOrder = await Order.findByPk(req.params.id);
    const updatedOrder = await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const newOrder = await Order.findByPk(req.params.id);
    const updatedProperties = _.omitBy(newOrder.dataValues, (value, key) =>
      _.isEqual(value, oldOrder.dataValues[key])
    );
    const response = _.omit(updatedProperties, ["updatedAt"]);
    res.status(200).json({ message: "Mis à jour", data: response });
  } catch (error) {
    res.status(500).json({
      message: "La commande n'a pas été mis à jour",
      error: error.message,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "La commande a été supprimée",
    });
  } catch (error) {
    res.status(500).json({
      message: "La commande n'a pas été supprimée",
      error: error.message,
    });
  }
};

exports.sendOrderEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.HOSTINGER_USER,
      pass: process.env.HOSTINGER_PASS,
    },
  });

  const orderDetails = req.body;

  const dateOrderUTC = new Date(orderDetails.orderResponse.date_order);
  const parisTimeZone = "Europe/Paris";
  const dateOrderParis = utcToZonedTime(dateOrderUTC, parisTimeZone);

  const formattedDate = format(dateOrderParis, "dd/MM/yyyy à HH:mm", {
    timeZone: parisTimeZone,
  });

  let emailContent = `<p>Votre commande du ${formattedDate} :</p><ul>`;

  for (const orderLine of orderDetails.orderLines) {
    if (orderLine.is_menu) {
      emailContent += `<li>${orderLine.product_quantity} ${orderLine.menu_type} à ${orderLine.product_price}€ : <ul>`;
      for (const product of orderLine.products) {
        emailContent += `<li>- ${product.type} ${product.name}</li>`;
      }
      emailContent += `</ul></li>`;
    } else {
      emailContent += `<li>${orderLine.product_quantity} ${orderLine.product_name} à ${orderLine.price}€</li>`;
    }
  }

  emailContent += `</ul><p>Pour un total de ${orderDetails.orderResponse.total_price}€</p>`;
  emailContent += `<p>Vous pourrez suivre l'avancé de votre commande sur votre compte et au restaurant. <br />Merci pour votre commande et bon appétit !</p>`;

  const message = {
    from: process.env.HOSTINGER_USER,
    to: orderDetails.userEmail,
    subject: `Récapitulatif de votre commande du ${formattedDate}`,
    text: "Récapitulatif de votre commande",
    html: `<p>Bonjour ${orderDetails.userFirstname},</p><p>${emailContent}</p>`,
  };

  transporter.sendMail(message, async (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail de commande :", error);
      res
        .status(500)
        .json({ error: "Erreur lors de l'envoi de l'e-mail de commande" });
    } else {
      console.log(`E-mail envoyé: ${info.response}`);
      res.status(200).json({ message: "E-mail envoyé avec succès" });
    }
  });
};

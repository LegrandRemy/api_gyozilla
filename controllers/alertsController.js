const db = require('../models/index')
const Alert = db['Alerts']

// exports.is_exist = async (email) => {
//     User.findOne({
//         $or: [
//             {email: email}
//         ]
//     }, (err, user) => {
//         if (err) throw err;
//         if (user) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

exports.getAllAlerts = async (req, res) => {
  try {
    const alerts = await Alert.findAll()
    res.status(200).json(alerts)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les alertes',
      error: error.message,
    })
  }
}

exports.getAlert = async (req, res) => {
  try {
    const alert = await Alert.findByPk(req.params.id)
    res.status(200).json(alert)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'alerte",
      error: error.message,
    })
  }
}

exports.createAlert = async (req, res) => {
  try {
    const newAlert = await Alert.create(req.body)
    res.status(201).json({ message: 'created', data: newAlert })
  } catch (error) {
    res.status(500).json({
      message: "L'alerte n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateAlert = async (req, res) => {
  try {
    const updatedAlert = await Alert.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedAlert })
  } catch (error) {
    res.status(500).json({
      message: "L'alerte n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteAlert = async (req, res) => {
  try {
    await Alert.findByPk(req.params.id)
    res.status(200).json({
      message: "L'alerte a été supprimée",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'alerte n'a pas été supprimée",
      error: error.message,
    })
  }
}

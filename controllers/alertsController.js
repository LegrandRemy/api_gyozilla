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

exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.findAll()
    res.status(200).json(alerts)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les alertes',
    })
  }
}

exports.getAlert = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id)
    res.status(200).json(alert)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'alerte",
    })
  }
}

exports.createAlert = async (req, res) => {
  try {
    const newAlert = new Alert(req.body)
    await newAlert.save()
    res.status(201).json(newAlert)
  } catch (error) {
    res.status(500).json({
      message: "L'alerte n'a pas été créée",
    })
  }
}

exports.updateAlert = async (req, res) => {
  try {
    const updatedAlert = await Alert.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    )
    res.status(200).json(updatedAlert)
  } catch (error) {
    res.status(500).json({
      message: "L'alerte n'a pas été mise à jour",
    })
  }
}

exports.deleteAlert = async (req, res) => {
  try {
    await Alert.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: "L'alerte a été supprimée",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'alerte n'a pas été supprimée",
    })
  }
}

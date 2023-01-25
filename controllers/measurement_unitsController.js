const db = require('../models/index')
const Measurement_unit = db['Measurement_units']

// exports.is_exist = async (email) => {
//   User.findOne(
//     {
//       $or: [{ email: email }],
//     },
//     (err, user) => {
//       if (err) throw err
//       if (user) {
//         return true
//       } else {
//         return false
//       }
//     },
//   )
// }

exports.getAllMeasurement_units = async (req, res) => {
  try {
    const measurement_units = await Measurement_unit.findAll()
    res.status(200).json(measurement_units)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les unités de mesure',
      error: error.message,
    })
  }
}

exports.getMeasurement_unit = async (req, res) => {
  try {
    const measurement_unit = await Measurement_unit.findByPk(req.params.id)
    res.status(200).json(measurement_unit)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'unité de mesure",
      error: error.message,
    })
  }
}

exports.createMeasurement_unit = async (req, res) => {
  try {
    const newMeasurement_unit = await Measurement_unit.create(req.body)
    res.status(201).json({ message: 'created', data: newMeasurement_unit })
  } catch (error) {
    res.status(500).json({
      message: "L'unité de mesure n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateMeasurement_unit = async (req, res) => {
  try {
    const updatedMeasurement_unit = await Measurement_unit.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedMeasurement_unit })
  } catch (error) {
    res.status(500).json({
      message: "L'unité de mesure n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteMeasurement_unit = async (req, res) => {
  try {
    await Measurement_unit.findByPk(req.params.id)
    res.status(200).json({
      message: "L'unité de mesure a été supprimée",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'unité de mesure n'a pas été supprimée",
      error: error.message,
    })
  }
}

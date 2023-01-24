const db = require('../models/index')
const Category = db['Categories']

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

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les catégories',
      error: error.message,
    })
  }
}

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la catégorie',
      error: error.message,
    })
  }
}

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.status(201).json({ message: 'created', data: newCategory })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedCategory })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByPk(req.params.id)
    res.status(200).json({
      message: 'La catégorie a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie n'a pas été supprimée",
      error: error.message,
    })
  }
}

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

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les catégories',
    })
  }
}

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la catégorie',
    })
  }
}

exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body)
    await newCategory.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({
      message: "La catégorie n'a pas été créé",
    })
  }
}

exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    )
    res.status(200).json(updatedCategory)
  } catch (error) {
    res.status(500).json({
      message: "La catégorie n'a pas été mise à jour",
    })
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: 'La catégorie a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie n'a pas été supprimée",
    })
  }
}

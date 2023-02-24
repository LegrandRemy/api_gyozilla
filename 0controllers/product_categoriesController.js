const db = require('../models/index')
const ProductCategorie_category = db['ProductCategorie_Categories']

exports.getAllProductCategorie_categories = async (req, res) => {
  try {
    const productCategorie_categories = await ProductCategorie_category.findAll()
    res.status(200).json(productCategorie_categories)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les catégories de produit',
      error: error.message,
    })
  }
}

exports.getProductCategorie_category = async (req, res) => {
  try {
    const productCategorie_category = await ProductCategorie_category.findByPk(
      req.params.id,
    )
    res.status(200).json(productCategorie_category)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la catégorie de produit',
      error: error.message,
    })
  }
}

exports.createProductCategorie_category = async (req, res) => {
  try {
    const newProductCategorie_category = await ProductCategorie_category.create(
      req.body,
    )
    res
      .status(201)
      .json({ message: 'created', data: newProductCategorie_category })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie de produit n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateProductCategorie_category = async (req, res) => {
  try {
    const updatedProductCategorie_category = await ProductCategorie_category.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      },
    )
    res
      .status(201)
      .json({ message: 'updated', data: updatedProductCategorie_category })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie de produit n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteProductCategorie_category = async (req, res) => {
  try {
    await ProductCategorie_category.findByPk(req.params.id)
    res.status(200).json({
      message: 'La catégorie de produit a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie de produit n'a pas été supprimée",
      error: error.message,
    })
  }
}

const db = require("../models/index");
const UnitOfMeasures = db["UnitOfMeasures"];

exports.getAllUnitOfMeasure = async (res,req)=>{
    try {
        const unitOfMeasure = await UnitOfMeasures.findAll();
        res.status(200).json({
            message: 'Unité récupéré',
            data: unitOfMeasure
        })
    } catch (error) {
        res.status(400).json({
            error: error.message,
            message: 'Impossible de récupérer les unités'
        })
    }
}

const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `uploads/products/`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Taille maximale de fichier de 5 Mo
const fileSizeFilter = (req, file, cb) => {
  if (file.size <= 5242880) {
    cb(null, true);
  } else {
    cb(new Error("La taille du fichier ne doit pas dépasser 5 Mo"), false);
  }
};

// Types de fichiers acceptés: jpeg, jpg, png
const fileTypeFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(
      new Error("Seuls les fichiers de type jpeg et png sont acceptés"),
      false
    );
  }
};

module.exports = { fileSizeFilter, fileTypeFilter, storage };

const nodemailer = require('nodemailer')

exports.sendMail = async (req, res) => {
  //Configuration de nodemailer pour envoyer le mail
  const data = req.body
  console.log(data)
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: '10b0a31bad7719',
      pass: '5adebee77d8440',
    },
  })
  try {
    const message = {
      //   from: 'contact@gyozilla.com',
      to: 'cyril.crinquette@hotmail.com',
      subject: 'Message from APP',
      text: data.message,
    }
    transporter.sendMail(message, (error, info) => {
      if (error) {
        console.error(error)
        return res.status(500).json({
          message: "Une erreur s'est produite lors de l'envoi de l'e-mail.",
          error: error.message,
        })
      } else {
        console.log(`E-mail envoyé`)
        return res.status(200).json({
          message: 'Le message a bien été envoyé à Gyozilla',
        })
      }
    })
  } catch (error) {
    res.status(500).json({
      message: "Le mail n'a pas pu être envoyé",
      error: error.message,
    })
  }
}

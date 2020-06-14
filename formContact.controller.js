const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user : process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
    });

exports.sendContactForm = (req, res, next) => {
    const { name, email, message } = req.body;
    const content = `name: ${name} \n email: ${email} \n message: ${message}`;
    const mailOptions = {
        from: name,
        to: process.env.ADMIN_EMAIL,
        subject: "New message from Contact form",
        text: content
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return res.status(400).send({ error: 'Something went wrong...'})
        } else {
            return res.status(200).send({ message: 'Votre message a été envoyé !'})
        }
    });
}
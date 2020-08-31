const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2 (
  process.env.OAUTH2_ID,
  process.env.OAUTH2_CODE,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH2_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.ADMIN_EMAIL,
      clientId: process.env.OAUTH2_ID,
      clientSecret: process.env.OAUTH2_CODE,
      refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
      accessToken: accessToken
    },
    tls: {
      rejectUnauthorized: false,
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
        error ? res.status(400).send({ error: 'Something went wrong...'}) : res.status(200).send({ message: 'Votre message a été envvoyé !'});
        return transporter.close();
    });
}
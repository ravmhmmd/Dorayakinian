const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '402032365564-1q7ah00pguibui9sbilbnaek541gdjg1.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04psJYa8JBoepCgYIARAAGAQSNwF-L9IrtFJCymnchgqLBgwZdLl47KJwX0bjARdJycWWV7ngRXZqln7HMFq7iifJB5DTFTTaA_g';

//Target email , can be changed, but not for the sender
const TARGET = '13519004@std.stei.itb.ac.id';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN});

const sendMail = async () => {

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'louisriemen@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOption = {
            from: 'Dorayaki <louisriemen@gmail.com>',
            to: TARGET,
            subject: "Dorayaki greets you",
            text: 'There is new request',
            html: '<h1>There is new request</h1>'
        };

        const result = await transport.sendMail(mailOption);
        console.log('Email sent...', result)
        // return result;

    } catch (error) {
        console.log(error.message)
        // return error;
    }
};
module.exports = sendMail
// sendMail()
//     .then((result) => console.log('Email sent...', result))
//     .catch((error) => console.log(error.message));
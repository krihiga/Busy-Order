const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Import cors

const app = express();  // Initialize app before using any middleware
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ensure the 'images' folder exists
if (!fs.existsSync('./img')) {
    fs.mkdirSync('./img');
}

// Configure multer for file uploads
const Storage = multer.diskStorage({
    destination: function (_req, _file, callback) {
        callback(null, './img');
    },
    filename: function (_req, file, callback) {
        callback(null, file.fieldname + '__' + Date.now() + '__' + file.originalname);
    }
});

const upload = multer({ storage: Storage }).single('image');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/customdesign.html', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'customdesign.html'));
});

app.post('/sendmail', (req, res) => {
        upload(req, res, function (err) {
        if (err) {
            console.error("File upload error:", err);
            return res.end("Error during file upload.");
        }

        const { name, email, phone, businessName, style, colors, description } = req.body;

        // Basic validation for the essential fields
        if (!name || !email || !phone || !businessName || !style || !colors || !description || !req.file) {
            return res.end("Please fill in all fields and upload the file.");
        }

        const filePath = req.file.path;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'onlyrithi@gmail.com',
                pass: 'mvcz jraz ohrc ocwl' // Replace with your app-specific password
            },
        });

        const mailOptions = {
            from: email,
            to: 'onlyrithi@gmail.com',
            subject: `New Design Order from ${name}`,
            text: `Client Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Business Name: ${businessName}
- Logo Style: ${style}
- Preferred Colors: ${colors}
- Additional Notes: ${description}

Attached file below:
`,
            attachments: [
                {
                    filename: path.basename(filePath),
                    path: path.resolve(__dirname, filePath)
                }
            ]
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.error("Error sending email:", err);
                return res.status(500).send("Error sending email.");
            } else {
                console.log("Email sent successfully:", info.response);

                // Delete the uploaded file after email sent
                fs.unlink(filePath, function (err) {
                    if (err) {
                        console.error("Error deleting file:", err);
                        return res.end("Error deleting uploaded file.");
                    } else {
                        console.log("File deleted successfully.");
                        return res.redirect('/placedesignsuccess.html');
                    }
                });
            }
        });
    });
});

app.listen(5500, () => {
    console.log('Server is running on port 5500');
});
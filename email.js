var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brahminadine95@gmail.com',
    pass: 'dkkninnillqkiqmc'
  }
});

var mailOptions = {
  from: 'brahminadine95@gmail.com',
  to: 'brahminadine95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
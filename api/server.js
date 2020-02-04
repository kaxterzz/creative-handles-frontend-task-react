let express = require("express"),
  path = require('path'),
  nodeMailer = require('nodemailer'),
  bodyParser = require('body-parser');
  const cors = require('cors');

let app = express();

app.use(express.static('src'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

app.post('/send-email', function (req, res) {
  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: false,
      auth: {
          user: 'email',
          pass: 'passowrd'
      }
  });
  let mailOptions = {
      to: 'krystina@creativehandles.com',
      subject: 'Someone sent a message',
      body: req.body.message
  };
    //sending Email Useing SendMail Method
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent: %s", info.messageId); //getting Email ID
      });
      res.json({status:"success", message: "Email Sent !", data:null});
});

let server = app.listen(3001, function(){
    let port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
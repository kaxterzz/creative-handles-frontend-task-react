import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import nodemailer from "nodemailer";

const useStyles = makeStyles(theme => ({
  textField: {
    marginRight: theme.spacing(1),
    width: "100%"
  },
  BtnBgColor: {
    backgroundColor: "#b421fc",
    width: "100%"
  }
}));

function Message() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  const [nameErrMsg, setNameErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [messageErrMsg, setMessageErrMsg] = useState("");

  const sendMessage = e => {
    e.preventDefault();
    console.log("ssssss");

    if (name === "") {
      setNameErr(true);
      setNameErrMsg("Name is required !");
    } else {
      setNameErr(false);
      setNameErrMsg("");
    }

    if (email === "") {
      setEmailErr(true);
      setEmailErrMsg("Email is required !");
    } else {
      setEmailErr(false);
      setEmailErrMsg("");
    }

    if (message === "") {
      setMessageErr(true);
      setMessageErrMsg("Message is required !");
    } else {
      setMessageErr(false);
      setMessageErrMsg("");
    }

    if (name !== "" || email !== "" || message !== "") {
    }
  };

  const sendEmail = ({ name, email, phone, message }) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "youremail@gmail.com",
        pass: "yourpassword"
      }
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "myfriend@yahoo.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!"
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };

  return (
    <form
      id="contact-form"
      autoComplete="off"
      method="POST"
      onSubmit={sendMessage}
    >
      <div class="row">
        <div class="col-6">
          <TextField
            label="Name *"
            id="name"
            variant="outlined"
            size="small"
            value={name}
            onChange={e => setName(e.target.value)}
            error={nameErr}
            className={classes.textField}
            helperText={nameErrMsg}
          />
        </div>
        <div class="col-6">
          <TextField
            label="Email *"
            id="email"
            variant="outlined"
            size="small"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={emailErr}
            className={classes.textField}
            helperText={emailErrMsg}
          />
        </div>
      </div>
      <div class="col-12">
        <TextField
          label="Phone"
          id="phone"
          variant="outlined"
          size="small"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className={classes.textField}
        />
      </div>
      <div class="col-12">
        <TextField
          label="Message *"
          id="message"
          variant="outlined"
          multiline
          rows="4"
          value={message}
          onChange={e => setMessage(e.target.value)}
          error={messageErr}
          className={classes.textField}
          helperText={messageErrMsg}
        />
      </div>
      <div class="col-12" style={{ paddingLeft: "15px" }}>
        <span>Fields marked with * are required !</span>
      </div>
      <div class="col-12">
        <Button
          variant="contained"
          color="primary"
          form="my-form-id"
          onClick={sendMessage}
          className={(classes.textField, classes.BtnBgColor)}
        >
          Send
        </Button>
      </div>
    </form>
  );
}

export default Message;

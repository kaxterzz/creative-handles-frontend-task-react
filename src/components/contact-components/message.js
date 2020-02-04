import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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

  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const vertical = 'top'
  const horizontal = 'right'

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
      axios({
        method: "POST",
        url: "http://localhost:3001/send-email",
        data: {
          name: name,
          email: email,
          phone: phone,
          messsage: message
        }
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          setOpen(true)
        } else {
          setErrorOpen(true)
        }
      });
    }
  };

  return (
    <div>
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
      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical, horizontal }} key={`${vertical},${horizontal}`}>
        <Alert severity="success">Success !</Alert>
      </Snackbar>

      <Snackbar open={errorOpen} autoHideDuration={3000} anchorOrigin={{ vertical, horizontal }} key={`${vertical},${horizontal}`}>
        <Alert severity="error">An error occured !</Alert>
      </Snackbar>
    </div>
  );
}

export default Message;

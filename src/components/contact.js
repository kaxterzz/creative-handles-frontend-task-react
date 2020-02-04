import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faAddressCard,
  faFax,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginRight: theme.spacing(1),
    width: "100%"
  },
  fStyle: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fb: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  ft: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems:'stretch'
  }
}));

function Contact() {
  const MapMarker = ({}) => (
    <div>
      <FontAwesomeIcon icon={faMapMarkerAlt} color="red" size="2x" />
    </div>
  );
  const center = {
    lat: 59.95,
    lng: 30.33
  };
  const zoom = 11;
  const classes = useStyles();
  return (
    <div class="row">
      <div class="main-flex-style" style={{marginRight:'15px',marginLeft:'15px'}}>
        <div class="card" style={{width:'49%'}}>
          <div className={classes.ft}>
            <div className="card-texts" style={{width:'45%'}}>
              <p>
                <FontAwesomeIcon icon={faEnvelope} color="#b421fc" />
                &nbsp;kasunsmbox@hotmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} color="#b421fc" />
                &nbsp;+94702010363
              </p>
              <p>
                <FontAwesomeIcon icon={faFax} color="#b421fc" />
                &nbsp;+947070707070
              </p>
              <p>
                <FontAwesomeIcon icon={faAddressCard} color="#b421fc" />
                &nbsp;No.456/4/6,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;School Road,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gohagoda,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Katugastota,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kandy,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20000,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sri Lanka
              </p>
            </div>
            <div style={{ width:'55%', height:'400px' }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAhoWkB532k7sziESp5wmBlym_Z0Rw-nSo"
                }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <MapMarker lat={59.955413} lng={30.337844} />
              </GoogleMapReact>
            </div>
          </div>
        </div>
        <div class="card" style={{width:'49%'}}>
          <form noValidate autoComplete="off">
            <div class="row">
              <div class="col-6">
                <TextField
                  label="Name *"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                />
              </div>
              <div class="col-6">
                <TextField
                  label="Email *"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  type="email"
                  className={classes.textField}
                />
              </div>
            </div>
              <div class="col-12">
                <TextField
                  label="Phone"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                />
              </div>
              <div class="col-12">
                <TextField
                  label="Message *"
                  variant="outlined"
                  multiline
                  rows="4"
                  className={classes.textField}
                />
              </div>
              <div class="col-12" style={{paddingLeft:'15px'}}>
                <span>Fields marked with * are required !</span>
              </div>
              <div class="col-12">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.textField}
                >
                  Send
                </Button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

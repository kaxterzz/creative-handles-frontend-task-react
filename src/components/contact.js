import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faAddressCard, faFax, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/k-grid.css';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
    }
}));

function Contact() {
    const MapMarker = ({}) => <div><FontAwesomeIcon icon={faMapMarkerAlt} /></div>;
    const center = {
        lat: 59.95,
        lng: 30.33
    }
    const zoom = 11
    const classes = useStyles();
    return (
        <div class="row">
            <div class="col-12">
                <div class="col-6 card">
                    <div class="">
                        <div class="col-5">
                            <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;kasunsmbox@hotmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone} />&nbsp;+94702010363</p>
                            <p><FontAwesomeIcon icon={faFax} />&nbsp;+947070707070</p>
                            <p><FontAwesomeIcon icon={faAddressCard} />&nbsp;No.456/4/6,Katugastota,Kandy</p>
                        </div>
                        <div class="col-7" style={{ height: '300px' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyAhoWkB532k7sziESp5wmBlym_Z0Rw-nSo' }}
                                defaultCenter={center}
                                defaultZoom={zoom}
                            >
                                <MapMarker
                                    lat={59.955413}
                                    lng={30.337844}
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
                <div class="col-6 card">
                    <form noValidate autoComplete="off">
                        <div class="row">
                            <div class="col-6">
                                <TextField
                                    label="Name"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                    className={classes.textField}
                                />
                            </div>
                            <div class="col-6">
                                <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                    type="email"
                                    className={classes.textField}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <TextField
                                    label="Phone"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                    className={classes.textField}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <TextField
                                    label="Message"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    multiline
                                    rowsMax="8"
                                    className={classes.textField}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.textField}
                                >
                                    Send
                            </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
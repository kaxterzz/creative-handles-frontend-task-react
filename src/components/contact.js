import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faAddressCard, faFax } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const center = {
        lat: 59.95,
        lng: 30.33
    }
    const zoom = 11
    return (
        <div class="contact-info-wrapper">
            <div class="card contact-card">
                <div class="card-texts">
                    <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;kasunsmbox@hotmail.com</p>
                    <p><FontAwesomeIcon icon={faPhone} />&nbsp;+94702010363</p>
                    <p><FontAwesomeIcon icon={faFax} />&nbsp;+947070707070</p>
                    <p><FontAwesomeIcon icon={faAddressCard} />&nbsp;No.456/4/6,Katugastota,Kandy</p>
                </div>
            </div>
            <div>

            </div>
            <div style={{ height: '300px', width: '50%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAhoWkB532k7sziESp5wmBlym_Z0Rw-nSo' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Contact;
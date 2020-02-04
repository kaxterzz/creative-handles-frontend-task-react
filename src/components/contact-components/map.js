import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Map() {
  const MapMarker = ({}) => (
    <div>
      <FontAwesomeIcon icon={faMapMarkerAlt} color="#E81333" size="2x" />
    </div>
  );
  const center = {
    lat: 7.2921845,
    lng: 80.6347519
  };
  const zoom = 16;

  return (
    <div class="map-size">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAhoWkB532k7sziESp5wmBlym_Z0Rw-nSo"
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker lat={7.2921845} lng={80.6347519} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;

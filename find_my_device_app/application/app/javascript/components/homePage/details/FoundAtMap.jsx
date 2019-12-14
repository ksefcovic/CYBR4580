import React from "react"
import { compose, withProps } from "recompose";

import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
} from "react-google-maps";

const GOOGLE_API_KEY = 'AIzaSyDtzH-p8cOks2Lo04A1RtAQguqBza13cw4';
const FoundAtMap = compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(({ lat, lng, marker }) => {
    return (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat, lng }}>
            <Marker position={marker} />
        </GoogleMap>
    )
});

  export default FoundAtMap;

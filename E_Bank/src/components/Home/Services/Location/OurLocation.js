import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { ComponentWrapper } from "../../HomeElements";
import './OurLocationElements.js';
import { MapContainer } from "./OurLocationElements.js";
import SideMenu from "../../modules/SideMenu";

class OurLocation extends React.Component {
    render() {
      const coords = {lat: 12.921470, lng: 79.131561}
      return (
        <>
          <ComponentWrapper>
            <SideMenu/>
            <MapContainer>
              <Map style={{left: 0, right: 0, height: 'auto', position: 'absolute',}} 
                   google={this.props.google} 
                   zoom={14} 
                   initialCenter={coords}>
                <Marker
                  title={'Click and find your way to us!!'}
                  name={'Vellore Institute of Technology, Vellore'}
                  position={coords} />
              </Map>
            </MapContainer>
          </ComponentWrapper>
        </>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("YOUR_API_KEY")
  })(OurLocation)
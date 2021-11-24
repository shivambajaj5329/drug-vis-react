import React, {Component} from "react";
import data from "../data/data_scaled_correctly.json"
import "leaflet/dist/leaflet.css"
import { MapContainer , GeoJSON } from "react-leaflet"
import "../styles/MyMap.css"






class MyMap extends Component{
    state = {}

    componentDidMount(){
        console.log(data)
    }

    

    countryStyle = {
        fillColor: "blue",
        color: "black",
        fillOpacity: 0.3,
    };

    OnEachState = (state, layer) => {
        const stateName = state.properties.NAME
        const stateWiseDrugData = state.properties.avg_nrm_data
        console.log(stateName);
        layer.bindPopup(stateName + stateWiseDrugData)
        layer.on({
            click: (event) => {
                console.log("click")
            }
        })
        layer.options.fillOpacity = stateWiseDrugData

    }



    render(){
        return (
            <div>
                <h1 style = { {textAlign:'center'}}>Drug Use Visualisation</h1>
                <MapContainer style ={{height:"80vh"}} zoom ={5} center={[37.6000, -95.6650]}>

                <GeoJSON data = {data.features} style = {this.countryStyle} onEachFeature ={this.OnEachState}></GeoJSON>

                </MapContainer>

            </div>

        )
    }
}

export default MyMap;
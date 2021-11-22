import React, {Component} from "react";
import data from "../data/states.geo.json"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import "../styles/MyMap.css"



class MyMap extends Component{
    state = {}

    componentDidMount(){
        console.log(data)
    }

    countryStyle = {
        fillColor: "red",
        color: "black"
    };


    OnEachState = (state, layer) => {
        const stateName = state.properties.NAME
        console.log(stateName);
        layer.bindPopup(stateName)
        layer.on({
            click: (event) => {
                console.log("click")
            }
        })

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
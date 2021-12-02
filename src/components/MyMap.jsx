import React, {Component} from "react";
import "leaflet/dist/leaflet.css"
import { MapContainer , GeoJSON } from "react-leaflet"
import "../styles/MyMap.css"

// import { MDBFormInline, MDBInput } from 'mdbreact';


  

class MyMap extends Component{

    state = {
        data: this.props.data
    }

    countryStyle = {
        fillColor: "red",
        color: "black",
        fillOpacity: 0.3,
    };

    OnEachState = (state, layer) => {
        const stateName = state.properties.NAME
        const stateWiseDrugData = state.properties.avg_nrm_data
        layer.bindPopup(stateName + stateWiseDrugData)
        layer.on({
            click: (event) => {
                console.log("click")
            }
        })
        layer.options.fillOpacity = stateWiseDrugData

    }
    componentDidUpdate(prevprops, prevstate)  {
        const {data} = prevprops
        if (JSON.stringify(data) !== JSON.stringify(this.props.data)){
            this.setState({data:this.props.data})
        }
    }
    render(){
        const {data} = this.state
        console.log(data)
        return (
            <div>
                <h1 style = { {textAlign:'center'}}>Drug Use Visualisation</h1>
                <MapContainer style ={{height:"80vh"}} zoom ={4} center={[37.6000, -95.6650]}>
                <GeoJSON data = {data.features} style = {this.countryStyle} onEachFeature ={this.OnEachState}></GeoJSON>
                </MapContainer>
                {/* <BarChart data={datas} /> */}
                
            </div>

        )
    }
}

export default MyMap;
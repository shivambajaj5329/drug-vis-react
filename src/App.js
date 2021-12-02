//import {MapContainer,TileLayer,Marker ,Popup } from "react-leaflet"
import React, {Component} from "react";
import "leaflet/dist/leaflet.css"
import { MapContainer , GeoJSON } from "react-leaflet"
import "./styles/MyMap.css"
import './App.css';
//import MyMap from "./components/MyMap.jsx";
//import React, {Component} from 'react';
import cocaine_data from './data/data_cocaine.json'
import illicit_drugs from './data/data_scaled_correctly.json'



// function App() {
//   return <MyMap />;
// // return <BarChart data={data} />

// }
// return <MyMap />;

class App extends Component {
  

state = {
  data: illicit_drugs
};
constructor(props){
  super(props)
  this.onRadioSelect = this.onRadioSelect.bind(this)
}

onRadioSelect = (event) =>{
  const radio_value = event.target.value
  let data

  if (radio_value === "illicit_drugs"){
    data = illicit_drugs
  }
  else if (radio_value === "cocaine"){
    data = cocaine_data
  }
  this.setState({
    data
  })
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

render(){
  const {data} = this.state;
  console.log(data)
  return(

    <>
    <label htmlFor='illicit_drugs'> illicit drugs   </label>
      <input type = "radio" placeholder='illicit drugs' value="illicit_drugs" id = "illicit_drugs" onChange={this.onRadioSelect} name='drugs' />
      <label htmlFor='cocaine'> cocaine   </label>
      <input type = "radio" placeholder='cocaine' value="cocaine" id = "cocaine" onChange={this.onRadioSelect} name='drugs'/>
      <div>
                <h1 style = { {textAlign:'center'}}>Drug Use Visualisation</h1>
                <MapContainer style ={{height:"80vh"}} zoom ={4} center={[37.6000, -95.6650]}>
                <GeoJSON data = {data.features} style = {this.countryStyle} onEachFeature ={this.OnEachState}></GeoJSON>
                </MapContainer>
                {/* <BarChart data={datas} /> */}
            </div>
    </>
  )
}
}
export default App;

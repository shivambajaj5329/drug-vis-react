//import {MapContainer,TileLayer,Marker ,Popup } from "react-leaflet"
import './App.css';
import MyMap from "./components/MyMap.jsx";
import BarChart from './components/BarChart'



function App() {
  //const position = [51.505, -0.09]
  //return //(
  // <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: 80, width: 80 }}>
  //   <TileLayer
  //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   />
  //   <Marker position={position}>
  //     <Popup>
  //       A pretty CSS3 popup. <br /> Easily customizable.
  //     </Popup>
  //   </Marker>
  // </MapContainer>


 // );
  return <MyMap />;
// return <BarChart data={data} />
}

export default App;

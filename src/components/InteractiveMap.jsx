// import Map, { Marker } from 'react-map-gl';
// import { useState } from 'react';
// import 'mapbox-gl/dist/mapbox-gl.css';

// // Replace with your actual Mapbox token
// const MAPBOX_TOKEN = 'pk.eyJ1IjoieHBsb3Jld29ybGQiLCJhIjoiY2x0d2F4ZWRqMGJrYzJrcGR5ZDh6Y2pkdyJ9.SWX9EHE8QgqZgGhSKR4mYg';

// function InteractiveMap() {
//   const [viewState, setViewState] = useState({
//     longitude: 0,
//     latitude: 20,
//     zoom: 1.5
//   });

//   return (
//     <Map
//       {...viewState}
//       onMove={evt => setViewState(evt.viewState)}
//       style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
//       mapStyle="mapbox://styles/mapbox/streets-v11"
//       mapboxAccessToken={MAPBOX_TOKEN}
//     >
//       {/* Add markers here */}
//     </Map>
//   );
// }

// export default InteractiveMap;


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Example of some marker data (latitude, longitude, etc.)
const markers = [
  { id: 1, latitude: 20.2960, longitude: 85.8246, label: "Bhubaneswar" },
  { id: 2, latitude: 25.5941, longitude: 85.1376, label: "Patna" }
];

function InteractiveMap() {
  const [viewState, setViewState] = useState({
    latitude: 20,
    longitude: 0,
    zoom: 2
  });

  return (
    <MapContainer
      center={[viewState.latitude, viewState.longitude]}
      zoom={viewState.zoom}
      style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
      whenCreated={(map) => map.on('move', () => {
        const { lat, lng } = map.getCenter();
        setViewState({
          latitude: lat,
          longitude: lng,
          zoom: map.getZoom(),
        });
      })}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Adding markers */}
      {markers.map(marker => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          icon={new L.Icon({ iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] })}
        >
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default InteractiveMap;

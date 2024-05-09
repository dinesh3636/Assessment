import React, { useEffect, useState } from 'react';
import PhotoGrid from './Components/PhotoGrid/PhotoGrid';
import UserInfo from './Components/UserInfo/UserInfo';
import "./App.css";

function App() {
  const [userData, setUserData] = useState({});
  const [photoData, setPhotoData] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => setUserData(data));

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  }, []);

  return (
    <div className="App">
      <UserInfo userData={userData} />
      <PhotoGrid photoData={photoData} />
    </div>
  );
}

export default App;

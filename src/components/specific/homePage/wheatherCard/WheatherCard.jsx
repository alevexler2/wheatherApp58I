import React, {useEffect, useState} from 'react'
import axios from 'axios';

const WheatherCard = ({wheatherData}) => {
  const { name, main, weather } = wheatherData;
  const [icon, setIcon] = useState();

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const iconCode = weather[0].icon;
        const response = await axios.get(`http://openweathermap.org/img/wn/${iconCode}.png`, { responseType: 'arraybuffer' });
        const iconData = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        setIcon(`data:image/png;base64,${iconData}`);
      } catch (error) {
        console.error("Error al cargar el icono:", error);
      }
    };
    fetchIcon();
  }, [name]);
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">temperatura: {main.temp}°</h6>
        <img src={icon} alt="Weather Icon" />
      </div>
    </div>
  )
}

export default WheatherCard
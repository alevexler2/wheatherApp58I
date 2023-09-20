import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InputCity from '../../components/specific/homePage/inputCity/InputCity';
import WheatherCard from '../../components/specific/homePage/wheatherCard/WheatherCard';

const HomePage = () => {
  const [wheatherData, setWheatherData] = useState();
  const [cityName, setCityName] = useState("");
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const urlBase = import.meta.env.VITE_APP_API_URL_BASE;

  useEffect(() => {
    let timer;

    const fetchData = async() => {
      const { data } = await axios.get(`${urlBase}?q=${cityName}&appid=${apiKey}&units=metric`);
      setWheatherData(data)
    };
    // Esta función se utiliza para realizar una solicitud de datos climáticos después de un retraso de 1500 milisegundos.
    const delayedFetchClima = () => {
  
      // Se establece un nuevo temporizador que ejecutará fetchData después de 1500 milisegundos.
      timer = setTimeout(() => {
        fetchData();
      }, 1500); 
    };

    // Comprueba si el nombre de la ciudad tiene una longitud mayor a 0 (es decir, si se ha ingresado una ciudad).
    if (cityName.length > 0) {
      // Si se ha ingresado una ciudad, se llama a la función delayedFetchClima para programar la solicitud de datos climáticos.
    delayedFetchClima();
    }

    // Esta función se devuelve como un efecto de limpieza en un componente React.
    // Se utiliza para limpiar el temporizador si el componente se desmonta antes de que se haya ejecutado la solicitud.
    return () => {
      clearTimeout(timer);
    };

  }, [cityName])

  return (
    <div className='container'>
      <div className="row justify-content-center mt-5 flex-column align-items-center">
        <div className="col-4">
          <InputCity cityName={cityName} setCityName={setCityName}/>
        </div>
        {
          wheatherData && (
            <div className="col-4">
              <WheatherCard wheatherData={wheatherData}/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomePage
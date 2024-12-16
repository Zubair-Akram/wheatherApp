import React, { useEffect, useState } from "react";
import "../css/style.css";

const Weather = () => {
  const [city,setCity] = useState("Lahore")
  const [search,setSearch] = useState("Multan")

  useEffect( ()=>{
    const fetchApi = async () =>{
      const url  = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1097be48a08a477c7ba95dd0f9218d87`
      const response = await fetch(url)
      const resJson = await response.json();
      setCity(resJson.main)
      // console.log(resJson)
    }
    fetchApi();
},[search])
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            placeholder="Search for weather..."
            onChange={ (event) =>{setSearch(event.target.value)} }
          />
        </div>
        {!city ? (
          <p className="para">No Data Found!</p>
        ) :(
            <div>
                <div className="info">
          <h2 className="location">
            <i className="fa-solid fa-street-view"></i> {search}
          </h2>
          <h1 className="temp">{city.temp} Cel</h1>
          <h3 className="temp-max">Min: {city.temp_min} Cel| Max:{city.temp_max} Cel</h3>
        </div>

        <div className="wave"></div>
            </div>
        )

        }

      
      </div>
    </>
  );
};

export default Weather;


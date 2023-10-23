import React, { useEffect, useState } from "react";
import DateTime from './DateTime';


const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  const { formattedDate, curr_day, curr_time } = DateTime();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={YOUR_API_KEY}`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  
  return (
    <>
      
<div className="container">
        <div className="image">
          <img src="images/evening_img1.jpg" className="img" alt="evening_img" />
          <p className="date">{formattedDate}</p>
      <p className="time">{curr_time}</p>
      <p className="day">{curr_day}</p>              

        <div className="box">
        
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h2 className="temp">{city.temp}&deg;Cel</h2>
              <h3 className="tempmin_max">
                {" "}
                Min : {city.temp_min}&deg;Cel | Max : {city.temp_max}&deg;Cel
              </h3>
            </div>
          </div>
        )}
      </div>
      </div>
      </div>
    </>
  );
};

export default Tempapp;

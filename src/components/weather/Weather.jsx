import React, { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import {
  fetchWeatherDataFailure,
  fetchWeatherDataRequest,
  fetchWeatherDataSuccess,
} from "../../redux/action-creators/WeatherActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";

function Weather() {
  const cityRef = useRef();

  const apiKey = "b5902073cd6bd3c4c5c602baa96162da";
  const dispatch = useDispatch()
  const store = useSelector((state)=> state.WeatherApp);
  // console.log(stoc)
 
 

  const fetchWeatherData = (e) => {
      e.preventDefault();
      dispatch(fetchWeatherDataRequest());
      const city = cityRef.current.value;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric}`
        )
        .then((response) => {
          const weatherData = response.data;
          console.log(weatherData);
          dispatch(fetchWeatherDataSuccess(weatherData));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchWeatherDataFailure(errorMsg));
        });
        cityRef.current.value = '';
    }

  return (
    <div style={{ margin: "50px" }}>
      <h1>Weather App</h1>
      <Form className="mt-5 " onSubmit={fetchWeatherData}>
        <Form.Group >
          <Row>
            <Col>
              <Form.Control
                type="text"
                id="cityInput"
                ref={cityRef}
                style={{ width: "45rem" }}
                placeholder="Enter the name of a city to get the current weather:"
              />
            </Col>
            <Col>
              <Button
                type="submit"
                variant="secondary"
              >
                Get Weather
              </Button>
            </Col>
          </Row>
          {store?.weatherData?.sys && <div id="weatherInfo">
            <h2>City : {store.weatherData.sys.country}</h2>
            <h2>State : {store.weatherData.name}</h2>
            <h4>Temperature: {store.weatherData.main.temp} &deg;C</h4>
            <h4>Humidity: {store.weatherData.main.humidity}%</h4>
          </div>}
        </Form.Group>
      </Form>
    </div>
  );
}

export default Weather;

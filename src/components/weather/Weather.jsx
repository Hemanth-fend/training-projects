import React, { useEffect, useRef } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import {
  fetchWeatherDataFailure,
  fetchWeatherDataRequest,
  fetchWeatherDataSuccess,
} from "../../redux/action-creators/WeatherActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import WeatherImage from "./WeatherImage.jpg";

function Weather() {
  const cityRef = useRef();

  const apiKey = "b5902073cd6bd3c4c5c602baa96162da";
  const dispatch = useDispatch();
  const store = useSelector((state) => state.WeatherApp);
  // console.log(store.weatherData.weather[0].icon)

  const fetchWeatherData = () => {
    dispatch(fetchWeatherDataRequest());
    const city = cityRef.current.value || "hyderabad";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric}`
      )
      .then((response) => {
        const weatherData = response.data;
        console.log(weatherData);
        console.log(weatherData.weather[0].icon);
        dispatch(fetchWeatherDataSuccess(weatherData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWeatherDataFailure(errorMsg));
      });
    cityRef.current.value = "";
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div style={{ margin: "50px" }}>

      {/* const weatherIcon =  */}
     
      <h1>Weather App</h1>
      <Form
        className="mt-5 "
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#F4EDF9" }}
      >
        <Row>
        <Col>
            <img src={WeatherImage} alt="image" style={{ width: "100%" }} />
          </Col>
          <Col>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    className="border border-3"
                    ref={cityRef}
                    style={{ width: "42rem", height: "50px", marginTop:"10px" }}
                    placeholder="Enter the name of a city to get the current weather:"
                  />
                </Col>
                <Col>
                  <Button
                    type="submit"
                    variant="secondary"
                    style={{
                      width: "150px",
                      height: "50px",
                      marginTop: "20px",
                    }}
                  >
                    Get Weather
                  </Button>
                </Col>
              </Row>

              <ListGroup
                style={{ width: "42rem", marginTop: "20px" }}
                className="border border-3"
              >
                <ListGroup.Item>
                  {" "}
                  <h3>
                    {" "}
                    <b style={{color:"#5180F3"}}>City</b>: {store?.weatherData?.sys?.country}
                  </h3>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>
                    {" "}
                    <b style={{color:"#5180F3"}}>State</b>: {store.weatherData.name}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <h3>
                    {" "}
                    <b style={{color:"#5180F3"}}>Temperature</b>: {store?.weatherData?.main?.temp} &deg;C
                  </h3>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>
                    {" "}
                    <b style={{color:"#5180F3"}}>Humidity</b>: {store?.weatherData?.main?.humidity}%
                  </h3>
                  <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"  />
                  
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
          </Col>
         
        </Row>
      </Form>
    </div>
  );
}

export default Weather;

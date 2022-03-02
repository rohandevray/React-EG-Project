import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
//above is the way to import axios
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const [weather, setWeather] = useState(null);
  const [weatherInput, setInput] = useState("");
  //at the time of reloading renders this
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=3928363b1352404fbff164549220103&q=London&aqi=no"
      )
      .then((data) => {
        console.log(data.data);
        setWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Events
  const weatherInfo = (e) => {
    setInput(e.target.value);
  };
  const searchWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=3928363b1352404fbff164549220103&q=${weatherInput}`
      )
      .then((data) => {
        console.log(data.data);
        setWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <GlobalStyle />
      {weather && (
        <All>
          <div>
            <input onChange={weatherInfo} type="text" />
            <button onClick={searchWeather}>Search</button>
          </div>
          <Block>
            <div className="text">
              <h1>{weather.location.name}</h1>
              <h3>{weather.location.region}</h3>

              <Mini>
                <p className="lat">Lat: {weather.location.lat} °C</p>
                <div className="line"></div>
                <p className="long">Long: {weather.location.lon} °C</p>
              </Mini>
            </div>

            <div className="emage">
              <img src={weather.current.condition.icon} alt="iconn" />
              <h3>{weather.current.condition.text}</h3>
              <h3>{weather.current.temp_c} °C</h3>
            </div>
          </Block>
        </All>
      )}
    </div>
  );
}

const All = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img {
    width: 100%;
    height: 90px;
  }
  input {
    width: 16rem;
    height: 2rem;
    display: block;
    border: none;
    border-radius: 5px;
  }

  button {
    position: relative;
    top: 0.7rem;
    left: 30%;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    width: 7rem;
    height: 1.8rem;
    cursor: pointer;
  }

  button:hover {
    letter-spacing: 1px;
  }
`;

const Block = styled.div`
  display: flex;
  padding-top: 8%;
  .text {
    padding-right: 9%;
    margin-right: 5rem;
    position: relative;
    top: 2rem;
    height: 10rem;
    width: 60%;
    .lat {
      width: 7.6rem;
    }
    .long {
      width: 8rem;
    }
    p {
      font-size: 0.9rem;
      position: relative;
      top: 1.3rem;

      padding-right: 10px;
      width: 6.5rem;
    }
    h3 {
      position: relative;
      top: 0.3rem;
      font-size: 1.4rem;
    }
  }

  .line {
    width: 2px;
    height: 2.3rem;
    background-color: white;
    position: relative;
    top: 0.9rem;
    margin-left: 5%;
    margin-right: 5%;
  }
  .emage {
    padding-top: 0;
    margin-top: 0;
    padding-left: 8%;
    padding-right: 10%;
    width: 20rem;
    img {
      width: 120px;
      height: 110px;
    }
    h3 {
      margin-left: 10%;
      padding-top: 1%;
    }
  }
`;
const Mini = styled.div`
  display: flex;
`;

export default App;

//write or name the styled componnets in cpital letter
//above the second div is for wrapping everything else in one thing to make conditional work

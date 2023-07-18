import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


function App() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = "71da961115469e7e2791e356cdd58f6a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`


  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url
        })
        console.log(data);
        setResult(data);
      }
      catch (err) {
        alert(err);
      }
    }
  }
  // 비동기 방식으로 API 진행을 할 것 
  return (
    <AppWrap>
      <div className = 'appContentWrap'>
        <div className = 'title'>☀️ React JS 날씨 앱 만들기 🌨️</div>
        <input
          placeholder ='도시를 영어로 입력하세요'
          value = {location}
          onChange={(e)=>setLocation(e.target.value)}
          type='text'
          onKeyDown = {searchWeather}
        />
        {
          Object.keys(result).length !== 0 && (
            <ResultWrap>
              <div className="city">{result.data.name}</div>
              <div className="temperature">
                {Math.round(((result.data.main.temp -273.15) * 10)) / 10}°C
              </div>
              <div className="sky">{result.data.weather[0].main}</div>
            </ResultWrap>
          )
        }
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  @font-face {
    font-family: 'Dovemayo_gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.1/Dovemayo_gothic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  font-family: 'Dovemayo_gothic';
  width: 100vw;
  height: 100vh;
  text-align: center;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
  }

  .title {
    font-size: 20px;
    font-family: 'Dovemayo_gothic';
    padding: 20px 0;
    color: dodgerblue;

  }

  input {
    padding: 13px;
    border: 2px deepskyblue solid;
    border-radius: 16px;
    font-family: 'Dovemayo_gothic';
    font-size: 18px;
  }
`;


const ResultWrap = styled.div`
  margin-top: 40px;
  padding: 10px;
  // border: 1px dodgerblue solid;
  // border-radius: 8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
`;
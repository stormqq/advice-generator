import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card";
import { MainContainer } from "./styles/MainContainer.styled";

function App() {
  const [data, setData] = useState({});

  const uploadAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setData(res.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(uploadAdvice, []);

  return (
    <MainContainer>
      <Card data={data} handleClick={uploadAdvice} />
      <h1>TEST</h1>
    </MainContainer>
  );
}

export default App;

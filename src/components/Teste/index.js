import axios from "axios";
import { useState } from "react";

const Teste = () => {
  const [digimon, setDigimon] = useState([]);

  const chamarDigimon = () => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => setDigimon(response.data));
  };
  console.log(digimon.filter((item) => item.name === "Koromon"));
  return (
    <>
      <div>
        {digimon.map((item, indice) => (
          <li key={indice}>
            {item.name}
            <img alt={item.name} src={item.img} />
            {item.level}
          </li>
        ))}
        <button onClick={chamarDigimon}> chamar digimon</button>
      </div>
    </>
  );
};

export default Teste;

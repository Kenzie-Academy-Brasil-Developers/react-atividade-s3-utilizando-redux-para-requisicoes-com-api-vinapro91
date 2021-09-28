import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch, getState) => {
  //Aqui faça uma requisição com o axios e em seguida, no .then()
  //utilize a função dispatch() passando addDigimon(response.data[0].name)
  const { digimons } = getState();
  console.log(digimons);
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) =>
      dispatch(
        addDigimon([
          ...digimons,
          ...response.data.filter((item) => item.name === digimon),
        ])
      )
    );
};

export default addDigimonsThunk;

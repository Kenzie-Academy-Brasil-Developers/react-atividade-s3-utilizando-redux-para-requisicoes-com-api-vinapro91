import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const HandleSearch = () => {
    dispatch(addDigimonsThunk(input, setError));
  };
  console.log(error);
  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      {error && <p>Digimon não encontrado</p>}
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        <button onClick={HandleSearch}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search;

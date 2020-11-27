import React from "react";
import { getAllArtworks } from "./API";
import { useData } from "./Context";
import { ACTIONS } from "./reducer";

function App() {
  const { dispatch } = useData();

  const getDataAndSetState = async () => {
    const result = await getAllArtworks();
    console.log("the result of the fetch is:", result);
    dispatch({ type: ACTIONS.ALL, payload: result });
  };

  return (
    <div>
      Hello World!
      <button onClick={getDataAndSetState}>Click to fetch data</button>
    </div>
  );
}

export default App;

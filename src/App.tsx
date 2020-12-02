import { getAllArtworks } from "./API";
import { useData } from "./Context";
import { ACTIONS } from "./reducer";

function App() {
  const { dispatch } = useData();

  const getDataAndSetState = async (): Promise<void> => {
    const result = await getAllArtworks();
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

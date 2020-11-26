import React, { useEffect, useState } from "react";
import { getAllArtworks, Artwork } from "./API";

function App() {
  const [arts, setArts] = useState<Artwork[] | undefined>([]);

  const getDataAndSetArts = async () => {
    //   getAllArtworks().then((d) => setArts(d)) ///// with Promises
    const data = await getAllArtworks();
    setArts(data);
  };

  useEffect(() => {
    getDataAndSetArts();
  }, []);

  return <div className="App">Hello World!</div>;
}

export default App;

const BASE_URL = `http://localhost:8000/artworks`;

export type Artwork = {
  artist: string;
  title: string;
  year: string;
  medium: string;
  height: string;
  width: string;
  id: number;
};

const configObj = (method: string, data: Artwork | string = "") => {
  const obj = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  return obj;
};

const getAllArtworks = async (): Promise<Artwork[] | undefined> => {
  // With Promises
  //   return fetch(BASE_URL)
  //     .then((r) => r.json())
  //     .catch((e) => console.log(e));
  try {
    const artworks: Artwork[] = await (await fetch(BASE_URL)).json();
    return artworks;
  } catch (e) {
    console.log(e);
  }
};

const getArtById = async (id: number): Promise<Artwork | undefined> => {
  try {
    const artwork = await (await fetch(`${BASE_URL}/${id}`)).json();
    return artwork;
  } catch (error) {
    console.log(error);
  }
};

export { getAllArtworks, getArtById };

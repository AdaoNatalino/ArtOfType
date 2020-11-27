const BASE_URL = `http://localhost:8000/artworks`;

export type Artwork = {
  artist: string;
  title: string;
  year: string;
  medium: string;
  height: number;
  width: number;
  id: string;
};

const AuthorizedFetch = (url: string, options: any = {}) => {
  return fetch(url, {
    method: options.method,
    headers: {
      ...options.headers,
      Authorization: `Bearer getToken`,
    },
    body: options.body,
  });
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

const deleteArtwork = async (id: number): Promise<Object> => {
  try {
    await fetch(`${BASE_URL}/${id}`);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

const createArt = async (data: Artwork): Promise<Artwork | undefined> => {
  const obj = configObj("POST", data);
  try {
    const newArt = await (await fetch(BASE_URL, obj)).json();
    return newArt;
  } catch (error) {
    console.log(error);
  }
};

export { getAllArtworks, getArtById, deleteArtwork, createArt };

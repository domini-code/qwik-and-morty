export const apiService = async (id?: string) => {
  const baseAPI = `https://rickandmortyapi.com/api/character`;
  const endPoint = id ? `${baseAPI}/${id}` : baseAPI;
  const data = await fetch(endPoint, {
    method: 'GET',
  });

  return data.json();
};

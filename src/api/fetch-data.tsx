export const apiService = async () => {
  const data = await fetch(`https://rickandmortyapi.com/api/character`, {
    method: 'GET',
  });

  return data.json();
};

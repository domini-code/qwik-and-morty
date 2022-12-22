import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { apiService } from '~/api/fetch-data';
import { Character } from '~/models/character';

export default component$(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.params.id;
  const useResource = useResource$(() => apiService(id));

  return (
    <Resource
      value={useResource}
      onPending={() => <p>Loading characters..... </p>}
      onResolved={(character: Character) => {
        return (
          <>
            <button
              onClick$={() => (navigate.path = '/')}
              type='button'
              class='inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
            >
              Back
            </button>

            <div class='flex justify-center'>
              <div class='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
                <img
                  class=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
                  src={character.image}
                  alt={character.name}
                />
                <div class='p-6 flex flex-col justify-start'>
                  <h5 class='text-gray-900 text-xl font-medium mb-2'>{character.name}</h5>
                  <p class='text-gray-700 text-base mb-4'>
                    {character.status} - {character.gender}
                  </p>
                  <p class='text-gray-600 text-xs'>Specie: {character.species}</p>
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
});

import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { apiService } from '~/api/fetch-data';
import { Character } from '~/models/character';
import CharacterComponent from '~/components/character/character';

export default component$(() => {
  const useResource = useResource$(() => apiService());

  return (
    <Resource
      value={useResource}
      onPending={() => <p>Loading characters..... </p>}
      onResolved={({ results }) => {
        return (
          <>
            <ul class='grid grid-cols-3 gap-1'>
              {results.map((character: Character) => {
                return (
                  <li key={character.id}>
                    <CharacterComponent {...character} />
                  </li>
                );
              })}
            </ul>
          </>
        );
      }}
    />
  );
});

import { component$ } from '@builder.io/qwik';
import { Character } from '~/models/character';

export default component$(({ name, image }: Partial<Character>) => {
  return (
    <div class='rounded-md'>
      <img class='rounded-md object-cover' src={image} alt={name} />
      <div class='mt-2'>
        <div class='font-bold text-slate-700 leading-snug text-center'>
          <a href='/' class='hover:underline'>
            {name}
          </a>
        </div>
      </div>
    </div>
  );
});

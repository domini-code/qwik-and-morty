import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Character } from '~/models/character';

export default component$(({ name, image, id }: Pick<Character, 'name' | 'image' | 'id'>) => {
  return (
    <div class='rounded-md'>
      <img class='rounded-md object-cover' src={image} alt={name} />
      <div class='mt-2'>
        <div class='font-bold text-slate-700 leading-snug text-center'>
          <Link href={`details/${id}`} class='hover:underline'>
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
});

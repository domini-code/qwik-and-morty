import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class='logo'>
        <a href='/' title='qwik'>
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <Link href='/' class='my-link'>
            Home
          </Link>
        </li>
      </ul>
    </header>
  );
});

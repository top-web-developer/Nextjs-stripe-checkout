import { HeartIcon } from '@heroicons/react/solid';

const Footer = () => (
  <footer className="container xl:max-w-screen-xl mx-auto p-6 mt-8 text-center">
    <p>
      <a
        href="https://github.com/top-web-developer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-current"
      >
        Made with{' '}
        <HeartIcon className="inline-block w-4 h-4 -mt-1 text-red-600 animate-pulse" />{' '}
        by Gabriel
      </a>
    </p>
  </footer>
);

export default Footer;

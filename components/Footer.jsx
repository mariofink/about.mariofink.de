const MailIcon = () => (
  <svg
    className="w-6 h-6 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ></path>
  </svg>
);

const HomeIcon = () => (
  <svg
    className="w-6 h-6 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    ></path>
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-6 h-6 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    ></path>
  </svg>
);

const Footer = () => (
  <footer className="sm:flex sm:gap-6 sm:items-center sm:justify-center px-6 py-6 mx-auto max-w-prose sm:h-24 border-t">
    <a
      className="flex text-green-500 py-1"
      href="//mariofink.de"
      target="_blank"
      rel="noopener noreferrer"
    >
      <HomeIcon /> MarioFink.de
    </a>
    <a className="flex text-green-500 py-1" href="mailto:info@mariofink.de">
      <MailIcon /> info@mariofink.de
    </a>
    <a className="flex text-green-500 py-1" href="tel:1234">
      <PhoneIcon /> 12345
    </a>
  </footer>
);

export default Footer;

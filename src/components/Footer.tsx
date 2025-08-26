const Footer = () => {
  return (
    <footer className='text-center !py-4'>
      <a
        href='https://www.linkedin.com/in/quentin-heusse/'
        className='text-sm text-[#5a5a5a]'
      >
        © {new Date().getFullYear()} Quentin Heusse
      </a>
    </footer>
  );
};

export default Footer;

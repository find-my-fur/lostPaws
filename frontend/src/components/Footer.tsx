const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-4 text-center'>
      <p>&copy; {new Date().getFullYear()} Lost Paws. All rights reserved.</p>
      <a href='/privacy' className='text-gray-400 hover:underline'>
        Privacy Policy
      </a>
      <span> | </span>
      <a href='/contact' className='text-gray-400 hover:underline'>
        Contact Us
      </a>
    </footer>
  );
};

export default Footer;

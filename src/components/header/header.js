import '../header/header.css';

const Header = () => {
  return (
    <div className='header'>
      <header>
        <div className='title instruction'>
          <h1>Memory Card</h1>
          <p>
            Get points by clicking on an image, but don't click on the same
            image twice!
          </p>
        </div>
        <div className='score'>
          <h3>
            Score: <span className='current-score'>0</span>{' '}
          </h3>
          <h3>
            Best Score: <span className='best-score'>0</span>
          </h3>
        </div>
      </header>
    </div>
  );
};

export default Header;

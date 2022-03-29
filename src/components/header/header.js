import '../header/header.css';
import { ImTrophy, ImMeter } from 'react-icons/im';

const Header = (props) => {
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
            <ImMeter></ImMeter>Score:{' '}
            <span className='current-score'>{props.score}</span>{' '}
          </h3>
          <h3>
            <ImTrophy></ImTrophy>Best Score:{' '}
            <span className='best-score'>{props.best}</span>
          </h3>
        </div>
      </header>
    </div>
  );
};

export default Header;

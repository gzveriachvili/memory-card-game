import '../main/main.css';
import beatrix from '../../assets/img/Beatrix.webp';
import jules from '../../assets/img/Jules.webp';
import hans from '../../assets/img/Hans.webp';
import jackie from '../../assets/img/Jackie.webp';
import vincent from '../../assets/img/Vincent.webp';
import cliff from '../../assets/img/Cliff.webp';
import django from '../../assets/img/Django.webp';
import blonde from '../../assets/img/Blonde.jpg';
import mia from '../../assets/img/Mia.webp';
import max from '../../assets/img/Max.jpg';
import calvin from '../../assets/img/Calvin.webp';
import ordell from '../../assets/img/Ordell.webp';

const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='item'>
          <div className='img-section'>
            <img src={beatrix} alt='' />
          </div>
          <div className='description'>
            <p>Beatrix Kiddo</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={jules} alt='' />
          </div>
          <div className='description'>
            <p>Jules Winnfield</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={hans} alt='' />
          </div>
          <div className='description'>
            <p>Hans Landa</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={jackie} alt='' />
          </div>
          <div className='description'>
            <p>Jackie Brown</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={vincent} alt='' />
          </div>
          <div className='description'>
            <p>Vincent Vega</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={cliff} alt='' />
          </div>
          <div className='description'>
            <p>Cliff Booth</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={django} alt='' />
          </div>
          <div className='description'>
            <p>Django</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={blonde} alt='' />
          </div>
          <div className='description'>
            <p>Mr. Blonde</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={mia} alt='' />
          </div>
          <div className='description'>
            <p>Mia Wallace</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={max} alt='' />
          </div>
          <div className='description'>
            <p>Max Cherry</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={calvin} alt='' />
          </div>
          <div className='description'>
            <p>Calvin Candie</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={ordell} alt='' />
          </div>
          <div className='description'>
            <p>Ordell Robbie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

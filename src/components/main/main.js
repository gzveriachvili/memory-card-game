import { useState, useEffect } from 'react';

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
import calvin from '../../assets/img/Calvin.jpg';
import ordell from '../../assets/img/Ordell.webp';

const Main = () => {
  const initialRandomArray = () => {
    let arr = [];
    while (arr.length < 12) {
      let num = Math.floor(Math.random() * 12);
      if (arr.indexOf(num) === -1) {
        arr.push(num);
      }
    }
    return arr;
  };

  const [arrIndex, setArrIndex] = useState(initialRandomArray());
  const [scoreArr, setScoreArr] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  let arr = [
    [beatrix, 'Beatrix Kiddo'],
    [jules, 'Jules Winnfield'],
    [hans, 'Hans Landa'],
    [jackie, 'Jackie Brown'],
    [vincent, 'Vincent Vega'],
    [cliff, 'Cliff Booth'],
    [django, 'Django'],
    [blonde, 'Mr. Blonde'],
    [mia, 'Mia Wallace'],
    [max, 'Max Cherry'],
    [calvin, 'Calvin Candie'],
    [ordell, 'Ordell Robbie'],
  ];

  useEffect(() => {
    const shuffleArray = () => {
      let arr = [];
      while (arr.length < 12) {
        let num = Math.floor(Math.random() * 12);
        if (arr.indexOf(num) === -1) {
          arr.push(num);
        }
      }
      setArrIndex(arr);
    };

    const addName = (e) => {
      let itemName = e.target.getAttribute('data-name');
      console.log(e);

      setScoreArr((scoreArr) => scoreArr.concat(itemName));
    };

    const cards = document.querySelectorAll('.item');

    for (let i = 0; i <= cards.length - 1; i++) {
      cards[i].addEventListener('click', addName);
    }

    const card = document.querySelectorAll('.item');
    card.forEach((item) => {
      item.addEventListener('click', shuffleArray);
    });
  }, []);

  useEffect(() => {
    const updatePoints = (string) => {
      let count = 0;
      scoreArr.forEach((v) => {
        if (v === string) {
          count++;
        }
      });
      if (count === 2) {
        setScoreArr([]);
        setScore(0);
      } else {
        setScore(score + 1);
      }
    };

    for (const card of scoreArr) {
      updatePoints(card);
    }
  }, [scoreArr]);

  useEffect(() => {
    if (score >= bestScore) {
      setBestScore(score);
    }
    if (score === 12) {
      setScore(0);
      setBestScore(0);
    }
  }, [score]);

  return (
    <div className='main'>
      <p className='scoreM'>{score}</p>
      <p className='bestM'>{bestScore}</p>
      <div className='container'>
        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[0]][1]}
              src={arr[arrIndex[0]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[0]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[1]][1]}
              src={arr[arrIndex[1]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[1]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[2]][1]}
              src={arr[arrIndex[2]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[2]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[3]][1]}
              src={arr[arrIndex[3]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[3]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[4]][1]}
              src={arr[arrIndex[4]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[4]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[5]][1]}
              src={arr[arrIndex[5]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[5]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[6]][1]}
              src={arr[arrIndex[6]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[6]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[7]][1]}
              src={arr[arrIndex[7]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[7]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[8]][1]}
              src={arr[arrIndex[8]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[8]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[9]][1]}
              src={arr[arrIndex[9]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[9]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[10]][1]}
              src={arr[arrIndex[10]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[10]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='item-decoration one'></div>
          <div className='img-section'>
            <img
              data-name={arr[arrIndex[11]][1]}
              src={arr[arrIndex[11]][0]}
              alt=''
            />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[11]][1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React, { useState, useEffect } from 'react';

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
  const [arrIndex, setArrIndex] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

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
    const randomizeCards = () => {
      while (arrIndex.length < 12) {
        let num = Math.floor(Math.random() * 12);
        if (arrIndex.indexOf(num) === -1) {
          setArrIndex([...arrIndex, `Entry ${arrIndex.length}`]);
        }
      }
    };

    return () => {
      randomizeCards();
    };
  }, []);

  return (
    <div className='main'>
      <div className='container'>
        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[0]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[0]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[1]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[1]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[2]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[2]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[3]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[3]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[4]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[4]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[5]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[5]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[6]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[6]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[7]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[7]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[8]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[8]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[9]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[9]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[10]][0]} alt='' />
          </div>
          <div className='description'>
            <p>{arr[arrIndex[10]][1]}</p>
          </div>
        </div>

        <div className='item'>
          <div className='img-section'>
            <img src={arr[arrIndex[11]][0]} alt='' />
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

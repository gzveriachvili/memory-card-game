import { useState, useEffect } from 'react';

import './styles/App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    document.addEventListener('click', () => {
      let newScore = document.querySelector('.scoreM').textContent;
      let newBest = document.querySelector('.bestM').textContent;

      setScore(newScore);
      setBestScore(newBest);
    });
  }, [score]);

  return (
    <div>
      <Header score={score} best={bestScore}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

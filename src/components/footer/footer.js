import '../main/main.css';
import '../footer/footer.css';
import { DiGithubAlt } from 'react-icons/di';

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <h4>Made by Gia Zveriachvili</h4>
        <a
          href='https://github.com/gzveriachvili'
          target='_blank'
          rel='noreferrer'
        >
          <DiGithubAlt></DiGithubAlt>
        </a>
      </footer>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss';

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate');

  const nameArray = ['r', 'a', 'c', 'e', ','];
  const hiArray = ['H', 'i', ','];
  const imArray = ['I', "'", 'm ', " "];
  const systemDeveloperArray = [
    ' ',
    'B',
    'a',
    'c',
    'k',
    'e',
    'n',
    'd',
    ' ',
    '/',
    ' ',
    'A',
    'I',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r'
  ];

  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              delay={1}
            />
            <br />
            <span className="intro">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={imArray}
                delay={1 + hiArray.length * 0.1}
              />
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                wrapperClass="nameWrapper"
                letterClass={letterClass}
                strArray={nameArray}
                delay={1 + (hiArray.length + imArray.length) * 0.1}
              />
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={systemDeveloperArray}
              delay={
                1 + (hiArray.length + imArray.length + nameArray.length) * 0.1
              }
            />
          </h1>
          <h2>Backend/AI Engineer</h2>
          <Link to="/contact" className="flat-button">
            {' '}
            CONTACT ME{' '}
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;

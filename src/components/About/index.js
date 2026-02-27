import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setletterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container-about about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am  an AI Engineer with hands-on experience integrating Large Language Models into real applications including prompt engineering, API integration, basic RAG pipelines, and evaluation workflows. I’m comfortable turning AI ideas into stable, testable backend services.
          I focus on practical results: clean integration, predictable behavior, and systems that are easy to extend and maintain. 
          I thrive in dynamic and collaborative environments.
          </p>
          <br />
          <p>
            I'm committed to becoming a versatile asset in the tech industry.
            Excited to build amazing things - let's connect and innovate
            together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default About;

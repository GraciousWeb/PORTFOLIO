import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Skills = () => {
  const skills = [
    'Python',
    'AI Integration',
    'Pytorch',
    'Tensorflow',
    'Java',
    'Vector Databases',
    'Hugging Face',
    'Computer Vision',
    'Object Detection',
    'MLOps',
    'RAG Pipelines',
    'Langchain',
    'LangGraph',
    'Agile methods',
    'Git',
    'SQL',
    'Docker',
    'Kubernetes',
  ];
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container-skills skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            As a dedicated student of the programming arts, I am deeply
            committed to mastering the core principles and applying them in
            practical scenarios. I have a specific interest in AI and ML
            development, which is my chosen field of specialization. My
            proficiency lies predominantly within the Python, AI, and ML domains
          </p>
          <p>
            Despite this focus, I have also amassed experience in backend
            development, further broadening my skill set. 
          </p>
        </div>
        <div className="skills-zone">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;

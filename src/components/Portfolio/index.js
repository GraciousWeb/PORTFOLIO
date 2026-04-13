import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import iso from '../../assets/images/portfolio/iso.png';
import product_review from '../../assets/images/portfolio/product_review.png';
import students from '../../assets/images/portfolio/student-mgt.png';
import fintech from '../../assets/images/portfolio/fintech.png';


const Portfolio = () => {
  const [projects] = useState([
    
    {
      name: 'Compliance RAG Assistant',
      description:
        ' A retrieval-augmented generation (RAG) assistant over ISO compliance documents to deliver accurate, context-aware regulatory guidance with grounded source citations.        ',
      image: iso,
      url: 'https://professionalragassistant-3gjvggpgextpstnjwefrgj.streamlit.app/',
    },
    {
      name: 'Student Management Microservices',
      description:
        'A set of microservices for managing student information, enrollments, and academic records.',
      image: students,
      url: 'https://github.com/GraciousWeb/student-app-microservices.git',
    },
    {
      name: 'Multi-Agent Fintech Squad',
      description:
        'A multi-agent system for financial analysis and decision-making, featuring specialized agents for data retrieval, analysis, and reporting.',
      image: fintech,
      url: 'https://multi-agent-system-six.vercel.app/',
    },
    {
      name: 'Product Review Rating Predictor',
      description:
        'A multi-class rating prediction model using TF-IDF feature engineering and a balanced Linear SVM to classify Amazon reviews into 1 to 5 star ratings.',
      image: product_review,
      url: 'https://appuctreviewratingpredictor-wwvjrnucmq5bguwe7zhern.streamlit.app/',
    },
  
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [beginAnimation, setBeginAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      const animationTimer = setTimeout(() => {
        setBeginAnimation(true);
      }, 100);

      return () => {
        clearTimeout(animationTimer);
      };
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderPortfolio = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project, idx) => {
          return (
            <div
              className={`image-box ${beginAnimation ? 'animated fadeIn' : ''}`}
              style={{
                animationDelay: `${idx * 0.1}s`,
                animationDuration: '1s',
              }}
              key={idx}
            >
              <img
                src={project.image}
                alt={project.name}
                className="portfolio-image"
              />{' '}
              <div className="content">
                <h3 className="title">{project.name}</h3>
                <p className="description">{project.description}</p>
                <button
                  className="btn"
                  onClick={() => window.open(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader type="pacman" className="loader-active" />
      ) : (
        <div className="container-portfolio portfolio-page">
          {renderPortfolio(projects)}
        </div>
      )}
    </>
  );
};

export default Portfolio;

import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import iso from '../../assets/images/portfolio/iso.png';
import robot from '../../assets/images/portfolio/robot.png';

const Portfolio = () => {
  const [projects] = useState([
    {
      name: 'Compliance RAG Assistant',
      description:
        ' A retrieval-augmented generation (RAG) assistant over ISO compliance documents to deliver accurate, context-aware regulatory guidance with grounded source citations.        ',
      image: iso,
      url: 'https://github.com/GraciousWeb/professional_RAG_assistant',
    },
    {
      name: 'Fraud Detection System',
      description:
        'A machine learning system to detect and predict high-risk credit and fraudulent transactions using advanced classification models and feature engineering.',
      image: robot,
      url: 'https://github.com/GraciousWeb/credit-risk-fraud-detection',
    },
    {
      name: 'Project Heart Disease Prediction',
      description:
        ' An end-to-end heart disease prediction pipeline with multiple classification models and MLflow experiment tracking to compare performance and ensure reproducible results.',
      image: robot,
      url: 'https://github.com/GraciousWeb/mlflow',
    },
    {
      name: 'Product Review Rating Predictor',
      description:
        'A multi-class rating prediction model using TF-IDF feature engineering and a balanced Linear SVM to classify Amazon reviews into 1–5 star ratings.',
      image: robot,
      url: 'https://github.com/GraciousWeb/product_review_rating_predictor',
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

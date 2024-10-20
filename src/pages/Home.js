import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTools, faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons'; 

function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <p style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Specialists in AI Development</p>
      
      {/* New line added here */}
      <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '2rem' }}>
        We have expertise implementing machine learning and AI projects end-to-end.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
        <span style={{ backgroundColor: '#f0f0f0', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem' }}>AI/ML</span>
        <span style={{ backgroundColor: '#f0f0f0', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem' }}>GenAI</span>
        <span style={{ backgroundColor: '#f0f0f0', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem' }}>Cloud Computing</span>
        <span style={{ backgroundColor: '#f0f0f0', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem' }}>MLOps / ML Infra</span>
        <span style={{ backgroundColor: '#f0f0f0', padding: '8px 16px', borderRadius: '20px', fontSize: '1rem' }}>Data Science / Engineering</span>
      </div>

      {/* Rest of the component remains unchanged */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', textAlign: 'left', gap: '2rem' }}>
        {/* Left side: Name, title, and social links */}
        <div style={{ textAlign: 'left', flex: '1' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '0.5rem' }}>Daanyaal Chaudry</h3>
          <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '1rem' }}>Founder | AI Engineer</p>

          {/* LinkedIn and GitHub links positioned under the name */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '30px' }}>
            <a href="https://www.linkedin.com/in/daanyaalchaudry" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0077b5', display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}>
              <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px', fontSize: '24px' }} />
              LinkedIn
            </a>
            <a href="https://github.com/daanyaal1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}>
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px', fontSize: '24px' }} />
              GitHub
            </a>
          </div>

          {/* Brief Technical Summary with icons */}
          <div style={{ fontSize: '1rem', lineHeight: '0.5', backgroundColor: '#f9f9f9', padding: '10px 15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <p><FontAwesomeIcon icon={faCode} style={{ marginRight: '8px', color: '#0077b5' }} /><strong>Languages:</strong> Python, SQL, C/C++</p>
            <p><FontAwesomeIcon icon={faTools} style={{ marginRight: '8px', color: '#ff8c00' }} /><strong>Libraries & Tools:</strong> PyTorch, XGBoost, Docker</p>
            <p><FontAwesomeIcon icon={faCloud} style={{ marginRight: '8px', color: '#4caf50' }} /><strong>Cloud & Big Data:</strong> AWS, PySpark, Databricks</p>
            <p><FontAwesomeIcon icon={faDatabase} style={{ marginRight: '8px', color: '#e91e63' }} /><strong>Frameworks & MLOps:</strong> FastAPI, Git, Jenkins, Airflow</p>
          </div>
        </div>

        {/* Right side: Image */}
        <div style={{ flexShrink: '0' }}>
          <img 
            src={require('../images/founder_headshot.png')} 
            alt="Founder of Almond AI" 
            style={{ 
              width: '188px', 
              height: '230px',  // Adjusted height to make the image more oval
              borderRadius: '50% / 50%',  // This makes the image oval by setting different percentages for the axes
              objectFit: 'cover', 
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' 
            }} 
          />
        </div>
      </div>

      {/* Bio section below */}
      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Daanyaal is an AI specialist with deep practical experience building and deploying AI/ML solutions. 
          He holds a master's degree in Mathematics & Physics from the University of Warwick, where his research 
          focused on using deep learning models to detect new physics at the MicroBooNE particle experiment. His work applying AI to physics began in 2018, well before machine learning’s recognition in the 2024 Physics Nobel Prize!
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Professionally, Daanyaal has experience as a Machine Learning Engineer/Data Scientist at top-tier firms including JPMorgan and Arm. At JPMorgan, he developed a proprietary algorithm, Data Lens, to speed up financial transaction matching. At Arm, he worked on AI algorithms to help deliver the next generation of CPUs and GPUs faster and at a bigger scale. More recently, at Alfa Financial Software, he led GenAI innovations, including deploying an LLM-powered chatbot hosted on AWS Cloud.
        </p>
      </div>
    </div>
  );
}

export default Home;

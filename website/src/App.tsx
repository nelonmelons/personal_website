import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background: #080808;
  color: #fff;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(108, 0, 209, 0.08) 0%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
    z-index: 1;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(8, 8, 8, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Clash Display', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, #ff00ff 0%, #00ffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: #ff00ff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff00ff, #00ffff);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavRight = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: var(--text-primary);
    font-size: 1.75rem;
    transition: all 0.2s ease;

    &:hover {
      color: #ff00ff;
      transform: translateY(-2px);
    }
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url('/hero-bg.jpg') center/cover;
    background-attachment: fixed;
    z-index: -1;
  }
`;

const GeometricPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(30deg, rgba(255, 0, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 255, 0.1) 87.5%, rgba(255, 0, 255, 0.1)),
    linear-gradient(150deg, rgba(255, 0, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 255, 0.1) 87.5%, rgba(255, 0, 255, 0.1)),
    linear-gradient(30deg, rgba(255, 0, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 255, 0.1) 87.5%, rgba(255, 0, 255, 0.1)),
    linear-gradient(150deg, rgba(255, 0, 255, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 255, 0.1) 87.5%, rgba(255, 0, 255, 0.1)),
    linear-gradient(60deg, rgba(0, 255, 255, 0.1) 25%, transparent 25.5%, transparent 75%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1)),
    linear-gradient(60deg, rgba(0, 255, 255, 0.1) 25%, transparent 25.5%, transparent 75%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1));
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
  opacity: 0.15;
  z-index: -1;
  animation: patternMove 30s linear infinite;

  @keyframes patternMove {
    0% {
      background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
    }
    100% {
      background-position: 80px 140px, 80px 140px, 120px 210px, 120px 210px, 80px 140px, 120px 210px;
    }
  }
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  h2 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.1;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: -0.3px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-top: 4rem;
  max-width: 1400px;
  margin: 4rem auto 0;
`;

const ProjectCard = styled(motion.a)`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  text-decoration: none;
  background: rgba(108, 0, 209, 0.08);
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(137, 0, 250, 0.2);
  backdrop-filter: blur(10px);
  min-height: 400px;
  
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 0, 255, 0.3);
    background: rgba(108, 0, 209, 0.12);

    .project-image {
      transform: scale(1.05);
    }

    h3 {
      background-position: -100% 0;
    }
  }
  
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-content {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h3 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(
      to right,
      #fff,
      #fff 50%,
      #ff00ff 50%,
      #00ffff
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 0 0;
    transition: background-position 0.5s ease;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1.2;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .tech-stack {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    
    span {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
      background: rgba(137, 0, 250, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      backdrop-filter: blur(5px);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(137, 0, 250, 0.3);
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    
    .project-image {
      height: 400px;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 3rem;
  margin: 4rem auto;
  max-width: 1200px;
`;

const SkillItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  img {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: rgba(10, 0, 20, 0.8);
  border-top: 1px solid rgba(137, 0, 250, 0.3);
  color: #b794f6;
  text-shadow: 0 0 5px rgba(183, 148, 246, 0.5);
`;

const ResumeButton = styled.a`
  padding: 0.75rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 2rem;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.4rem;
  line-height: 1.8;
  font-family: 'Satoshi', sans-serif;

  p {
    margin-bottom: 2rem;
  }

  .interests {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    flex-wrap: wrap;

    .interest {
      background: rgba(137, 0, 250, 0.1);
      padding: 1rem 2rem;
      border-radius: 12px;
      border: 1px solid rgba(137, 0, 250, 0.2);
      transition: all 0.3s ease;
      font-size: 1.2rem;

      &:hover {
        transform: translateY(-3px);
        background: rgba(137, 0, 250, 0.15);
        border-color: rgba(137, 0, 250, 0.3);
      }
    }
  }
`;

function App() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Add loaded class to images after they load
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
      }
    });
  }, []);

  return (
    <Container>
      <Header>
        <Nav>
          <Logo to="/">NS</Logo>
          <NavLinks>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#projects">Projects</NavLink>
            <NavLink to="/#skills">Skills</NavLink>
            <NavRight>
              <SocialIcons>
                <a href="https://github.com/nelonmelons" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/nelson-siu" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:nelson.siu@mail.utoronto.ca">
                  <FaEnvelope />
                </a>
              </SocialIcons>
            </NavRight>
          </NavLinks>
        </Nav>
      </Header>

      <Hero>
        <GeometricPattern />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '6rem',
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255, 0, 255, 0.3)'
          }}
        >
          Nelson Siu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: '1.5rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
          }}
        >
          Engineering Science Student at University of Toronto
        </motion.p>
      </Hero>

      <Section
        id="about"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <AboutContent>
          <p>
            Engineering Science student at the University of Toronto, passionate about the intersection of 
            technology and finance. I love exploring innovative solutions in quantitative trading and financial modeling.
          </p>
          <p>
            When I'm not diving into markets and algorithms, you'll find me expressing creativity through music 
            or staying active with various sports and activities.
          </p>
          <div className="interests">
            <motion.div 
              className="interest"
              whileHover={{ scale: 1.05 }}
            >
              📈 Quantitative Finance
            </motion.div>
            <motion.div 
              className="interest"
              whileHover={{ scale: 1.05 }}
            >
              🎹 Piano
            </motion.div>
            <motion.div 
              className="interest"
              whileHover={{ scale: 1.05 }}
            >
              🎻 Cello
            </motion.div>
            <motion.div 
              className="interest"
              whileHover={{ scale: 1.05 }}
            >
              🎱 Billiards
            </motion.div>
            <motion.div 
              className="interest"
              whileHover={{ scale: 1.05 }}
            >
              💪 Fitness
            </motion.div>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <ResumeButton href="resume.pdf">View Resume</ResumeButton>
          </div>
        </AboutContent>
      </Section>

      <Section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        <ProjectGrid>
          <ProjectCard 
            href="/projects/cognspective"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img className="project-image" src="/cognspective.png" alt="Cognspective" />
            <div className="project-content">
              <h3>Cognspective</h3>
              <p>An AI-powered educational platform that enhances learning by allowing users to teach concepts across different educational levels, with real-time feedback and performance analysis.</p>
              <div className="tech-stack">
                <span>Python</span>
                <span>AI/ML</span>
                <span>OpenCV</span>
                <span>Flask</span>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard 
            href="/projects/lockin"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img className="project-image" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/713/731/datas/original.png" alt="LOCKIN!" />
            <div className="project-content">
              <h3>LOCKIN!</h3>
              <p>An AI-powered study platform that transforms studying into a gamified experience. Built at DeltaHacks XI.</p>
              <div className="tech-stack">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>Arduino</span>
                <span>Streamlit</span>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard 
            href="/projects/stock-ml"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img className="project-image" src="stockmlpic.png" alt="Stock Volatility ML Model" />
            <div className="project-content">
              <h3>Stock Volatility ML Model</h3>
              <p>Advanced machine learning model for forecasting market volatility using LSTM networks and real-time data processing.</p>
              <div className="tech-stack">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard 
            href="/projects/finance-dashboard"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img className="project-image" src="https://cdn.dribbble.com/userupload/15102201/file/original-027852f29042a044c4be258a40f12d1e.png?resize=1504x1128&vertical=center" alt="Finance Dashboard" />
            <div className="project-content">
              <h3>Finance Dashboard</h3>
              <p>Real-time financial analytics platform with interactive visualizations and automated reporting capabilities.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>D3.js</span>
                <span>Node.js</span>
              </div>
            </div>
          </ProjectCard>
        </ProjectGrid>
      </Section>

      <Section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        <SkillsGrid>
          {[
            { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'C/C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Flask', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
            { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
          ].map((skill, index) => (
            <SkillItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </SkillItem>
          ))}
        </SkillsGrid>
      </Section>
    </Container>
  );
}

export default App; 
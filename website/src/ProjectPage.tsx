import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ProjectContainer = styled.div`
  min-height: 100vh;
  padding: 120px 48px 64px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 120px 24px 64px;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }

  &::before {
    content: '←';
    margin-right: 8px;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 4rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #FF4D4D, #F9CB28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  .meta {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 600px;
  border-radius: 12px;
  margin-bottom: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 5;
  display: block;
  opacity: 1 !important;
  mix-blend-mode: normal;
  filter: brightness(1) contrast(1);
  object-fit: contain;
  object-position: center;
  background-color: transparent;
  pointer-events: auto;
  transform: scale(0.8);
  transform-origin: center center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(0.85);
  }
`;

const ProjectContent = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin: 3rem 0 1.5rem;
    color: #fff;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  svg {
    margin-right: 8px;
  }
`;

interface ProjectPageProps {
  title: string;
  date: string;
  tech: string[];
  image: string;
  description: string;
  features: string[];
  repoUrl?: string;
  demoUrl?: string;
  additionalContent?: React.ReactNode;
}

export function ProjectPage({
  title,
  date,
  tech,
  image,
  description,
  features,
  repoUrl,
  demoUrl,
  additionalContent
}: ProjectPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectContainer>
        <BackButton to="/#projects">Back to Projects</BackButton>
        <ProjectHeader>
          <h1>{title}</h1>
          <div className="meta">
            <span>{date}</span>
            <span>{tech.join(' • ')}</span>
          </div>
        </ProjectHeader>

        <ProjectImage src={image} alt={title} />

        <ProjectContent>
          <p>{description}</p>

          <h2>Key Features</h2>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {additionalContent}

          <ProjectLinks>
            {repoUrl && (
              <ProjectLink href={repoUrl} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                View on GitHub
              </ProjectLink>
            )}
            {demoUrl && (
              <ProjectLink href={demoUrl} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectContent>
      </ProjectContainer>
    </motion.div>
  );
} 
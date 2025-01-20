import { ProjectPage } from '../ProjectPage';

export function Cognspective() {
  return (
    <ProjectPage
      title="Cognspective"
      date="January 2024"
      tech={['Python', 'AI/ML', 'OpenCV', 'Flask', 'React']}
      image="/cognspective.png"
      description="Learning new knowledge brings new perspectives, and looking through new perspectives brings new knowledge. Cognspective is an online platform that tests your knowledge by allowing you to explain a concept to different educational levels, ranging from elementary school to university level. The platform uses advanced facial and voice recognition AI to assess teaching effectiveness and provide real-time feedback."
      features={[
        'Real-time facial expression and voice analysis',
        'Multi-level educational assessment system',
        'Live feedback during teaching sessions',
        'Personalized performance evaluation',
        'Comprehensive teaching analytics',
        'Progressive difficulty scaling',
        'Student engagement tracking',
        'Detailed performance breakdown'
      ]}
      repoUrl="https://github.com/oHqrizon/UofT-Hacks-2025"
      demoUrl="https://youtu.be/jYO05yI9Ijw"
    />
  );
} 
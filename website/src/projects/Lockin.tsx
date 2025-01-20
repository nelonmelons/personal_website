import { ProjectPage } from '../ProjectPage';

export function Lockin() {
  return (
    <ProjectPage
      title="LOCKIN!"
      date="January 2024"
      tech={['Python', 'TensorFlow', 'Arduino', 'Streamlit', 'OpenCV']}
      image="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/713/731/datas/original.png"
      description="LOCKIN! is an innovative AI-powered study platform that transforms traditional studying into an engaging, gamified experience. Built during DeltaHacks XI, this project combines hardware and software to create a unique learning environment that helps students maintain focus and improve their study habits."
      features={[
        'Real-time focus tracking using computer vision and machine learning',
        'Arduino-based hardware integration for physical feedback',
        'Gamification elements to encourage productive study sessions',
        'Interactive study timer with focus metrics',
        'Personalized study analytics and progress tracking',
        'Streamlit-based web interface for easy interaction',
        'Custom reward system based on focus performance',
        'Integration with popular study materials and resources'
      ]}
      repoUrl="https://github.com/nelonmelons/lockin"
      demoUrl="https://devpost.com/software/lockin-grdkp3"
    />
  );
} 
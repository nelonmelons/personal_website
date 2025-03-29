import { ProjectPage } from '../ProjectPage';
import styled from '@emotion/styled';

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin: 3rem 0;
  position: relative;
  z-index: 5;
  mix-blend-mode: normal;
  isolation: isolate;
  background: transparent;
  
  img {
    width: 100%;
    height: auto;
    min-height: 400px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
    position: relative;
    z-index: 5;
    display: block;
    opacity: 1 !important;
    mix-blend-mode: normal;
    filter: brightness(1) contrast(1);
    object-fit: cover;
    background-color: transparent;
    pointer-events: auto;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const GallerySection = styled.div`
  position: relative;
  z-index: 5;
  mix-blend-mode: normal;
  isolation: isolate;
  background: transparent;
  pointer-events: auto;
  
  h2 {
    position: relative;
    z-index: 5;
    color: #fff;
    margin: 4rem 0 2rem;
    font-size: 2rem;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  min-height: 500px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 2rem 0 4rem;
  object-fit: cover;
  display: block;
  opacity: 1 !important;
  mix-blend-mode: normal;
  filter: brightness(1) contrast(1);
  background-color: transparent;
  position: relative;
  z-index: 5;
  pointer-events: auto;
`;

export function MemoryMake() {
  const additionalContent = (
    <>
      <FeatureImage 
        src="/mm3.jpg" 
        alt="MemoryMake Style Transfer Showcase" 
        loading="lazy"
      />
      <GallerySection>
        <h2>More Screenshots</h2>
        <ImageGallery>
          <img 
            src="/mm2.jpg" 
            alt="MemoryMake 3D View" 
            loading="lazy"
          />
          <img 
            src="/mm4.jpg" 
            alt="MemoryMake Interface" 
            loading="lazy"
          />
        </ImageGallery>
      </GallerySection>
    </>
  );

  return (
    <ProjectPage
      title="MemoryMake"
      date="February 2024"
      tech={['React', 'Python', 'FastAPI', 'Three.js', 'MiDaS', 'Open3D', 'Neural Style Transfer', 'Stable Diffusion']}
      image="/mm1.jpg"
      description="Transform your photos and text prompts into immersive 3D environments. Our platform revolutionizes how we experience memories by converting panorama images into interactive 3D models viewable in a 180-degree environment. Using advanced computer vision techniques like MiDaS depth estimation and Open3D for mesh generation, we create detailed 3D scenes from single images. The platform also features artistic style customization through Neural Style Transfer, allowing users to reimagine their memories in various artistic styles from photorealistic to impressionistic. With text-to-3D generation powered by Stable Diffusion, users can even create entirely new environments from textual descriptions."
      features={[
        'Custom 3D model generation pipeline using MiDaS depth estimation and Open3D',
        'Interactive 180-degree view exploration powered by Three.js',
        'Neural Style Transfer for artistic style customization (Photorealistic, Monet, Van Gogh)',
        'Text-to-3D generation using Stable Diffusion for creating new environments',
        'Point cloud to cylindrical coordinate transformation for seamless viewing',
        'Real-time 3D model rendering with optimized performance',
        'User-friendly interface for easy photo uploads and style selection',
        'Efficient mesh generation and optimization for smooth navigation'
      ]}
      repoUrl="https://github.com/nelonmelons/memorymake"
      demoUrl="https://devpost.com/software/memorymake"
      additionalContent={additionalContent}
    />
  );
} 
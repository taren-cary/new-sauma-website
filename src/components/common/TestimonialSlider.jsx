import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SliderContainer = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const BackgroundSVG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SliderHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 0rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const SliderContent = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const TestimonialSlide = styled(motion.div)`
  text-align: center;
  color: #000;
  margin: 40px auto;
  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  width: 100%;
  border-radius: 15px;
  padding: 32px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    margin-top: -1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const SliderDot = styled.button`
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#6C63FF' : '#ddd'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.active ? '#6C63FF' : '#bbb'};
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #6C63FF;
    color: white;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
`;

const PrevArrow = styled(SliderArrow)`
  left: -20px;
  
  @media (max-width: 768px) {
    left: -10px;
  }
`;

const NextArrow = styled(SliderArrow)`
  right: -20px;
  
  @media (max-width: 768px) {
    right: -10px;
  }
`;

const TestimonialSlider = ({ testimonials = [
  {
    text: "Mercury has completely transformed our dispatch process. We're booking 30% more jobs while we sleep with the same ad spend!",
    author: "Brittany Spencer",
    title: "Marketing Director, ForgeCommand.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    text: "With Mercury, our clients can't even tell they're talking to an AI. Our jobs are booked 24/7 and my team is freed up to focus on high-value tasks and providing great service.",
    author: "Michael Chen",
    title: "CEO, Aqua Pure Pool Cleaning",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    text: "We've cut our lead response time from hours to seconds. Mercury engages with leads 24/7 and has increased our conversion rate by 45%. It's actually pretty creepy how well it works.",
    author: "Jessica Williams",
    title: "Real Estate Agent, Dynasty Real Estate",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);
  
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  
  useEffect(() => {
    resetInterval();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  const handleNext = () => {
    nextSlide();
    resetInterval();
  };
  
  const handlePrev = () => {
    prevSlide();
    resetInterval();
  };
  
  const handleDotClick = (index) => {
    goToSlide(index);
    resetInterval();
  };
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };
  
  return (
    <SliderContainer>
      <BackgroundSVG>
        <img src="/assets/hero-background1.svg" alt="" aria-hidden="true" />
      </BackgroundSVG>
      
      <SliderContent>
        <SliderHeading>Client Testimonials</SliderHeading>
        
        <AnimatePresence mode="wait" custom={direction}>
          <TestimonialSlide
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <TestimonialText>"{testimonials[currentIndex].text}"</TestimonialText>
            
            <TestimonialAuthor>
              <AuthorImage 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/60";
                }}
              />
              <AuthorInfo>
                <AuthorName>{testimonials[currentIndex].author}</AuthorName>
                <AuthorTitle>{testimonials[currentIndex].title}</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialSlide>
        </AnimatePresence>
        
        <SliderControls>
          {testimonials.map((_, index) => (
            <SliderDot
              key={index}
              active={index === currentIndex}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </SliderControls>
      </SliderContent>
    </SliderContainer>
  );
};

export default TestimonialSlider; 
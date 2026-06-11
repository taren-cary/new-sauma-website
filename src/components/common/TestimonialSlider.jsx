import styled from 'styled-components';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    text: "Mercury has completely transformed our dispatch process. We're booking 30% more jobs while we sleep with the same ad spend!",
    author: "Pearson Smith",
    title: "Marketing Director, ForgeCommand.",
    image: "/assets/testimonials/person1.svg"
  },
  {
    text: "With Mercury, our clients can't even tell they're talking to an AI. Our jobs are booked 24/7 and my team is freed up to focus on high-value tasks and providing great service.",
    author: "Micah Mentis",
    title: "Director of Operations, Nu Pathway Health & Wellness",
    image: "/assets/testimonials/person2.svg"
  }
];

const TestimonialSlider = () => {
  return (
    <Grid>
      {TESTIMONIALS.map((t, i) => (
        <Card
          key={t.author}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <QuoteMark>"</QuoteMark>
          <QuoteText>{t.text}</QuoteText>
          <Divider />
          <Author>
            <Avatar src={t.image} alt={t.author} />
            <AuthorInfo>
              <AuthorName>{t.author}</AuthorName>
              <AuthorTitle>{t.title}</AuthorTitle>
            </AuthorInfo>
          </Author>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const QuoteMark = styled.div`
  font-size: 4rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.12);
  font-family: Georgia, serif;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
`;

const QuoteText = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(250, 250, 250, 0.8);
  flex: 1;
  text-align: left;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 1.5rem 0;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  text-align: left;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #fafafa;
`;

const AuthorTitle = styled.div`
  font-size: 0.82rem;
  color: rgba(250, 250, 250, 0.45);
  margin-top: 2px;
`;

export default TestimonialSlider;

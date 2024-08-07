import React from 'react';
import { Text, Stack } from '@fluentui/react';
import Carousel from 'react-multi-carousel';
import DreamCard from './DreamCard';
import 'react-multi-carousel/lib/styles.css';
import './DreamCarousel.css';

interface DreamCarouselProps {
  title: string;
  dreams: { key: string; title: string; dream: string; analysis: string; imageUrl: string; comments: string[]; upvotes: number; }[];
}

const DreamCarousel: React.FC<DreamCarouselProps> = ({ title, dreams }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2.4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.4,
    },
  };

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <Text variant="large">{title}</Text>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={false}
        arrows={false}
        itemClass="carousel-item-padding-40-px"
      >
        {dreams.map(dream => (
          <DreamCard key={dream.key} dream={dream} />
        ))}
      </Carousel>
    </Stack>
  );
};

export default DreamCarousel;

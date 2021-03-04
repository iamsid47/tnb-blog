import React, {FC} from 'react';
import Article from './Article';
import Slider from './Slider';
import './RecentlyPosted.scss';

interface ArticlesProps {
  articles: any[];
}
const sliderProps = {
  maxVisibleSlides: 3,
  pageTransition: 250,
  slideMargin: 15,
  zoomFactor: 1,
};

const RecentlyPosted: FC<ArticlesProps> = ({articles}) => {
  return (
    <div className="RecentlyPosted">
      <div className="RecentlyPosted__content-container">
        <h3 className="RecentlyPosted__header">Recently Posted</h3>
        <div className="RecentlyPosted__article">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...sliderProps}>
            {articles.map((article) => (
              <Article key={article} article={article} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPosted;

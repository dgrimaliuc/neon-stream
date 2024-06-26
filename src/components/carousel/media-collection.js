import './carousel.css';

import { useEffect, useReducer } from 'react';
import { popularSeries } from '../../services/content';
import { EpisodeCard } from '../episode-card';
import Carousel from './carousel';

function reducer(state, action) {
  switch (action.type) {
    case 'set_all':
      return { ...state, ...action.payload };
    default:
      throw new Error('Invalid action type: ' + action.type);
  }
}

export default function MediaCollection({ type }) {
  const [state, dispatch] = useReducer(reducer, { content: [], title: '' });

  useEffect(() => {
    const fetcher = async () => {
      switch (type) {
        case 'continue_watching':
          const title = 'Continue Watching';
          const content = await popularSeries();
          dispatch({ type: 'set_all', payload: { title, content } });
          break;
        default:
          break;
      }
    };
    fetcher();
  }, [type]);

  return (
    <Carousel title={state.title}>
      {state.content.map((card, i) => {
        return (
          <EpisodeCard
            key={i}
            showProgress={true}
            showIcon={true}
            title={card.name}
            backdrop={card.backdrop_path}
            date={card.first_air_date || card.release_date}
            to={`/${card.media_type}/${card.id}`}
          />
        );
      })}
    </Carousel>
  );
}

import './single-card.css';
import img from '../../assets/One Piece/One Piece Tall.jpg';

export default function SingleCard() {
  return (
    <div className='single-card-wrapper'>
      <div className='single-card'>
        <div className='single-card-container'>
          <div className='blur_back single-card-image'></div>
          <div className='single-card-info'>
            <div className='info-image-line' href='#'>
              <picture>
                <img
                  className='single-card-poster'
                  src='https://image.tmdb.org/t/p/w1280/A7EByudX0eOzlkQ2FIbogzyazm2.jpg'
                  alt='One Piece Square'
                />
              </picture>
              <div className='single-card-info-column'>
                <h2 className='single-card-title'>One Piece</h2>
                <div>
                  <span className='year'>1997,</span>
                  <span>
                    <span>
                      4.9 <span className='icon-star-small'></span> (286.9K)
                    </span>
                  </span>
                </div>
                <div className='tags'>
                  <span className='tag single-card-tag'>Action</span>
                  <span className='tag single-card-tag'>Adventure</span>
                  <span className='tag single-card-tag'>Comedy</span>
                  <span className='tag single-card-tag'>Fantasy</span>
                  <span className='tag single-card-tag'>Shounen</span>
                  <span className='tag single-card-tag'>Super Power</span>
                </div>
              </div>
            </div>

            <div className='single-card-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
              sed et, reiciendis enim dolore ab quae quis soluta animi mollitia,
              ipsa eos laborum. Aliquam placeat error praesentium laborum
              necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </div>
            <div className='actions single-card-actions'>
              <div className='watch-now-wrapper'>
                <button className='watch-now-btn'>
                  <span className='fa-play'></span>
                  Watch Now
                </button>
              </div>
              <div>
                <button className='wl-button'>
                  <span className='fa-bookmark'></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
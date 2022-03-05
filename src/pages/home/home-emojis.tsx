import React from 'react';
import emoSad from '../../assets/images/emo-sad.png';
import emoHappy from '../../assets/images/emo-happy.png';

function HomeEmojis() {
  return (
    <div className="home__emojis">
      <div className="container">
        <h4 className="title">You should not let obstecles stop to change your future!</h4>
        <div className="home__emojis-grid">
          <div>
            <img src={emoSad} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div>
            <img src={emoHappy} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div>
            <img src={emoSad} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div>
            <img src={emoHappy} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div>
            <img src={emoSad} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
          <div>
            <img src={emoHappy} alt="You should not let obstecles stop to change your future!"/>
            <p>But I don’t have It background or computert skills</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEmojis;
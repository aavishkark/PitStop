import React from 'react';
import './previousracebottom.css';
const PreviousRaceBottom = () => {
  return (
    <div className="previous-race-bottom">
        <p className="previous-race-stories-title">Stories</p>
        <div className="previous-race-stories">
            <div className="previous-race-stories-left">
                <div className="story-card">
                <p>Russell's Singapore GP Comeback</p>
                <img src="/Images/russell.jpg" alt="Russell"/>
                <button className="read-more-btn"><a href='https://formulanerds.com/explainer/f1/george-russell-celebrates-f1-comeback-following-singapores-missed-opportunity/' target="_blank">Read More</a></button>
                </div>
            </div>
            <div className="previous-race-stories-right">
                <div className="story-card">
                <p>Mclaren wins WCC</p>
                <img src="/Images/mclaren.jpg" alt="Mclaren"/>
                <button className="read-more-btn"><a href='https://www.mclaren.com/racing/heritage/formula-1/2025-championship/' target="_blank">Read More</a></button>
                </div>
                <div className="story-card">
                <p>Piastri-Norris collide, WDC race intensifies</p>
                <img src="/Images/norris-piastri-collision.jpg" alt="Collision"/>
                <button className="read-more-btn"><a href='https://racingnews365.com/oscar-piastri-fumes-over-team-radio-after-lando-norris-collision' target="_blank">Read More</a></button>
                </div>
            </div>
        </div>

        <div className="previous-race-videos">
            <p className="previous-race-videos-title">Videos</p>
            <div className="video-cards-container">
                    <div className="video-card">
                        <p>Qualifying Highlights</p>
                        <img src="/Images/qualifying.jpg" alt=">Qualifying Highlights"/>
                        <button className="watch-btn"><a href='https://www.youtube.com/watch?v=XZhXFbFCOu4' target="_blank">Watch</a></button>
                    </div>
                    <div className="video-card">
                        <p>Race Highlights</p>
                        <img src="/Images/highlights.jpg" alt="Race Highlights"/>
                        <button className="watch-btn"><a href='https://www.youtube.com/watch?v=Sq02V0i0_BE' target="_blank">Watch</a></button>
                    </div>
                    <div className="video-card">
                        <p>Piastri Norris Collision</p>
                        <img src="/Images/norris-piastri-collision.jpg" alt="Piastri Norris Collision"/>
                        <button className="watch-btn"><a href='https://www.youtube.com/shorts/tzzPzEl_yQE' target="_blank">Watch</a></button>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
  );
};

export default PreviousRaceBottom;
import React from 'react';
import HomeBannerSlider from '../../common/HomeBannerSlider/HomeBannerSlider';

import './HomeBanner.scss';

function HomeBanner(props) {
  return (
    <section className="home_banner">
      <div className="home_banner_container">
        <HomeBannerSlider />
      </div>
    </section>
  );
}

export default HomeBanner;

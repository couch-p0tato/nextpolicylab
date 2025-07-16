import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from '../assets/r5newxZIZd.lottie'

const LoadAnim = () => {
  return (
    <DotLottieReact
      src={animationData}
      loop
      autoplay
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default LoadAnim;

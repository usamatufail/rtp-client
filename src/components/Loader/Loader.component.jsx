import Lottie from 'react-lottie';
import animation from 'animations/loading.json';
import './Loader.styles.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Loader = () => (
  <div className="loader-container">
    <Lottie
      className="loader"
      options={defaultOptions}
      height={150}
      width={150}
    />
  </div>
);

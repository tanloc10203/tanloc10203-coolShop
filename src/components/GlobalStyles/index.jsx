import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyles.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-image-lightbox/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;

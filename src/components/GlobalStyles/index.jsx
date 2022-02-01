import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./GlobalStyles.scss";
import 'react-toastify/dist/ReactToastify.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired
}

export default GlobalStyles


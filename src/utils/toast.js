import { faBell, faCheck, faExclamationTriangle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const toastCustom = {
  success(message) {
    return toast.success(message, {
      icon: <FontAwesomeIcon className="text-success" icon={faCheck} />
    });
  },
  warning(message) {
    return toast.warning(message, {
      icon: <FontAwesomeIcon className="text-warning" icon={faStar} />
    });
  },
  error(message) {
    return toast.error(message, {
      icon: <FontAwesomeIcon className="text-danger" icon={faExclamationTriangle} />
    });
  },
  info(message) {
    return toast.info(message, {
      icon: <FontAwesomeIcon className="text-primary" icon={faBell} />
    });
  }
}

export default toastCustom;

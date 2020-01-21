/* Component criado a partir da biblioteca react-toastify
para para nao ser preciso chamar a biblioteca e passar todas as suas configurações por parametro
a cada vez que usar*/

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notifications(type, message) {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      break;
    case "info":
      toast.info(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      break;
    case "warning":
      toast.warning(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      break; 

    case "default":
      toast(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      break;

    default:
      break;
  }
}

export default Notifications;

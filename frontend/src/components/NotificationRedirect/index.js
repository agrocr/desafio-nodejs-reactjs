/* Component criado a partir da biblioteca react-toastify
para fazer redirecionamento da pagina em questão ao fechar a notificação*/

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function NotificationRedirect(type, message, path) {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 2100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => (window.location.href=path)
      });
      break;
    case "info":
      toast.info(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => (window.location.href=path)
      });
      break;
    case "warning":
      toast.warning(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => (window.location.href=path)
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => (window.location.href=path)
      });
      break; 

    case "default":
      toast(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => (window.location.href=path)
      });
      break;

    default:
      break;
  }
}

export default NotificationRedirect;

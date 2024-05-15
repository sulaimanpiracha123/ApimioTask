import {toast} from "react-toastify"

export const successToast = (message, autoClose = 3000) => {
    return toast.success(message, {
      position: "top-center",
      autoClose: autoClose,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {width: 400},
    })
  }
  export const errorToast = (message, autoClose = 3000) => {
    return toast.error(message, {
      position: "top-center",
      autoClose: autoClose,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {width: 400},
    })
  }
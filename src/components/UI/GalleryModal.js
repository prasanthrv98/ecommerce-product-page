import classes from "./GalleryModal.module.css";
import ReactDOM from "react-dom";
import CloseIcon from "../UI/Icons/CloseIcon";
import LeftArrIcon from "../UI/Icons/LeftArrIcon";
import RightArrIcon from "../UI/Icons/RightArrIcon";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const GalleryModal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onModalClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <CloseIcon
            classes={classes["close-icon"]}
            onClose={props.onModalClose}
          />
          <LeftArrIcon
            classes={`${classes["arrow-icon"]} ${classes["left-icon"]}`}
            onLeftClick={props.onLeftClick}
          />
          {props.children}
          <RightArrIcon
            classes={`${classes["arrow-icon"]} ${classes["right-icon"]}`}
            onRightClick={props.onRightClick}
          />
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default GalleryModal;

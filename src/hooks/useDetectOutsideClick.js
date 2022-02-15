import { useState, useEffect, useRef } from "react";

const useDetectOutsideClick = (initalState) => {
  const triggerRef = useRef(null); //header cart btn
  const nodeRef = useRef(null); // the cart itself

  const [showCart, setShowCart] = useState(initalState);

  useEffect(() => {
    const outsideClickHandler = (event) => {
      //if click is on trigger element, toggle cart
      if (triggerRef.current && triggerRef.current.contains(event.target)) {
        return setShowCart(!showCart);
      }

      // if click is outside cart element , close the cart / setShowCart -> false
      if (nodeRef.current && !nodeRef.current.contains(event.target)) {
        return setShowCart(false);
      }
    };

    document.addEventListener("click", outsideClickHandler, true);

    return () => {
      document.removeEventListener("click", outsideClickHandler, true);
    };
  });

  return {
    showCart,
    setShowCart,
    nodeRef,
    triggerRef,
  };
};

export default useDetectOutsideClick;

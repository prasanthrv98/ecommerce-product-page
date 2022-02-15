import React, { useState, useEffect } from "react";
import classes from "./app.module.css";

import CartProvider from "./store/CartProvider";
import Header from "./components/Layouts/Header";
import ProductInfo from "./components/Product/ProductInfo";
import ProductGallery from "./components/Product/ProductGallery";
import GalleryModal from "./components/UI/GalleryModal";

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [leftBtnClicked, setLeftBtnClicked] = useState(false);
  const [rightBtnClicked, setRightBtnClicked] = useState(false);

  const previewToggleHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  const leftClickHandler = () => {
    setLeftBtnClicked(true);
  };

  const rightClickHandler = () => {
    setRightBtnClicked(true);
  };

  // resetting the states of right and left arrow btn's of gallery
  useEffect(() => {
    setLeftBtnClicked(false);
    setRightBtnClicked(false);
  }, [leftBtnClicked, rightBtnClicked]);

  return (
    <CartProvider>
      {showModal && (
        <GalleryModal
          onModalClose={previewToggleHandler}
          onLeftClick={leftClickHandler}
          onRightClick={rightClickHandler}
        >
          <ProductGallery
            onLeftClick={leftBtnClicked}
            onRightClick={rightBtnClicked}
          />
        </GalleryModal>
      )}
      <Header />
      <main>
        <div className={classes.product}>
          <ProductGallery onPreviewClick={previewToggleHandler} />
          <ProductInfo />
        </div>
      </main>
    </CartProvider>
  );
};
export default App;

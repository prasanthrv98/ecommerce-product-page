import React, { useState, useEffect } from "react";
import MainPreview from "./Gallery/MainPreview";
import SubPreview from "./Gallery/SubPreview";
import classes from "./ProductGallery.module.css";

const ProductGallery = (props) => {
  const [showPreview, setShowPreview] = useState("preview_1");

  const clickHandler = (event) => {
    const subPreview = event.target.dataset.preview;
    console.log(event.target.dataset.preview);
    setShowPreview(subPreview);
  };

  useEffect(() => {
    const previews = ["preview_1", "preview_2", "preview_3", "preview_4"];
    const currentPreview = showPreview;

    const currentPreviewIndex = previews.findIndex(
      (ele) => ele === currentPreview
    );

    if (props.onLeftClick) {
      const previousPreview = previews[currentPreviewIndex - 1];
      if (previousPreview) setShowPreview(previousPreview);
      else setShowPreview("preview_1");
    }

    if (props.onRightClick) {
      const nextPreview = previews[currentPreviewIndex + 1];
      if (nextPreview) setShowPreview(nextPreview);
      else setShowPreview("preview_4");
    }
  }, [props.onLeftClick, props.onRightClick]);

  return (
    <div className={classes.gallery}>
      <MainPreview preview={showPreview} onClick={props.onPreviewClick} />
      <SubPreview onClick={clickHandler} currentPreview={showPreview} />
    </div>
  );
};

export default ProductGallery;

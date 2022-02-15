import classes from "./MainPreview.module.css";
import preview_1 from "../../../assets/image-product-1.jpg";
import preview_2 from "../../../assets/image-product-2.jpg";
import preview_3 from "../../../assets/image-product-3.jpg";
import preview_4 from "../../../assets/image-product-4.jpg";

const MainPreview = (props) => {
  //Change the preview image in mainpreview component based on the click on subpreview component
  const previewImg = (preview) => {
    if (preview === "preview_1") return preview_1;
    else if (preview === "preview_2") return preview_2;
    else if (preview === "preview_3") return preview_3;
    else return preview_4;
  };

  return (
    <div className={classes["gal-box"]} onClick={props.onClick}>
      <img src={previewImg(props.preview)} alt="product preview" />
    </div>
  );
};

export default MainPreview;

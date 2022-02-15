import classes from "./SubPreview.module.css";
import thumbnail_1 from "../../../assets/image-product-1-thumbnail.jpg";
import thumbnail_2 from "../../../assets/image-product-2-thumbnail.jpg";
import thumbnail_3 from "../../../assets/image-product-3-thumbnail.jpg";
import thumbnail_4 from "../../../assets/image-product-4-thumbnail.jpg";

const SubPreview = (props) => {
  // console.log(props.currentPreview === "preview_1" ? "sub-box-preview" : "");
  const subPrev1 =
    props.currentPreview === "preview_1" ? `${classes["sub-box-preview"]}` : "";
  const subPrev2 =
    props.currentPreview === "preview_2" ? `${classes["sub-box-preview"]}` : "";
  const subPrev3 =
    props.currentPreview === "preview_3" ? `${classes["sub-box-preview"]}` : "";
  const subPrev4 =
    props.currentPreview === "preview_4" ? `${classes["sub-box-preview"]}` : "";

  return (
    <div className={classes["sub-preview"]}>
      <div className={`${classes["sub-box"]} ${subPrev1}`}>
        <div
          className={classes["sub-hover"]}
          onClick={props.onClick}
          data-preview="preview_1"
        ></div>
        <img src={thumbnail_1} alt="product thumbnail" />
      </div>
      <div className={`${classes["sub-box"]} ${subPrev2}`}>
        <div
          className={classes["sub-hover"]}
          onClick={props.onClick}
          data-preview="preview_2"
        ></div>
        <img src={thumbnail_2} alt="product thumbnail" />
      </div>
      <div className={`${classes["sub-box"]} ${subPrev3}`}>
        <div
          className={classes["sub-hover"]}
          onClick={props.onClick}
          data-preview="preview_3"
        ></div>
        <img src={thumbnail_3} alt="product thumbnail" />
      </div>
      <div className={`${classes["sub-box"]} ${subPrev4}`}>
        <div
          className={classes["sub-hover"]}
          onClick={props.onClick}
          data-preview="preview_4"
        ></div>
        <img src={thumbnail_4} alt="product thumbnail" />
      </div>
    </div>
  );
};

export default SubPreview;

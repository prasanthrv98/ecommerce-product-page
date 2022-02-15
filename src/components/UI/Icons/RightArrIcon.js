const RightArrIcon = (props) => {
  return (
    <div className={props.classes} onClick={props.onRightClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};
export default RightArrIcon;

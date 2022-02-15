const LeftArrIcon = (props) => {
  return (
    <div className={props.classes} onClick={props.onLeftClick}>
      <i className="fas fa-chevron-left left-icon"></i>
    </div>
  );
};
export default LeftArrIcon;

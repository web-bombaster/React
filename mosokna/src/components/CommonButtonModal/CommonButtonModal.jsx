import styles from "./CommonButtonModal.module.scss";

const CommonButtonModal = ({
  text,
  variant = "red",
  icon = false,
  handler = {},
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    // handler();
  };
  return (
    <button
      className={`${styles.button} ${
        variant === "white" ? styles.button_white : null
      }`}
      onClick={handleClick}
    >
      {icon ? icon : null}
      <h6>{text}</h6>
    </button>
  );
};

export default CommonButtonModal;

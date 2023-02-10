import "./Button.css";

const Button = ({ className, value, onClick }) => {
    return (
        <button className={className} onClick={() => onClick(value)}>
        {value}
        </button>
    );
    };

export default Button;
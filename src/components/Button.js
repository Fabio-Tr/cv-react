import PropTypes from 'prop-types';

function Button(props) {
    const {handleClick, text} = props;
    return (
        <button onClick={handleClick}>{text}</button>
    )
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    text: "CLICK ME"
};

export default Button;
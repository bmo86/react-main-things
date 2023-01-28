import PropTypes from "prop-types"

export function Button({text, name = "Some usr"}) {
    return <button onClick={() => {
        console.log(text);
    }}>
        {text} 
    </button>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}




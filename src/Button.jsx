import PropTypes from "prop-types"

export function Button({text, name = "Some usr"}) {
    return <button>
        {text} = {name}
    </button>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}




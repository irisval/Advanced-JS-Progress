import React from 'react'

const ButtonOne = ({increment, onClickFunction}) => {
    const handleClick = () => {
        onClickFunction(increment);
    }
    return <button onClick={handleClick}>+{increment}</button>
}

export default ButtonOne
const Button = props => {
    return (
        <>
            <button className="quizzical-button" onClick={props.onClick}>
                {props.singleButton}
            </button>
        </>
    )
}

export default Button 

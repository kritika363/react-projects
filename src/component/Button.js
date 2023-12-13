const Button = ({isOutline, icon, text, ...rest}) => {
    return(
        <button {...rest} className="styles ? outlinebtn">
            
        {icon}
       {text}
        </button>
    ) 
}
export default Button;
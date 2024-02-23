function Button({color, text, fontSize = '20px', handleClick, buttonMessage = 'Button Clicked'}) {
    const buttonStyle = {
        backgroundColor: color,
        fontSize: fontSize
    }
    return <button onClick={() => handleClick(buttonMessage)} style={buttonStyle}>{text}</button>
}

export default function Click(){
    const handleClick = (text) => {
        alert(text)
    }
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <Button handleClick={handleClick} color="red" text="Red Button" buttonMessage="Red Button Clicked"/>
            <Button handleClick={handleClick} color="green" text="Green Button" buttonMessage="Green Button Clicked"/>
            <Button handleClick={handleClick} color="blue" text="Blue Button"/>
        </div>
    )
}
function Button({color, text, fontSize = '20px'}) {
    const buttonStyle = {
        backgroundColor: color,
        fontSize: fontSize
    }
    return <button style={buttonStyle}>{text}</button>
}

export default function Props2(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Button color="red" text="Red Button"/>
            <Button color="green" text="Green Button" fontSize="30px"/>
            <Button color="blue" text="Blue Button" fontSize="40px"/>
        </div>
    )
}
function List(props){
    return(
        <ul>
            {
                props.animals.map(animal => animal.startsWith('L') && <li key={animal}>{animal}</li>)
            }
        </ul>
    )
}

function Conditional(){
    const animals = ['Lion', 'Tiger', 'Bear', 'Lizard'];
    return (
        <>
            <h1>Animals:</h1>
            <List animals={animals}/>
        </>
    )
}

export default Conditional
function List(props){
    if(!props.animals){
        return <div>Loading...</div>
    }

    if(props.animals.length === 0){
        return <div>There are no animals in this list!</div>
    }

    return(
        <ul>
            {props.animals.map(animal => <li key={animal}>{animal}</li>)}
        </ul>
    )
}

function Conditional2(){
    //const animals = ['Lion', 'Tiger', 'Bear', 'Lizard'];
    const animals = [];
    return (
        <>
            <h1>Animals:</h1>
            <List animals={animals}/>
        </>
    )
}

export default Conditional2
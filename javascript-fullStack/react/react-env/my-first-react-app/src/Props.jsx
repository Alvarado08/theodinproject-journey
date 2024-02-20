function ListItem(props) {
    return <li>{props.animal}</li>
}

function List(props){
    return(
        <ul>
            {
                props.animalList.map(animal => <ListItem key={animal} animal={animal}/>)
            }
        </ul>
    )
}

function Props(){
    const animals = ['Lion', 'Tiger', 'Bear'];
    return (
        <>
            <h1>Animals:</h1>
            <List animalList={animals}/>
        </>
    )
}

export default Props
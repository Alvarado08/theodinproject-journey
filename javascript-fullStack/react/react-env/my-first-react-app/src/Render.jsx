function Render(){
    const animals = ['Lion', 'Tiger', 'Bear'];
    return (
        <>
            <h1>Animals:</h1>
            <ul>
                {
                    animals.map(animal => <li key={animal}>{animal}</li>)
                    // Or
                    // animals.map(animal => {
                    //     return <li key={animal}>{animal}</li>;
                    // })
                }
            </ul>
        </>
    )
}

export default Render
//TODO: Color Code YT channel Fetch API

//? fetch() returns a promise object that eventually resolves in a response object
//? fetch() takes in a request object
//* fetch a request and recieve a response
//* js creates a request object behind the scenes

const url = 'https://restcountries.com/v3.1/name/france';

async function getData(){
    const response = await fetch(url);
    // json method is an async operation. Therefore we need an await
    const data = await response.json();
    console.log(data);
}
getData();

// Headers

async function getData2(){
    const request = new Request(url,{
        headers: {
            'Authorization': '12345'
        }
    })
    const response = await fetch(request);
    // json method is an async operation. Therefore we need an await
    const data = await response.json();
    console.log(data);
}
getData2();

// Exceptions
//* A resolved fetch request to server returning a Promise is a success
//* Data being returned may give an error, but initial Promise appears as resolved (server fetch)


async function getData3(){
    const request = new Request(url,{
        headers: {
            'Authorization': '12345'
        }
    })
    try {
        const response = await fetch(request);
        // json method is an async operation. Therefore we need an await
        const data = await response.json();
        // Checks if server response was successful and prints data
        // Else, we get a server error
        response.status === 200 ? console.log(data) : console.log('Server Error',data.error.message);
    } catch (error) {
        // Fetch request couldn't be completed
        console.log('Fetch Error:',error);
    }
}
getData3();
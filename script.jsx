document.querySelector('#create').addEventListener('click', async() => {
        const rawResponse = await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({model: "Lamborghini", maxSpeed: 250})
        }); 
});

document.querySelector('#log').addEventListener('click', async() => {
    const rawResponse = await fetch('http://localhost:3000/api/cars'); 
    const data = await rawResponse.json();
    document.querySelector('#container').innerHTML = JSON.stringify(data, null, 4);
    
});
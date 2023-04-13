const btn = document.getElementById('b1');
const mesg = document.getElementById('msg');
btn.addEventListener('click', practiceasync)
async function practiceasync(){
    try{
    const result = await window.fetch('https://icanhazdadjoke.com/j/<joke_id>.png')
    const data = await result.json()
    mesg.innerHTML = `<div> Joke : ${data.joke}</div>`} catch (err) {mesg.innerText = "Error!"; console.log(err)}
    // const {name, address, id, website} = data
    // const {street, city, zipcode} = address
    // const actualdata = `
    // <div>Username: ${name}</div>
    // <div>Address: ${street} , ${city} , ${zipcode}</div>
    // <div>id: ${id}</div>
    // <div>website: ${website}</div>`
    // mesg.innerHTML = actualdata
}
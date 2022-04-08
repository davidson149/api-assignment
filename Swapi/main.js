const body=document.querySelector('body')
function getResBtn(evt){
evt.preventDefault();

axios.get('https://swapi.dev/api/planets/2/')
.then(response => {
    for(let i=0; i<response.data.residents.length;i++){
        axios.get(response.data.residents[i])
.then(resResponse => {
    const residents=document.createElement("h2");
    residents.textContent=resResponse.data.name
    body.appendChild(residents)
})
.catch(error => {
    console.log(error)
})
    }
    console.log(response.data)
})

alert('Button clicked!')
}
let getResidents=document.querySelector(`#resident`);

getResidents.addEventListener('click',getResBtn);
console.log(getResidents)



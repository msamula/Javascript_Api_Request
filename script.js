function getAll() {
    fetch(`http://localhost:5195/api/Communication/GetAll`, {
    })  .then(async (res) => {
        console.clear();
        console.log(`html status code: ${res.status}`);
        let json = await res.json();
        console.log(json);

        for (let i = 0; i < json.length; i++) {
            console.log(json[i].FirstName)
        }
    });
}

function postEntry() {
    let vorname = document.getElementById('vorname').value;
    let nachname = document.getElementById('nachname').value;
    let alter = document.getElementById('alter').value;


    fetch(`http://localhost:5195/api/Communication?firstName=${vorname}&lastName=${nachname}&age=${alter}`, {
        method: 'POST'
    }).then(()=>{
        console.clear();
        console.log('new entry posted');
    })
}

document.getElementById('sendBtn').addEventListener('click',()=>{
    postEntry();
});

document.getElementById('getBtn').addEventListener('click', ()=>{
    getAll();
})
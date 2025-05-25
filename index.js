fetch("http://www.omdbapi.com/?i=tt3896198&apikey=766e706e&s=blade+runner")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
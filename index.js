const feed = document.getElementById("feed");
const searchTitle = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
let feedHtml =''
let moviesArr = []

function fetchResults(){
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=766e706e&s=${searchTitle.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            moviesArr = data
         })
    
}




function placeholderHtml(){
    feedHtml = 
    `
    <div id="placeholder">
        <i class="fa-solid fa-film" id="placegholder-icon"></i>
        <h2 id="placeholder-text">Start exploring</h2>
    </div>
    `
    renderFeed()
}

 function renderSearch(){
    feedHtml=
    `
    <div id="movie">
        <div id="movie-img-div">
            <img src="image.png" id="movie-img">
        </div>
        <div id="movie-details">

            <div id="movie-title-div">
                <h1 id="movie-title">Blade Runner</h1>
                <i class="fa-solid fa-star" id="rating-icon"></i>
                <p id="movie-rating">8.1</p>
            </div>

            <div id="movie-description">
                <p id="movie-duration">117 min</p>
                <p id="description-details">Action, Drama Sci-fi</p>
                <button id="add-watchlist"> 
                <i class="fa-solid fa-circle-plus" id="add-btn"></i>
                    Watchlist
                </button>
            </div>

            <div id="movie-plot">
                <p id="movie-plot-text"> Ablade runner musr persue and terminate four replicants who stole </p>
            </div>
                            
        </div>
    </div>
    <div class="div-separator"></div>
    `
    renderFeed()
 }

searchBtn.addEventListener("click",fetchResults)







function renderFeed(){
    feed.innerHTML=feedHtml
}


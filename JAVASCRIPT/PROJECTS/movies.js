const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280"; // ye fix hai
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const movieBox = document.getElementById("movie-box");
const getMovies = async (api)=>{
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    showMovies(data.results);
    // khali result bhejega bake phaltu data cut
    
}
// ab tumko ek pura card js se banwana ahai
const showMovies = (data)=>{
    movieBox.innerHTML = "";
    // resst the empty the moieves box
   data.forEach(
       (item)=>{
        const box = document.createElement("div")
        // box node  me jo ek movies bala div hai usi ko dal denge
        box.classList.add("box");
        box.innerHTML = `
        <img src="${IMGPATH + item.
            poster_path
            }" alt="">
            <div class="overlay">
                <div class="title">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>OverView</h3>
                <p>${item.overview}}</p>
            </div>
        `;
        movieBox.appendChild(box)
       }
   )
    
}
// jo bhi seach bar me click karngae usko capture kar lo
document.querySelector("#search").addEventListener(
    "keyup" , function(event){
      //  console.log(event.target.value); tarilke of capturing
      if(event.target.value!= ""){
         getMovies(SEARCHAPI + event.target.value) // jo seach api uske piche concate kar do movie ka naaam
    }
    else{
       // agar user kuch seach nahi kar raha hai to popular wali hi chala dae
       getMovies(APIURL);
    }
}
)
getMovies(APIURL);


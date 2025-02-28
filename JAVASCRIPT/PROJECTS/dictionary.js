const form = document.querySelector('form');
const resultdiv = document.querySelector('.result')

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    getwordinfo(form.elements[0].value);
});

const getwordinfo = async (word)=>{
    try {
        
    
   const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    // data ko json me karr ke dekha lo kya kya aa raha hai jarut ke hiasab data lelo 
    const data = await response.json();
     let result = data[0].meanings[0].definitions[0];
    resultdiv.innerHTML = `
            <h2>Your Word: ${data[0].word }</h2>
            <p class = "pos"><strong>POS:</strong> ${data[0].meanings[0].partofSpeech}</p>
            <p><strong>MEANING:</strong> ${result.definition == undefined ? "NOT FOUND":result.definition}</p>
            <p><strong>EXAMPLE:</strong> ${result.example === undefined? "NOT FOUND":result.example}</p>
            <p><strong>Antonyms:</strong></p>
            
        `;
        // fecting antomysns
        if(result.antonyms.length === 0){
            resultdiv.innerHTML+=`<span>Not Found</span>`
        }
        else{
            for(let i = 0; i<result.antonyms.length; i++){
                resultdiv.innerHTML+=`<li>${result.antonyms[i]}</li>`
            }
        }
        resultdiv.innerHTML += `<p><strong>Synonyms:</strong></p>`;
        if (result.synonyms.length === 0) {
            resultdiv.innerHTML += `<span>Not Found</span>`;
        } else {
            for (let i = 0; i < data[0].meanings[0].synonyms.length; i++) {
                resultdiv.innerHTML += `<li>${result.synonyms[i]}</li>`;
            }
        }
        

        // adding read more button
        resultdiv.innerHTML+=`<div><a href = "${data[0].sourceUrls} " target ="_blank">Read More</a></div>`
    }
    catch (error) {
        resultdiv.innerHTML = `<p style="color: red;">Word not found. Please try again.</p>`;
    }
    console.log(data);
    

}
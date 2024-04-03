import { elements } from "./elements.js"

export const viewFilme = (filmes) => {
    filmes.forEach(filmes => {
         if(Math.round(filmes.vote_average*10) >= 70){
             var color = "green"
         }else if(Math.round(filmes.vote_average*10) >=50){
              color = "yellow"
         }else{
              color = "red"
         }

        const markup = `
            <div class="card">
                <img src= "${filmes.banana}" alt="...">
                <div class="card-content">
                    <p>${filmes.title}</p>
                    <p id ="data">${filmes.release_date}</p>
                    <div id ="nota" style = "background-color: ${color}"
                        <p class="vote">${Math.round(filmes.vote_average*10)}%</p>
                    </div>                                 
                </div>
        `
        
        elements.card.insertAdjacentHTML("beforeend", markup);
    })
}
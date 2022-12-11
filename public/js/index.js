// const span = document.querySelectorAll('.list-row-one li')git 
const categories = new XMLHttpRequest()
categories.open('GET', 'https://www.omdbapi.com/?apikey=766c944f&t=category&y=2017', true)
categories.onload = function(){
    if(this.status === 200){
        const response = JSON.parse(this.responseText)
        const moviename = document.querySelector('.movie-name')
        moviename.innerHTML = `${response.Title}`
        
    }
}
categories.send()
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://www.omdbapi.com/?s=movie&apikey=766c944f&page=1', true)
xhr.onload = function(){
    if(this.status === 200){
        const response = JSON.parse(this.responseText)
        let arr = response.Search
        let arrs = arr;
        let dataRender ="";
        for (let index = 0; index < arrs.length; index++) {
           dataRender +=`
           <li>
                <figure class="li-one">
                    <a href="#">
                    <img src="${arrs?.[index]?.["Poster"]}" alt="image" />
                    <figcaption>
                        <p>${arrs?.[index]?.["Title"]}</p>
                    </figcaption>
                    </a>
                </figure>
           <li>`; 
        }
        document.getElementById("ul-list-one").innerHTML =dataRender
    }
}
xhr.send()

const xhr2 = new XMLHttpRequest()
xhr2.open('GET', 'https://www.omdbapi.com/?s=movie&apikey=766c944f&page=2', true)
xhr2.onload = function(){
    if(this.status === 200){
        const response = JSON.parse(this.responseText)
        let arr = response.Search
        let arrs = arr;
        let dataRender ="";
        for (let index = 0; index < arrs.length; index++) {
           dataRender +=`
           <li>
                <figure class="li-one">
                    <a href="#">
                    <img src="${arrs?.[index]?.["Poster"]}" alt="image" />
                    <figcaption>
                        <p>${arrs?.[index]?.["Title"]}</p>
                    </figcaption>
                    </a>
                </figure>
           <li>`; 
        }
        document.getElementById("ul-list-two").innerHTML =dataRender
    }
}
xhr2.send()
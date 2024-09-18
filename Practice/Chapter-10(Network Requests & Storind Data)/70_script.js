
// Fetch a live data from an api and display it on your app

document.addEventListener('DOMContentLoaded',() => {
    const apiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    const newsContainer = document.getElementById('cardContainer');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const news = data.articles;
            let ihtml = '';
            console.log(news)
            news.forEach((item, index) => {
                ihtml += `
                    <div class="col-md-4">
                        <div class="card mb-4" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">Title: ${item.title}</h5>
                                <p class="card-text">Author: ${item.author || 'Unknown'}</p>
                                <p class="card-text">Description: ${item.description}</p>
                                <a href="${item.url}">Read More </a>
                            </div>
                        </div>
                    </div>
                `;
            });

            newsContainer.innerHTML = ihtml;
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});


// *********************** NOTES APP ************************************* 


// fetch the note in above question
let n = localStorage.getItem("note")
alert("Your note is " + n)

let a = prompt("Enter your note")
    if(a){
localStorage.setItem("note", a)
}

// Delete your note
let c = confirm('Do you want to delete your note?')
if(c)
{
    localStorage.removeItem("note")
    alert("Note Deleted Successfully")

}

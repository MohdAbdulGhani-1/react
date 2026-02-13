// let catFact = fetch("https://catfact.ninja/fact")
// // console.log(catFact);

// catFact.then((Response) => { 
//     return Response.json().then((data) => {
//         console.log(data);
//     }) 
// }).catch(error => {
//     console.log(error);
// })



async function getCatFact(url) {
    const rowData = await fetch(url);
    const data = await rowData.json();
    console.log(data);
    const fact = data.fact;
    console.log(fetch);
    const h1 = document.createElement("h1");
    h1.textContent = fact;
    document.body.appendChild(h1);
    
}
getCatFact("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.3767325&lng=78.4296535&carousel=true&third_party_vendor=1")

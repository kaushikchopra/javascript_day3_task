fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const obj = data;
        obj.map(element => console.log(element["flag"]));
    });
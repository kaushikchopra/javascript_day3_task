fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const obj = data;
        obj.map(element => {
            console.log("Country Name: ", element["name"]["common"]);
            console.log("Region: ",element["region"]);
            console.log("Sub-Region: ",element["subregion"]);
            console.log("Population: ",element["population"], "\n");
        });
    });
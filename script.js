const apiKey= "2743c32f081ed489342b5de2aec584aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=2743c32f081ed489342b5de2aec584aa&units=metric

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);  // by using this this will fetch data from the api
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    // it will target the class name city and update the value in its inner html // it will update the name of the city by using api



    // document.querySelector(".temp").innerHTML = data.main.temp + "°c"; here it is giving decimal value for temp --Ex: 24.3, 22.7, 20.6 see below to get a integer like 23, 24, 26 for that we have to use Math.round

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    // this will target the .temp class and print the value in its inner html // inside a main we have temperature that's why we have given like this (main.temp)

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     // this will target the .humidity class and print the value in its inner html // inside a main we have humidity that why we given like this ("main.humidity")

    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    // this will target the .wind class and update the value in its inner html // wind is there directly so there is no need to give mapping for this// inside a wind there is speed so we need that one so we have like this("wind.speed")
}
checkWeather(); // when ever webpage will be loaded this function calls
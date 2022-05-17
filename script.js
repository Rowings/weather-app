// récuperation des éléments nécessaires

const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOuput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.queryselector('.cloud');
const humidityOuput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');


// Ville par défaut

let cityInput = "London";

// ajout d'un click event pour les villes prédéfinis
cities.forEach((cities) => {
    city.addEventListener('click', (e) => {
//changer la ville de base par celle cliqué
        cityInput = e.target.innerHTML;
//fonction pour l'api
        fetchWeatherData();

        app.style.opacity = "0";
    });
})

form.addEventListener('submit', (e) => {
   // si la barre de recherche est vide 
   if(search.value.length == 0) {
       alert('Please type in a city name');
   } else {

        cityInput = search.value;

        fetchWeatherData();

        search.value = "";

        app.style.opacity = "0";
   }

   e.preventDefault();
});

// fonction qui retourne le nombre de jour

function dayOfTheWeek(day, month, year) {
    const weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return weekDay[new Date('${day}/${month}/${year}').getDay()];
};


// fonction qui prend les info de l'api 

function fetchWeatherData(){

    fetch('http://api.weatherapi.com/v1/current.json?key=25c8e29efc4742d899290139221705&q=${cityInput}')

    .then(response => response.json())
    .then(data => {

        console.log(data);

        temp.innerHtml = data.current.temp_c + "&#176";
        conditionOuput.innerHTML = data.current.condition.text;
        

        // extraire la date de la ville selectionné 
        const date = data.location.locatime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const ime = date.substr(11);
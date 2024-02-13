
const country1=document.querySelector('.country_city')
const temperature=document.querySelector('.temperature')
const minTemperature=document.querySelector('.temperatureDay1')
const maxTemperature=document.querySelector('.temperatureDay2')
const inputData=document.querySelector('#input_country');
const date1=document.querySelector('.date');
const btn=document.querySelector('.btn');
const day=document.querySelector('.day');
const month=document.querySelector('.month');
const year=document.querySelector('.year');
const wind=document.querySelector('.wind');

console.log(inputData)
const inputGetValue=btn.addEventListener('click',function(){
    const getValue=inputData.value;
    console.log(getValue)
    Countryweather(getValue)
    
})





const Countryweather= async function(country='Lahore'){
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=318d4332c5192e2458bfc00ea335b61b&units=metric`)
    const response= await data.json()
    console.log(response);
    country1.innerHTML=response.name;
    temperature.innerHTML=response.main.temp+'°C';
    minTemperature.innerHTML=response.main.temp_min+'°C';
    maxTemperature.innerHTML=response.main.temp_max+'°C';
    wind.innerHTML=response.wind.speed+" "+'Km/h';
    const date2=new Date()
    date1.innerHTML=date2.getDate();
    // month.innerHTML=date2.getMonth();
    year.innerHTML=date2.getFullYear();
   
    
    console.log(date2.getDay())
    
    
   
}

// Countryweather(inputGetValue)



//weather app javascript

//let button = document.querySelector("#butt");
//let boddy = document.getElementByClassName("container");
let weather = {
	apikey:"4b6cb6cb0f8f70c7123199f6276a2921",
	
	fetcher: function(city){
	fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" + this.apikey+"")
	.then((response)=>response.json())
	.then((data) => this.displayWeather(data));
},
	displayWeather: function(data){
		const {name} = data;
		const {icon, description} = data.weather[0];
		const {temp, humidity} = data.main;
		const {speed} = data.wind;
		console.log(name,icon,description,temp,humidity,speed);
		
		document.getElementById("name").innerText = "Weather in " + name;
		document.getElementById("temp").innerText= temp + "°C";
		document.querySelector(".myimage").src = "https://api.openweathermap.org/img/wn/"+
		icon +".png";
		document.getElementById("description").innerText= description;
		document.getElementById("humidity").innerText="humidity: " + humidity + "%";
		document.getElementById("wind").innerText= "wind-speed: " + speed + "km/h";
		document.querySelector(".container").classList.remove("loading");
		document.body.style.backroundgImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
	},
	caller: function(){
			this.fetcher(document.querySelector(".dinput").value);
	}
};


document.querySelector(".input-enter button").addEventListener("click", function(){
	weather.caller();
});
	



document.querySelector(".dinput").addEventListener("keyup", function(e){
	if(e.key == "Enter"){
	   	weather.caller();
	   }
});


weather.fetcher("tokyo");










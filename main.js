const turnOnLight = id => {
    const light = document.querySelector(`#${id}`);
    light.classList.value = "lightOn";
}

const turnOffLight = id => {
    const light = document.querySelector(`#${id}`);
    light.classList.value = "lightOff";
}

const light2 = document.querySelector(".light2");
var randomlight2;

light2.addEventListener("click", function() {
    clearInterval(randomlight2);
    const light = document.querySelector("#light2");

	randomlight2 = setInterval(() => {
        if(light.classList.value == "lightOn") { 
            light.classList.value = "lightOff";
        } else { 
            light.classList.value = "lightOn";
        }
	}, 1000);
});

const turnOfflight2 = () => {
    clearInterval(randomlight2);
    const light = document.querySelector("#light2");
    light.classList.value = "lightOff";
}

const light3 = document.querySelector(".light3");
var randomlight3;

light3.addEventListener("click", function() {
    clearInterval(randomlight3);
    const light = document.querySelector("#light3");
    
	randomlight3 = setInterval(() => {
        if(light.classList.value == "lightOn") { 
            light.classList.value = "lightOff";
        } else { 
            light.classList.value = "lightOn";
        }
	}, 500);
});

const turnOfflight3 = () => {
    clearInterval(randomlight3);
    const light = document.querySelector("#light3");
    light.classList.value = "lightOff";
}
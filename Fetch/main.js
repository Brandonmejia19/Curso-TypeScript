"use strict";
const fetchData = async () => {
    const API_URL = "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
    const response = await fetch(API_URL);
    const data = response.json();
    return data;
};
let button = document.querySelector(".btnInfo");
let paragraph = document.querySelector(".info");
button.addEventListener("click", async () => {
    const data = await fetchData();
    paragraph.innerHTML = JSON.stringify(data);
});

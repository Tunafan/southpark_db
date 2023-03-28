"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  console.log(`.js gang gang`);
  const characters = await getCharacter(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );

  characters.forEach(showCharacter);
}

async function getCharacter(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function showCharacter(character) {
  console.log(character);

  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    // herunder ligger character traits
    /*html*/ `
    <article>
        <h2>${character.name}</h2>
        <img src="${character.image}" id="lol" alt="" />
        <p><b>Other names:</b> ${character.nickname}<p>
        <p><b>Job\(s\):</b> ${character.occupation}<p>
        <p><b>Age:</b> ${character.age}<p>
        <p><b>Voices:</b> ${character.voicedBy}<p>
        <p><b>Gender:</b> ${character.gender}<p>
        <p><b>Sayings:</b> ${character.catchPhrase}<p>
        <p><b>Hair colour:</b> ${character.hairColor}<p>
        <p><b>Appears in:</b> ${character.episodes}<p>
        <p><b>Total appearances:</b> ${character.appearances}<p>
        <p><b>First appearance:</b> ${character.firstAppearance}<p>
        </article>`
  );
}

"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  console.log(`.js gang gang`);
  let butters = await getCharacter(
    `https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json`
  );
  let tuong = await getCharacter(
    `https://raw.githubusercontent.com/TheDanishMexican/object-south-park/main/data/app.json`
  );
  let paris = await getCharacter(
    "https://raw.githubusercontent.com/Tunafan/southpark_db/main/South%20Park%20db/data/paris.json"
  );

  showCharacter(butters);
  showCharacter(tuong);
  showCharacter(paris);
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

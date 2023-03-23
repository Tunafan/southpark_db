"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  console.log(`.js gang gang`);
  let butters = await getCharacter(
    `https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json`
  );
  showCharacter(butters);

  let tuong = await getCharacter(
    `https://raw.githubusercontent.com/cederdorff/dat-js/main/data/draco.json`
  );
  showCharacter(tuong);

  let paris = await getCharacter("data/paris.json");
  showCharacter(paris);
}

async function getCharacter(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function showCharacter(character) {
  console.log(character);

  document.querySelector("body").insertAdjacentHTML(
    "beforebegin",
    /*html*/ `
    <article>
        <h2>${character.name}</h2>
        <img src="${character.image}" id="lol" alt="" />
        <header>${character.nickname}</header>
        <header>${character.occupation}</header>
        <header>${character.age}</header>
        <header>${character.voicedBy}</header>
        <header>${character.gender}</header>
        <header>${character.catchPhrase}</header>
        <header>${character.hairColor}</header>
        <header>${character.episodes}</header>
        <header>${character.appearances}</header>
        <header>${character.firstAppearance}</header>
        </article>`
  );
}

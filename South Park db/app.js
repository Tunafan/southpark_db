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
  let jack = await getCharacter(
    "https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json"
  );
  let stan = await getCharacter(
    "https://raw.githubusercontent.com/VARattleff/south-park-viktor/main/sp.json"
  );
  let tom = await getCharacter(
    "https://raw.githubusercontent.com/svdf18/SPobjects/main/data/tomcruise.json"
  );
  let jfk = await getCharacter(
    "https://raw.githubusercontent.com/rarogbennu/SP/master/data/jfk.json"
  );

  let wendy = await getCharacter(
    "https://raw.githubusercontent.com/osman-butt/data-app/main/wendy.json"
  );
  let kenny = await getCharacter(
    "https://raw.githubusercontent.com/Mart0808DK/Data-fetch-projekt/main/kenny.json"
  );
  let mackey = await getCharacter(
    "https://raw.githubusercontent.com/MaxusTheOne/data_project/main/data/mrMackey.json"
  );
  let christinaAguilera = await getCharacter(
    "https://raw.githubusercontent.com/Maltemork/south-park-app/main/data/christinaAguilera.json"
  );

  showCharacter(butters);
  showCharacter(tuong);
  showCharacter(paris);
  showCharacter(jack);
  showCharacter(stan);
  showCharacter(tom);
  showCharacter(jfk);
  showCharacter(wendy);
  showCharacter(kenny);
  showCharacter(mackey);
  showCharacter(christinaAguilera);
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

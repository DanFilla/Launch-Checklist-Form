// Write your JavaScript code here!

window.addEventListener('load', function() {
   const form = document.querySelector('form');
   const missionTargetDoc = document.getElementById('missionTarget');

   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json) {
         let index = Math.floor((Math.random()*json.length-1) + 1)

         missionTargetDoc.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `
      })
   })

   form.addEventListener('submit', function(event) {
      const pilotNameInput = document.querySelector('input[name=pilotName]');
      const copilotNameInput = document.querySelector('input[name=copilotName]');
      const fuelLevelInput = document.querySelector('input[name=fuelLevel]');
      const cargoMassInput = document.querySelector('input[name=cargoMass]');
      const pilotDoc = document.getElementById('pilotStatus');
      const copilotDoc = document.getElementById('copilotStatus');
      const launchStatusDoc = document.getElementById('launchStatus');

      function isFromValid() {
         for (index of arguments) {
            if (index.value === '') {
               alert("Please fill out form!");
               event.preventDefault();
               break;
            }
         }
      }

      function isInputNumber() {
         for (index of arguments) {
            if (isNaN(index.value)) {
               alert("Only enter numbers!");
               event.preventDefault();
               break;
            }
         }
      }

      function setFaultyItems() {
         document.getElementById('faultyItems').style.visibility = 'visible';
         pilotDoc.textContent = `${pilotNameInput.value} ready!`;
         copilotDoc.textContent = `${copilotNameInput.value} ready!`
         launchStatusDoc.textContent = 'Shuttle not ready for launch'
         launchStatusDoc.style.color = 'red'
      }

      isFromValid(pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
      isInputNumber(fuelLevelInput, cargoMassInput);

      if (fuelLevelInput.value < 10000) {
         let fuelStatus = document.getElementById('fuelStatus');
         fuelStatus.textContent = 'Fuel level not high enough for launch!'
         setFaultyItems();
      }
      if (cargoMassInput.value > 10000) {
         let cargoStatus = document.getElementById('cargoStatus');
         cargoStatus.textContent = 'Cargo mass to high for launch!'
         setFaultyItems();
      }
      if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
         document.getElementById('faultyItems').style.visibility = 'visible';
         pilotDoc.textContent = `${pilotNameInput.value} ready!`;
         copilotDoc.textContent = `${copilotNameInput.value} ready!`
         launchStatusDoc.textContent = 'Shuttle is ready for launch.'
         launchStatusDoc.style.color = 'green'
      }
   })
})

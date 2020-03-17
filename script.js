// Write your JavaScript code here!

window.addEventListener('load', function() {
   const form = document.querySelector('form');

   form.addEventListener('submit', function(event) {
      const pilotNameInput = document.querySelector('input[name=pilotName]');
      const copilotNameInput = document.querySelector('input[name=copilotName]');
      const fuelLevelInput = document.querySelector('input[name=fuelLevel]');
      const cargoMassInput = document.querySelector('input[name=cargoMass]');

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

      isFromValid(pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
      isInputNumber(fuelLevelInput, cargoMassInput);

      document.getElementById('pilotStatus').innerHTML = 'changing';
      // console.log(document.getElementById('pilotStatus').innerHTML);

      // let faultyList = document.querySelectorAll('li')
      // for (i = 0; i < faultyList.length; i++) {
      //    faultyList[i].style.backgroundColor = 'red'
      //    console.log(values(faultyList))
      // }
   })
})




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

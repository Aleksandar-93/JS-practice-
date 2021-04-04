// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

boilWater(1000);// iako stavimo 0 js predaje citacu zavrsava svoj kod tj js kod dalje pa se vraca na setTimout i izvrsva to
console.log(`chop carrot`);
for(let i = 0; i< 1000; i++){
  console.log('still busy');
} // iako smo stavili da se boling watter izvrsi nakon 1 sekunde on se nece izvrsavati dok se ova petlja ne zavrsi
// setTimout ceka da vidi dali je js zavrsila izvrsavanje i kad zavrsi onda se tek tad izvrsi

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done.');
  }, time);
}
 
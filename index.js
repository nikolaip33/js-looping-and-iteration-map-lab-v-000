// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(name){ return name.toLowerCase(); });
  return newDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(name){
    return { firstName: name.split(" ")[0], lastName: name.split(" ")[1] };
  });
  return newDrivers;
}

function attributesToPhrase() {
  const newDrivers = drivers.map(function(name){ return name.toLowerCase(); });
  return newDrivers;
}

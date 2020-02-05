var calcBodyMass = function (mass, height) {
  return mass / (height ** 2)
};

var user_mass = parseFloat(prompt("Enter a bodymass in kg:"));
var user_height = parseFloat(prompt("Enter height in meters:"));
var result = calcBodyMass(user_mass, user_height);
alert(result.toFixed(2));
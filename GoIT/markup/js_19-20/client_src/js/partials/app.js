
$( function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

var skills = [];

for (var i = 0; i < data.length; i++) {
  skills.push( data[i].skills);
}

skills = _.flatten(skills);
skills = _.uniq(skills);
var sortedSkills = _.sortBy(skills, function (skill) {return skill;});

console.log(skills);
console.log(sortedSkills);




  console.log('Wow! It\'s working!');
  console.log(data[1].address);
} );
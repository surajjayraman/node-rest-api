const source = document.getElementById("some-template").innerHTML;
const template = Handlebars.compile(source);

const data = {
  users: [ {
    person: {
      firstName: "Garry",
      lastName: "Finch"
    },
    jobTitle: "Front End Technical Lead",
    twitter: "gazraa"
  }, {
    person: {
      firstName: "Garry",
      lastName: "Finch"
    },
    jobTitle: "Photographer",
    twitter: "photobasics"
  }, {
    person: {
      firstName: "Garry",
      lastName: "Finch"
    },
    jobTitle: "LEGO Geek",
    twitter: "minifigures"
  } ]
};
Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});
  
const compiledHtml = template(data);

document.getElementById("container").innerHTML = compiledHtml;

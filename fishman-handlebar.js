// data
const fullName = {name: "Suraj Nair"};
const source = document.getElementById('fishman').innerHTML;
const template = Handlebars.compile(source);

// compiled html
const compiledHtml = template(fullName);
document.getElementById('fishman').innerHTML = compiledHtml;

// sample data source
const data = {
  company: "Suraj's Fish Farm",
  phone: '619-555-1212',
  owner: {
    firstName: 'Suraj',
    lastName: 'Nair'
  }
};

// Use strict mode so that Handlebars will throw exceptions if we
// attempt to use fields in our template that are not in our data set.
const templateSource = document.getElementById('source').innerHTML;
const hbTemplate = Handlebars.compile(templateSource, {strict: true});
const result = hbTemplate(data);
console.log(result);

document.getElementById('source').innerHTML = result;
// data
const name = {name: "Suraj Nair"};
const source = document.getElementById('fishman').innerHTML;
const template = Handlebars.compile(source);

// compiled html
const compiledHtml = template(name);
document.getElementById('fishman').innerHTML = compiledHtml;

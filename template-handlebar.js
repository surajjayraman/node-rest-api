const source = document.getElementById('ice-cream').innerHTML;

const newtemplate = Handlebars.compile(source);

const context = {
  flavor: 'vanilla'
};

const compiledHtml = newtemplate(context);

const iceCreamText = document.getElementById("scream");
iceCreamText.innerHTML = compiledHtml;
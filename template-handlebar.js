const source = document.getElementById('ice-cream').innerHTML;

const newtemplate = Handlebars.compile(source);

const context = {
  flavor: 'vanilla'
};

const compiledHtml = newtemplate(context);

const iceCreamText = document.getElementById("scream");
iceCreamText.innerHTML = compiledHtml;

// Example of obj mapping
const data = {
  "firstName":"John",
  "lastName":"Smith",
  "amount":500,
  "date":"2019-07-15",
  "pic":"PTSTRANSFER"
};

Handlebars.registerHelper('debitRewards', function(data) {
  // create a new copy of the original context data
  const globalRewards = {...data};
  // build a new obj with mappings to reflect Global Rewards JSON
  const mappedObj = {
    fName : globalRewards.data.root.firstName,
    lName : globalRewards.data.root.lastName,
    pointsTotal : -Math.abs(globalRewards.data.root.amount),
    debitTime : Date.now(),
    activityCode : globalRewards.data.root.pic,
    description : `Points transferred - ${globalRewards.data.root.date}`
  };
  return JSON.stringify(mappedObj);
});

const debitRewardsHtml = document.getElementById('points').innerHTML;
const rewardsTemplate = Handlebars.compile(debitRewardsHtml);
const rewardsHtml = rewardsTemplate(data);
document.getElementById('points').innerHTML = rewardsHtml;

// example of handlebar expression
let expressionHtml = document.getElementById('entry').innerHTML;
let expressionTemplate = Handlebars.compile(expressionHtml);
let handlebar_expression = expressionTemplate({
  title: "My New Post",
  body: "This is my first post!"
});

document.getElementById('entry').innerHTML = handlebar_expression;

// example of expression with raw html
expressionHtml = document.getElementById('entry-raw').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);
handlebar_expression = expressionTemplate({
  title: "All about <p> Tags",
  body: "<p>This is a post about &lt;p&gt; tags</p>"
});

document.getElementById('entry-raw').innerHTML = handlebar_expression;

// example of block expressions
const names = {
  people : [
    { firstName: "Yehuda", lastName: "Katz" },
    { firstName: "Carl", lastName: "Lerche" },
    { firstName: "Alan", lastName: "Johnson" }
  ]
};

Handlebars.registerHelper('list', function(data) {
  const fullNames = [];

  for (const name of data) {
    const fullName = `${name['firstName']} ${name['lastName']}`;
    fullNames.push(fullName);
  }
  console.log(fullNames);
  return fullNames;
});

expressionHtml = document.getElementById('block').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);

handlebar_expression = expressionTemplate(names);
document.getElementById('block').innerHTML = handlebar_expression;
  
// example of each block helper
expressionHtml = document.getElementById('people_list').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);

handlebar_expression = expressionTemplate({
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley"
  ]
});
document.getElementById('people_list').innerHTML = handlebar_expression;

// example of empty context
expressionHtml = document.getElementById('empty-context').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);
handlebar_expression = expressionTemplate({});
document.getElementById('empty-context').innerHTML = handlebar_expression;

// example of truthy context
handlebar_expression = expressionTemplate({
  author: true,
  firstName: 'Suraj',
  lastName: 'Nair'
});
document.getElementById('truthy-context').innerHTML = handlebar_expression;

// example of unless(falsy)
expressionHtml = document.getElementById('unless-falsy').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);
handlebar_expression = expressionTemplate({license: true});
document.getElementById('unless-falsy').innerHTML = handlebar_expression;

// example of simple paths
expressionHtml = document.getElementById('paths').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);
handlebar_expression = expressionTemplate({name: "Suraj Nair"});
document.getElementById('paths').innerHTML = handlebar_expression;

// example of nested paths
expressionHtml = document.getElementById('paths-nested').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);
handlebar_expression = expressionTemplate({
  title: "My First Blog Post!",
  author: {
    id: 47,
    name: "Yehuda Katz"
  },
  body: "My first post. Wheeeee!"
});
document.getElementById('paths-nested').innerHTML = handlebar_expression;

// example of url paths ../
expressionHtml = document.getElementById('comments').innerHTML;
expressionTemplate = Handlebars.compile(expressionHtml);
handlebar_expression = expressionTemplate({
  comments: [
    { id: 1, title: 'wow what a great site'},
    { id: 2, title: 'i really love handlebars js'}
  ],

  body: "Try Handlebars JS!",
  permalink: "try-handlebars-js-today",
});
document.getElementById('comments').innerHTML = handlebar_expression;







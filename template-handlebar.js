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
handlebar_expression = expressionTemplate({
  author: true,
  firstName: 'Suraj',
  lastName: 'Nair'
});
document.getElementById('empty-context').innerHTML = handlebar_expression;




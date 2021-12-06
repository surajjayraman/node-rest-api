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

  

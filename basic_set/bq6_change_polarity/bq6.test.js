const { JSDOM } = require("jsdom");
const $ = require("jquery");

it("Should be able sum up the checkboxes", async () => {
  let oldLog = console.log;
  const options = {
    resources: "usable",
    runScripts: "dangerously"
  };

  console.log = jest.fn();


  // load the document
  let dom;
  try {
    dom = await JSDOM.fromFile(`${__dirname}/index_solution.html`, options);
  } catch (e) {
    dom = await JSDOM.fromFile(`${__dirname}/index.html`, options);
  }

  document.documentElement.innerHTML =
    dom.window.document.documentElement.innerHTML;
  let solution;
  try {
    solution = require("./solutions.js");
  } catch (e) {
      try {
            solution = require("./script.js");
      } catch (e) {
          
      }
  }
  let numbers = $('.numbers');
  numbers[0].checked = true;
  numbers[2].checked = true;
  numbers[4].checked = true;

  let operation = $('.operation');
  operation[0].checked;
  $("#process").click();

  expect(console.log).toHaveBeenCalledWith(121);


});

const { JSDOM } = require("jsdom");
const $ = require("jquery");

it("Should be able to print error", async () => {
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
  let {isNumber} = solution;
  isNumber = jest.fn();
  $("#num1").val(7);
  $("#num2").val('abc');
  $("#num3").val(7);
  $("#process").click();

  expect(console.log).toHaveBeenCalledWith('error');


});

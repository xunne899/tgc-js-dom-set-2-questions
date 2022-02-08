const { JSDOM } = require("jsdom");
const $ = require("jquery");

it("Should be able able to retrieve changes from form", async () => {
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

  $("#num1").val(7);
  $("#num2").val(10);
  $("#num3").val(5);
  $("#process").click();
  // The first argument of the first call to the function was 'hello'
  expect(console.log).toHaveBeenCalledWith(10);
});

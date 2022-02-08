const { JSDOM } = require("jsdom");
const $ = require("jquery");

it("Should be able to find the average of 3 numbers", async () => {
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

  $("#process").click();
  expect(console.log).toHaveBeenCalledWith(0);


});

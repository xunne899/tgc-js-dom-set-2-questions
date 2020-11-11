const { JSDOM } = require("jsdom");
fs = require("fs");

beforeAll(async () => {
  const options = {
    resources: "usable",
    runScripts: "dangerously",
  };

  // load the document
  let dom = await JSDOM.fromFile(`${__dirname}/index.html`, options);
  document.documentElement.innerHTML =
    dom.window.document.documentElement.innerHTML;

  let solution;
  try {
    solution = require("./solutions.js");
  } catch (e) {
    solution = require("./script.js");
  }
});

it("event.preventDefault set on form submit", async () => {
  const evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
    preventDefault: function () {},
  });
  const preventDefaultSpy = spyOn(evt, "preventDefault");

  // check a class
  document.querySelector("input[type='radio']").checked = true;

  const formSubmitBtn = document.querySelector(".form button");
  formSubmitBtn.dispatchEvent(evt);
  expect(preventDefaultSpy).toBeCalled();
});

it("first & last name appear in div#summary", async () => {
  // setup firstname and lastname
  const inputElements = document.querySelectorAll("input");
  inputElements[0].value = "booya";
  inputElements[1].value = "catya";

  // fire click event
  const evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
    preventDefault: function () {},
  });

  // check a class
  document.querySelector("input[type='radio']").checked = true;
  const formSubmitBtn = document.querySelector(".form button");
  formSubmitBtn.dispatchEvent(evt);

  // check results
  const results = document.querySelector("div#summary").innerHTML;
  expect(results).toMatch(/booya/);
  expect(results).toMatch(/catya/);
});

it("total cost without options accurately calculated and ticket class displayed", async () => {
  // fire click event
  const evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
    preventDefault: function () {},
  });

  // check a class
  document.querySelector("input[type='radio']").checked = true;
  const formSubmitBtn = document.querySelector(".form button");
  formSubmitBtn.dispatchEvent(evt);

  // check results
  const results = document.querySelector("div#summary").innerHTML;
  expect(results).toMatch(/1200/);
  expect(results).toMatch(/First class/);
});

it("total cost with options accurately calculated and selected options displayed", async () => {
  // fire click event
  const evt = new Event("click", {
    bubbles: false,
    cancelable: false,
    composed: false,
    preventDefault: function () {},
  });

  // check a class
  document.querySelectorAll("input[type='radio']")[1].checked = true;

  // check some options
  document
    .querySelectorAll("input[type='checkbox']")
    .forEach((item) => (item.checked = true));

  const formSubmitBtn = document.querySelector(".form button");
  formSubmitBtn.dispatchEvent(evt);

  // check results
  const results = document.querySelector("div#summary").innerHTML;
  expect(results).toMatch(/790/);
  expect(results).toMatch(/Free-flow drinks/);
});

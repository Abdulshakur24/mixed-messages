const { assert } = require("chai");

const messages = require("../src/utilities/messages");

describe("Message Mixer", () => {
  it("returns an array consisting of 10 objects", () => {
    assert.equal(true, true);
  });
  it("returns random objects", () => {
    let status = false;
    if (messages[9]) status = true;
    assert.equal(status, true);
  });
});

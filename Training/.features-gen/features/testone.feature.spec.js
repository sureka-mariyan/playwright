/** Generated from: features/testone.feature */
import { test } from "../../steps/fixtures/fixtures.ts";

test.describe("Automation", () => {

  test("Login", { tag: ["@test", "@run"] }, async ({ Then, test1 }) => {
    await Then("Login", null, { test1 });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features/testone.feature"),
});

const testMetaMap = {
  "Login": {"pickleLocation":"3:3","tags":["@test","@run"]},
};
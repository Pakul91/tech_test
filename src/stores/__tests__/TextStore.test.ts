import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useTextStore } from "../TextStore";

describe("TextStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should retrieve and update section text", async () => {
    const store: any = useTextStore();

    // Initially, sectionText should be false
    expect(store.sectionText).toBe(false);

    // Call the getSectionText method
    store.getSectionText();

    // After calling getSectionText, sectionText should have a value
    expect(store.sectionText).not.toBe(false);

    // sectionText should have the expected properties (greeting, p1, p2)
    const expectedKeys = ["greeting", "p1", "p2"];
    const actualKeys = Object.keys(store.sectionText);
    expect(actualKeys).toEqual(expectedKeys);

    // Reset the counter for testing purposes
    store.visitsCounter = 0;

    // Call getSectionText again
    store.getSectionText();

    // The value of sectionText should change based on the counter
    const firstText = store.sectionText;

    store.getSectionText();

    const secondText = store.sectionText;

    // Compare the firstText and secondText values
    expect(firstText).not.toEqual(secondText);
  });
});

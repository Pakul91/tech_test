import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { render, cleanup, configure } from "@testing-library/vue";
import { useTextStore } from "@/stores/TextStore";
import { createTestingPinia } from "@pinia/testing";
import { createPinia, setActivePinia } from "pinia";

// Incrise timeout for async tests
configure({
  asyncUtilTimeout: 3000,
});

import Home from "@/views/Home.vue";

describe("HelloWorld", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders all contect correctly", async () => {
    const wrapper = render(Home);

    // Main content and paragraphs
    expect(wrapper.getByRole("main")).toBeTruthy();
    expect(await wrapper.findByLabelText("Greeting")).toBeTruthy();
    expect(await wrapper.findByLabelText("Introduction")).toBeTruthy();
    expect(await wrapper.findByLabelText("Options")).toBeTruthy();
    // Buttons
    expect(await wrapper.findByLabelText("button to Users")).toBeTruthy();
    expect(
      await wrapper.findByLabelText("button to Organisations")
    ).toBeTruthy();
    expect(await wrapper.findByLabelText("button to Emojis")).toBeTruthy();
  });
});

describe("Home renders in the right order", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders only Greeting first", async () => {
    const wrapper = render(Home);
    // 1. Visible
    expect(wrapper.findByLabelText("Greeting")).toBeTruthy();

    // Hidden items
    expect(wrapper.queryByLabelText("Introduction")).toBeNull();
    expect(wrapper.queryByLabelText("Options")).toBeNull();
    expect(wrapper.queryByTestId("homeButtonsHolder")).toBeNull();
  });

  it("renders Introduction next", async () => {
    const wrapper = render(Home);
    // Visible Elements
    expect(wrapper.findByLabelText("Greeting")).toBeTruthy();
    expect(await wrapper.findByLabelText("Introduction")).toBeTruthy();
    // Hidden items
    expect(wrapper.queryByLabelText("Options")).toBeNull();
    expect(wrapper.queryByTestId("homeButtonsHolder")).toBeNull();
  });

  it("renders Options next", async () => {
    const wrapper = render(Home);
    // Visible Elements
    expect(wrapper.findByLabelText("Greeting")).toBeTruthy();
    expect(await wrapper.findByLabelText("Introduction")).toBeTruthy();
    expect(await wrapper.findByLabelText("Options")).toBeTruthy();
    // Hidden items
    expect(wrapper.queryByTestId("homeButtonsHolder")).toBeNull();
  });

  it("renders buttons next", async () => {
    const wrapper = render(Home);
    // Visible Elements
    expect(wrapper.findByLabelText("Greeting")).toBeTruthy();
    expect(await wrapper.findByLabelText("Introduction")).toBeTruthy();
    expect(await wrapper.findByLabelText("Options")).toBeTruthy();
    expect(await wrapper.findByTestId("homeButtonsHolder")).toBeTruthy();
    expect(await wrapper.findByLabelText("button to Users")).toBeTruthy();
    expect(
      await wrapper.findByLabelText("button to Organisations")
    ).toBeTruthy();
    expect(await wrapper.findByLabelText("button to Emojis")).toBeTruthy();
  });
});

import { render, screen, waitFor } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import TypeWriterVue from "@/components/TypeWriter.vue"; // Replace with the actual path to your component

describe("renders correctly and types text", async () => {
  it("renders all correctly", () => {
    const text = ["Hello", "World"];

    render(TypeWriterVue, {
      props: {
        element: "div",
        ariaLabel: "Test",
        text: text,
        speed: 20,
      },
    });

    expect(screen.findByText("Hello World")).toBeTruthy();
  });

  it("will work if string is passed instead of arra");

  it("emits typingDone event", async () => {
    const text = ["Hello", "World"];
    const { emitted } = render(TypeWriterVue, {
      props: {
        element: "div",
        ariaLabel: "Test",
        text: text,
        speed: 20,
      },
    });

    // Wait for typing to complete
    await waitFor(() => expect(emitted().typingDone).toBeTruthy());
  });
});

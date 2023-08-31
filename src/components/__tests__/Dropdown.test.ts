import { render, screen, fireEvent, cleanup } from "@testing-library/vue";
import { describe, it, expect, afterEach } from "vitest";
import Dropdown from "@/components/Dropdown.vue"; // Adjust the import path as needed

const dropdownItems = [
  { name: "Option 1" },
  { name: "Option 2" },
  { name: "Option 3" },
];

describe("Dropdown component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with dropdown button", () => {
    render(Dropdown, {
      props: { dropdownItems },
    });

    const dropdownButton = screen.getByLabelText("toggle dropdown");
    expect(dropdownButton).toBeTruthy();
  });

  it("displays dropdown options when clicked", async () => {
    render(Dropdown, {
      props: { dropdownItems },
    });

    const dropdownButton = screen.getByLabelText("toggle dropdown");
    await fireEvent.click(dropdownButton);

    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");
    const option3 = screen.getByText("Option 3");

    expect(option1).toBeTruthy();
    expect(option2).toBeTruthy();
    expect(option3).toBeTruthy();
  });

  it("emits event when dropdown option is clicked", async () => {
    const { emitted } = render(Dropdown, {
      props: { dropdownItems },
    });

    const dropdownButton = screen.getByLabelText("toggle dropdown");
    await fireEvent.click(dropdownButton);

    const option2 = screen.getByText("Option 2");
    await fireEvent.click(option2);

    expect(emitted().dropdownItemClicked[0]).toEqual([{ name: "Option 2" }]);
  });

  it("applies 'active' class to selected dropdown option", async () => {
    render(Dropdown, {
      props: { dropdownItems },
    });

    const dropdownButton = screen.getByLabelText("toggle dropdown");
    await fireEvent.click(dropdownButton);

    const option2 = screen.getByText("Option 2");
    await fireEvent.click(option2);

    expect(option2.classList.contains("active")).toBe(true);
  });
});

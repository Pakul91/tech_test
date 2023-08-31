// Card.spec.ts
import { render, screen } from "@testing-library/vue";
import Card from "@/components/Card.vue"; // Adjust the import path as needed
import { describe, it, expect } from "vitest";

describe("Card.vue", () => {
  it("renders user card with provided data", async () => {
    const data = {
      login: "mojombo",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      name: "Tom Preston-Werner",
      email: "tom@mojombo.com",
      followers: 23583,
      public_repos: 65,
      created_at: "2007-10-20T05:24:19Z",
    };

    render(Card, {
      props: { data, type: "user" },
    });

    // Assertions
    expect(screen.getByText(data.login)).toBeTruthy();
    expect(screen.getByText(data.name)).toBeTruthy();
    expect(screen.getByText(data.email)).toBeTruthy();
    expect(screen.getByText(`${data.followers}`)).toBeTruthy();
    expect(screen.getByText(`${data.public_repos}`)).toBeTruthy();
    expect(
      screen.getByText(`Joined ${new Date(data.created_at).toDateString()}`)
    ).toBeTruthy();
  });

  it("renders organisation card with provided data", async () => {
    const data = {
      login: "engineyard",
      avatar_url: "https://avatars.githubusercontent.com/u/81?v=4",
      company: null,
      blog: "https://www.engineyard.com",
      public_repos: 335,
      followers: 8,
      html_url: "https://github.com/engineyard",
    };

    render(Card, {
      props: { data, type: "organisation" },
    });

    // Assertions
    expect(screen.getByText(data.login)).toBeTruthy();
    expect(screen.getByText(`${data.followers}`)).toBeTruthy();
    expect(screen.getByText(`${data.public_repos}`)).toBeTruthy();
    expect(screen.getByText(data.blog)).toBeTruthy();
    expect(screen.getByText(data.html_url)).toBeTruthy();
  });
});

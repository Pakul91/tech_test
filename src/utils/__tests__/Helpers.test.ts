import { test, assert } from "vitest";
import { sortArray } from "../Helpers";
import detailedUsers from "@/data/detailedUsers.json";
import { type DetailedUser } from "@/customTypes/index";

const testData: DetailedUser[] = detailedUsers;

test("Sort array in ascending order", () => {
  const sortedArray = sortArray([...testData], {
    key: "login",
    direction: "ascending",
  });

  for (let i = 1; i < sortedArray.length; i++) {
    assert(sortedArray[i - 1].login <= sortedArray[i].login);
  }
});

test("Sort array in descending order", () => {
  const sortedArray = sortArray([...testData], {
    key: "login",
    direction: "descending",
  });

  for (let i = 1; i < sortedArray.length; i++) {
    assert(sortedArray[i - 1].login >= sortedArray[i].login);
  }
});

import { defineStore } from "pinia";
import { type SectionTextCollection } from "@/customTypes";
import { ref } from "vue";

export const useTextStore = defineStore("text", () => {
  const textData: any = [
    {
      greeting: ["Hello there!"],
      p1: [
        `Let's take a dive into the GitHub API and see what mysteries we can uncover!`,
      ],
      p2: ["Which of the following would you like to explore?"],
    },
    {
      greeting: ["Hello again!"],
      p1: [`I hope youre enyoing your exploration!`],
      p2: ["Where next?"],
    },
    {
      greeting: ["Hey! Hey!"],
      p1: [`You're really on a roll!`],
      p2: ["Which avenue will you explore next?"],
    },
    {
      greeting: ["WoW!"],
      p1: [`You're a persistent one aren't you!`],
      p2: ["You know the drill!"],
    },
    {
      greeting: ["C'mon..."],
      p1: [`Are you not tired of this yet?`],
      p2: ["..."],
    },
    {
      greeting: ["I think you've seen it all now!"],
      p1: [`If you're still here, you're a real trooper!`],
      p2: ["You know what to do!"],
    },
  ];

  let visitsCounter = 0;

  const sectionText = ref<SectionTextCollection | false>(false);

  const getSectionText = (): void => {
    const text = textData[Math.min(visitsCounter, textData.length - 1)];

    visitsCounter++;

    sectionText.value = text;
  };

  return {
    getSectionText,
    sectionText,
  };
});

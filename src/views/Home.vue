<template>
  <main data-testId="main" class="pt-5 text-theme3 overflow-hidden" role="main">
    <TypeWriter
      v-if="greetingText"
      key="H1"
      :className="'text-center py-5'"
      :ariaLabel="'Greeting'!"
      :element="'h1'"
      :text="greetingText"
      :speed="15"
      @typing-done="onH1TypingDone"
    />

    <TypeWriter
      v-if="p1Text && showP1"
      key="p1"
      :className="'paragraph text-center px-2'"
      style="font-size: clamp(1.25rem, 4vw, 1.75rem)"
      :ariaLabel="'Introduction'"
      :element="'p'"
      :text="p1Text"
      :speed="15"
      @typing-done="onP1TypingDone"
    />

    <TypeWriter
      v-if="p2Text && showP2"
      key="p2"
      :className="'paragraph text-center px-2'"
      style="font-size: clamp(1.25rem, 4vw, 1.75rem)"
      :ariaLabel="'Options'"
      :element="'p'"
      :text="p2Text"
      :speed="15"
      @typing-done="onP2TypingDone"
    />

    <div v-if="showButtons" data-testId="homeButtonsHolder">
      <transition-group
        appear
        class="d-grid gap-2 col-8 col-sm-6 col-lg-4 mx-auto mt-5"
        name="slide"
        tag="section"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <RouterLink
          v-for="(button, index) in buttons"
          :to="button.path"
          :key="button.name"
          type="button"
          :name="button.name"
          :data-index="index"
          :aria-label="`button to ${button.name}`"
          class="btn btn-primary p3"
        >
          {{ button.name }}
        </RouterLink>
      </transition-group>
    </div>
  </main>
</template>

<script setup lang="ts">
import TypeWriter from "@/components/TypeWriter.vue";
import { useTextStore } from "@/stores/TextStore";
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import gsap from "gsap";

const { getSectionText } = useTextStore();
const { sectionText }: any = storeToRefs(useTextStore());

const showP1 = ref<boolean>(false);
const showP2 = ref<boolean>(false);
const showButtons = ref<boolean>(false);

const greetingText = computed(() => sectionText?.value.greeting);
const p1Text = computed(() => sectionText?.value.p1);
const p2Text = computed(() => sectionText?.value.p2);

const buttons = [
  { name: "Users", path: "/users" },
  { name: "Organisations", path: "/organisations" },
  { name: "Emojis", path: "/emojis" },
];

const onH1TypingDone = (): void => {
  showP1.value = true;
};

const onP1TypingDone = (): void => {
  showP2.value = true;
};

const onP2TypingDone = (): void => {
  showButtons.value = true;
};

// Transitions
const beforeEnter = (el: any): void => {
  el.style.opacity = "0";
  el.style.transform = "translateX(100%)";
};

const enter = (el: any, done: Function): void => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    delay: el.dataset.index * 0.2,
  });
};

getSectionText();
</script>

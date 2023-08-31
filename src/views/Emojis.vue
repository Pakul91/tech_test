<template>
  <Navbar
    :buttonName="'Home'"
    :placeholder="'Search Emojis'"
    @searchInput="onSearchInput"
    @backButtonClicked="onBackButtonClick"
  />

  <div class="container">
    <TypeWriter
      :className="'paragraph text-center px-2 py-3 py-md-5 text-theme3'"
      style="font-size: clamp(1.25rem, 4vw, 2rem)"
      :ariaLabel="'Users List'"
      :element="'p'"
      :text="[
        `Emojis? Certainly not! They're the tiny but powerful tools that developers wield to convey the most intricate concepts.`,
      ]"
      :speed="10"
    />
  </div>

  <div
    v-if="emojis"
    class="container position-relative overflow-hidden"
    data-testId="usersCardHolder"
  >
    <transition-group
      appear
      class="row row-cols-2 row-cols-md-3 row-cols-xxl-4 g-4"
      name="slide"
      tag="section"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <EmojiCard
        v-for="(emoji, index) in emojis"
        :key="emoji.id"
        :data="emoji"
        :data-index="index"
        :type="'emoji'"
      />
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useDataStore } from "@/stores/DataStore";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import TypeWriter from "@/components/TypeWriter.vue";
import Navbar from "@/components/Navbar.vue";
import EmojiCard from "@/components/EmojiCard.vue";
import { gsap } from "gsap";

const { getEmojis } = useDataStore();
const router = useRouter();

const { emojisData } = storeToRefs(useDataStore());
const searchQuery = ref<string>("");

const emojis = computed(() => {
  const filtered = emojisData?.value.filter((emoji) =>
    emoji.name?.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  return filtered.slice(0, 100);
});

const onSearchInput = (value: string) => {
  searchQuery.value = value;
};

const onBackButtonClick = () => {
  router.push({ path: "/" });
};

// GSAP animation
const beforeEnter = (el: any) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(100px)";
};

const enter = (el: any) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: el.dataset.index * 0.02,
  });
};

getEmojis();
</script>
<style scoped>
.slide-move,
.list-leave-active {
  transition: all 0.5s ease;
}
</style>

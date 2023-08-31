<template>
  <Navbar
    :buttonName="'Home'"
    :placeholder="'Search Users'"
    :dropdownItems="sortByOptions"
    @searchInput="onSearchInput"
    @backButtonClicked="onBackButtonClick"
    @dropdownItemClicked="onDropdownItemClicked"
  />

  <div class="container">
    <TypeWriter
      :className="'paragraph text-center px-2 py-3 py-md-5 text-theme3'"
      style="font-size: clamp(1.25rem, 4vw, 2rem)"
      :ariaLabel="'Users List'"
      :element="'p'"
      :text="[
        `Behold GitHub's intrepid explorers, charting users!`,
        `A tribe of pioneers navigating code realms with keystrokes and courage!`,
      ]"
      :speed="10"
    />
  </div>
  <div
    v-if="usersData"
    class="container position-relative"
    data-testId="usersCardHolder"
  >
    <transition-group
      appear
      class="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4"
      name="slide"
      tag="section"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <Card
        v-for="(user, index) in usersData"
        :key="user.id"
        :data="user"
        :data-index="index"
        :type="'user'"
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
import Card from "@/components/Card.vue";
import Navbar from "@/components/Navbar.vue";
import { gsap } from "gsap";
import { type SortOption } from "@/customTypes/index";
import { sortArray } from "@/utils/Helpers";

const { getUsersData } = useDataStore();
const router = useRouter();

const sortby = ref<SortOption | null>(null);

const sortByOptions: Array<SortOption> = [
  {
    name: "Followers Ascending",
    key: "followers",
    direction: "ascending",
  },
  {
    name: "Followers Descending",
    key: "followers",
    direction: "descending",
  },
  { name: "Repos Ascending", key: "public_repos", direction: "ascending" },
  { name: "Repos Descending", key: "public_repos", direction: "descending" },
  { name: "Joined Ascending", key: "created_at", direction: "ascending" },
  { name: "Joined Descending", key: "created_at", direction: "descending" },
];

const { detailedUsersData } = storeToRefs(useDataStore());
const searchQuery = ref<string>("");

const usersData = computed(() => {
  const filtered = detailedUsersData?.value.filter(
    (user) =>
      user.login.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.name?.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  if (sortby.value) {
    return sortArray(filtered, sortby.value);
  }

  return filtered;
});

const onSearchInput = (value: string) => {
  searchQuery.value = value;
};

const onBackButtonClick = () => {
  router.push({ path: "/" });
};

const onDropdownItemClicked = (item: SortOption) => {
  sortby.value = item;
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

getUsersData();
</script>
<style scoped>
.slide-move,
.list-leave-active {
  transition: all 0.5s ease;
}
</style>

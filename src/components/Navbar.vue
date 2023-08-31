<template>
  <nav class="navbar bg-dark px-2 py-3">
    <div class="btn btn-outline-theme3" @click="onButtonClick">
      <i class="bi bi-chevron-left"></i>
      <span class="d-none d-sm-inline px-4">{{ buttonName }}</span>
    </div>

    <div class="d-flex justify-content-end w-75">
      <Dropdown
        v-if="dropdownItems"
        :dropdownItems="dropdownItems"
        @dropdownItemClicked="onDropdownItemClicked"
      ></Dropdown>

      <form class="d-flex" role="search">
        <div class="input-group border-theme1">
          <span class="input-group-text bg-theme1" id="basic-addon1">
            <i class="bi bi-search text-theme3"></i
          ></span>
          <input
            type="text"
            class="form-control shadow-none"
            :placeholder="placeholder"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="searchQuery"
            @input="onInput"
          />
        </div>
      </form>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type SortOption } from "@/customTypes/index";
import Dropdown from "./Dropdown.vue";

defineProps({
  buttonName: {
    type: String,
    default: "Back",
  },
  placeholder: {
    type: String,
    default: "search",
  },
  dropdownItems: {
    type: Array<SortOption>,
    default: null,
  },
});

const emit = defineEmits<{
  (e: "searchInput", value: string): void;
  (e: "dropdownItemClicked", value: SortOption): void;
  (e: "backButtonClicked"): void;
}>();

const searchQuery = ref<string>("");

function onInput() {
  emit("searchInput", searchQuery.value);
}

const onDropdownItemClicked = (item: SortOption) => {
  emit("dropdownItemClicked", item);
};

function onButtonClick() {
  emit("backButtonClicked");
}
</script>

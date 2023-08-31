<template>
  <div class="dropdown">
    <div
      class="btn btn-outline-theme3 border-theme3 me-1"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      aria-label="toggle dropdown"
    >
      <i class="bi bi-sort-up-alt"></i>
    </div>
    <ul class="dropdown-menu">
      <li v-for="item in dropdownItems" :key="item.name" role="button">
        <a
          :class="['dropdown-item', { active: optionSelected === item.name }]"
          @click="dropdownItemClicked(item)"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type SortOption } from "@/customTypes/index";

const props = defineProps({
  dropdownItems: {
    type: Array<SortOption>,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "dropdownItemClicked", value: SortOption): void;
}>();

const optionSelected = ref<String | null>(null);

const dropdownItemClicked = (item: SortOption) => {
  optionSelected.value = item.name;
  emit("dropdownItemClicked", item);
};
</script>

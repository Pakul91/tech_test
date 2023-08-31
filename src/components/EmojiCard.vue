<template>
  <div class="col">
    <div
      @mouseenter="setHighlight(true)"
      @mouseleave="setHighlight(false)"
      :class="[
        'card bg-theme2 text-theme3 shadow d-flex justify-content-center ',
        { 'shadow-lg': highlight },
      ]"
      style="transition: all 250ms ease-in"
    >
      <div class="d-flex justify-content-center pt-3">
        <img
          class="image-thumbnail"
          :src="data.url"
          :alt="`${data.name} emoji`"
        />
      </div>
      <div>
        <p class="text-center mt-2" style="font-size: clamp(1rem, 4vw, 1.5rem)">
          {{ data.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type Emoji } from "@/customTypes";

defineProps<{
  data: Emoji;
}>();

const highlight = ref<boolean>(false);

const setHighlight = (value: boolean) => {
  highlight.value = value;
};
</script>

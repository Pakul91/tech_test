<template>
  <component
    :is="element"
    :aria-label="ariaLabel"
    :class="className"
    style="white-space: break-spaces"
    >{{ typedText }}{{ isTyping ? "_" : "" }}</component
  >
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  element: {
    type: String,
    required: true,
  },
  ariaLabel: {
    type: String,
    required: true,
  },
  text: {
    type: Array<String>,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  speed: {
    type: Number,
    default: 100,
  },
  delay: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits<{ (e: "typingDone"): void }>();

onMounted(() => {
  if (!Array.isArray(props.text)) {
    textToType.value = [props.text];
  }
  setTimeout(typewriter, props.delay);
});

const textToType = ref<String[]>(props.text);
const typedText = ref<String>(``);
const isTyping = ref<Boolean>(true);

let rowIndex = 0;
let textArrayLenght = props.text[0].length;
let characterIndex = 0;
let stringContents = "";

function onTypingDone() {
  isTyping.value = false;
  emit("typingDone");
}

function typewriter() {
  if (rowIndex >= props.text.length) {
    onTypingDone();
    return;
  }

  if (rowIndex < props.text.length) {
    if (characterIndex <= props.text[rowIndex].length) {
      typedText.value =
        stringContents + props.text[rowIndex].substring(0, characterIndex);
      characterIndex++;
    } else {
      characterIndex = 0;
      rowIndex++;

      if (rowIndex < props.text.length && rowIndex) {
        textArrayLenght = props.text[rowIndex].length;
        stringContents += props.text[rowIndex - 1] + "\n";
      }
    }
  }

  setTimeout(typewriter, characterIndex <= textArrayLenght ? props.speed : 100);
}
</script>

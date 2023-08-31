<template>
  <div class="col">
    <div
      @mouseenter="setHighlight(true)"
      @mouseleave="setHighlight(false)"
      :class="[
        'card h-100 bg-theme2 text-theme3 shadow overflow-hidden',
        { 'shadow-lg': highlight },
      ]"
      style="transition: all 250ms ease-in"
    >
      <div class="row px-0">
        <div class="col-4 col-md-5">
          <img
            :src="data.avatar_url"
            class="img-fluid rounded-start"
            alt="User card"
          />
        </div>
        <div class="col-8 col-md-7 ps-0 pe-3">
          <div class="card-body px-0 py-2 h-100">
            <h5 class="card-title text-white">{{ data.login }}</h5>
            <div class="card-text d-flex flex-column fs-6">
              <span v-if="type === 'user'">{{ data.name }}</span>
              <span>{{ data?.email }}</span>
              <span class="text-primary"
                >{{ data.followers }}
                <span class="text-theme3">followers</span></span
              >
              <span class="text-primary"
                >{{ data.public_repos }}
                <span class="text-theme3">repos</span></span
              >
              <small v-if="type === 'user'" class="text-muted"
                >Joined {{ new Date(data.created_at).toDateString() }}</small
              >
              <a
                v-if="type === 'organisation'"
                target="_blank"
                :href="data.html_url"
                class="link-primary text-truncate"
                >{{ data.html_url }}</a
              >

              <a
                v-if="type === 'organisation'"
                target="_blank"
                :href="data.blog"
                class="link-primary text-truncate"
                >{{ data.blog }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type DetailedUser, type DetailedOrganisation } from "@/customTypes";

defineProps<{
  data: DetailedUser | DetailedOrganisation;
  type: "user" | "organisation";
}>();

const highlight = ref<boolean>(false);

const setHighlight = (value: boolean) => {
  highlight.value = value;
};
</script>

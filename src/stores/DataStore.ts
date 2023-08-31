import { defineStore } from "pinia";
import {
  type User,
  type DetailedUser,
  type Organisation,
  type DetailedOrganisation,
  type Emoji,
} from "@/customTypes/index";
import detailedUsers from "@/data/detailedUsers.json";
import detailedOrganisations from "@/data/detailedOrganisations.json";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const usersData = ref<User[] | null>(null);
  const detailedUsersData = ref<DetailedUser[]>([]);

  const organisationsData = ref<Organisation[] | null>(null);
  const detailedOrganisationsData = ref<DetailedOrganisation[]>([]);

  const emojisData = ref<Emoji[]>([]);

  const getSecureHeaders = (): any => {
    // I know I know... I'm going to remove it right after the demo
    const token = "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";

    return {
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    };
  };

  const getUsersData = async (): Promise<void> => {
    if (detailedUsersData.value.length) return;

    if (!usersData.value) {
      const response = await fetch(
        `https://api.github.com/users?per_page=${
          import.meta.env.VITE_GITHUB_TOKEN ? "100" : "20"
        }`,
        {
          method: "GET",
          headers: getSecureHeaders(),
        }
      );

      if (!response.ok) return;

      usersData.value = await response.json();
    }
    getDetailedUsersData();
  };

  const getDetailedUsersData = async (): Promise<void> => {
    if (!usersData.value) return;

    const detailedUsersPromises = usersData.value?.map(async (user) => {
      const response = await fetch(
        `https://api.github.com/users/${user.login}`,
        {
          method: "GET",
          headers: getSecureHeaders(),
        }
      );
      return await response.json();
    });

    detailedUsersData.value = (await Promise.all(
      detailedUsersPromises
    )) as DetailedUser[];
  };

  const getOrganisationData = async (): Promise<void> => {
    if (detailedOrganisationsData.value.length) return;

    if (!organisationsData.value) {
      const response = await fetch(
        `https://api.github.com/organizations?per_page=${
          import.meta.env.VITE_GITHUB_TOKEN ? "100" : "20"
        }`,
        {
          method: "GET",
          headers: getSecureHeaders(),
        }
      );

      if (!response.ok) return;

      organisationsData.value = await response.json();
    }

    getDetailedOrganisationsData();
  };

  const getDetailedOrganisationsData = async (): Promise<void> => {
    if (!organisationsData.value) return;

    const detailedOrgPromises = organisationsData.value.map(async (org) => {
      const response = await fetch(`https://api.github.com/orgs/${org.login}`, {
        method: "GET",
        headers: getSecureHeaders(),
      });
      return await response.json();
    });

    detailedOrganisationsData.value = (await Promise.all(
      detailedOrgPromises
    )) as DetailedOrganisation[];
  };

  const getEmojis = async (): Promise<void> => {
    if (emojisData.value.length) return;

    const response = await fetch(
      `https://api.github.com/emojis?per_page=${
        import.meta.env.VITE_GITHUB_TOKEN ? "100" : "20"
      }`,
      {
        method: "GET",
        headers: getSecureHeaders(),
      }
    );

    if (!response.ok) return;

    const data = await response.json();

    emojisData.value = Object.entries(data).map((entry, index) => ({
      name: entry[0] as string,
      url: entry[1] as string,
      id: index,
    }));
  };

  return {
    detailedUsersData,
    detailedOrganisationsData,
    emojisData,
    getUsersData,
    getOrganisationData,
    getEmojis,
  };
});

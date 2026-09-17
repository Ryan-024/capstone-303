<template>
  <v-app>
    <v-app-bar flat density="comfortable" color="background" scroll-behavior="elevate">
      <template #prepend>
        <v-avatar size="36" color="primary" class="ms-2">
          <v-icon size="22" color="white">mdi-lightning-bolt</v-icon>
        </v-avatar>
      </template>

      <v-app-bar-title class="font-weight-bold">
        Content Buddy
      </v-app-bar-title>

      <template #append>
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              variant="tonal"
              size="small"
              class="me-2 d-none d-sm-inline-flex"
              v-bind="props"
              append-icon="mdi-chevron-down"
            >
              {{ selectedMonth.month }} {{ selectedMonth.year }}
            </v-btn>
            <v-btn
              icon
              size="small"
              variant="tonal"
              class="me-2 d-inline-flex d-sm-none"
              v-bind="props"
            >
              <v-icon>mdi-calendar</v-icon>
            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item
              v-for="(m, i) in data.months"
              :key="m.month"
              :active="i === selectedIndex"
              @click="selectedIndex = i"
            >
              <v-list-item-title>{{ m.month }} {{ m.year }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          icon
          variant="text"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="pb-16" max-width="1200">
        <HighsAndLows :data="selectedMonth.contentFeedOverview" />
        <SubscriptionManagement :data="selectedMonth.subscriptionManagement" />
        <UploadQueue :queue="selectedMonth.uploadQueue" />
        <EngagementSummary :data="selectedMonth.engagementSummary" />
        <TrendingSection :data="selectedMonth.trending" />

        <p class="text-caption text-medium-emphasis text-center mt-10 mb-4">
          Content Buddy · {{ selectedMonth.month }} {{ selectedMonth.year }} snapshot
        </p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
import raw from './datametrics.json'
import type { DataMetrics } from './types'
import HighsAndLows from './components/HighsAndLows.vue'
import SubscriptionManagement from './components/SubscriptionManagement.vue'
import UploadQueue from './components/UploadQueue.vue'
import EngagementSummary from './components/EngagementSummary.vue'
import TrendingSection from './components/TrendingSection.vue'

const data = raw as DataMetrics
const selectedIndex = ref(data.months.length - 1)
const selectedMonth = computed(() => data.months[selectedIndex.value])

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<style>
html, body, #app { background: rgb(var(--v-theme-background)); }
.section-title {
  font-weight: 700;
  letter-spacing: -0.01em;
}
.section-subtitle {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.85rem;
}
.soft-card {
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgba(255, 255, 255, 0.04);
}
.v-theme--light .soft-card {
  border-color: rgba(0, 0, 0, 0.06);
}
</style>

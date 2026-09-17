<template>
  <section class="mb-8">
    <div class="d-flex align-end justify-space-between mb-3">
      <div>
        <h2 class="section-title text-h6">Trending</h2>
        <p class="section-subtitle ma-0">What's moving right now</p>
      </div>
    </div>

    <v-tabs v-model="tab" density="compact" color="primary" class="mb-3" grow>
      <v-tab value="topics">
        <v-icon start size="16">mdi-fire</v-icon>Topics
      </v-tab>
      <v-tab value="hashtags">
        <v-icon start size="16">mdi-pound</v-icon>Hashtags
      </v-tab>
      <v-tab value="music">
        <v-icon start size="16">mdi-music</v-icon>Music
      </v-tab>
    </v-tabs>

    <v-card class="soft-card" elevation="0">
      <v-window v-model="tab">
        <v-window-item value="topics">
          <v-list bg-color="transparent">
            <template v-for="(t, i) in data.topics" :key="t.id">
              <v-list-item class="py-2">
                <template #prepend>
                  <div class="rank me-2">{{ i + 1 }}</div>
                </template>
                <v-list-item-title class="text-body-2 font-weight-medium">
                  {{ t.topic }}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1">
                  <v-chip size="x-small" variant="tonal" color="primary" label class="me-2">
                    {{ t.category }}
                  </v-chip>
                  <span class="text-caption text-medium-emphasis">
                    {{ formatCompact(t.volume) }} posts
                  </span>
                </v-list-item-subtitle>
                <template #append>
                  <ChangeIndicator :change="t.change" />
                </template>
              </v-list-item>
              <v-divider v-if="i < data.topics.length - 1" class="mx-4" />
            </template>
          </v-list>
        </v-window-item>

        <v-window-item value="hashtags">
          <v-list bg-color="transparent">
            <template v-for="(h, i) in data.hashtags" :key="h.id">
              <v-list-item class="py-2">
                <template #prepend>
                  <div class="rank me-2">{{ i + 1 }}</div>
                </template>
                <v-list-item-title class="text-body-2 font-weight-medium">
                  {{ h.tag }}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1 text-caption text-medium-emphasis">
                  {{ formatCompact(h.posts) }} posts
                </v-list-item-subtitle>
                <template #append>
                  <ChangeIndicator :change="h.change" />
                </template>
              </v-list-item>
              <v-divider v-if="i < data.hashtags.length - 1" class="mx-4" />
            </template>
          </v-list>
        </v-window-item>

        <v-window-item value="music">
          <v-list bg-color="transparent">
            <template v-for="(m, i) in data.music" :key="m.id">
              <v-list-item class="py-2">
                <template #prepend>
                  <v-avatar size="36" color="surface-variant" class="me-1">
                    <v-icon size="18">mdi-music-note</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-body-2 font-weight-medium">
                  {{ m.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="mt-1 text-caption text-medium-emphasis">
                  {{ m.artist }} · {{ formatCompact(m.uses) }} uses
                </v-list-item-subtitle>
                <template #append>
                  <ChangeIndicator :change="m.change" />
                </template>
              </v-list-item>
              <v-divider v-if="i < data.music.length - 1" class="mx-4" />
            </template>
          </v-list>
        </v-window-item>
      </v-window>
    </v-card>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Trending } from '../types'
import { formatCompact } from '../utils/format'
import ChangeIndicator from './ChangeIndicator.vue'

defineProps<{ data: Trending }>()
const tab = ref<'topics' | 'hashtags' | 'music'>('topics')
</script>

<style scoped>
.rank {
  width: 24px;
  text-align: center;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 13px;
}
</style>

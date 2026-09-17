<template>
  <section class="mb-8">
    <div class="d-flex align-end justify-space-between mb-3">
      <div>
        <h2 class="section-title text-h6">Engagement</h2>
        <p class="section-subtitle ma-0">Top comments to respond to</p>
      </div>
      <v-chip size="small" variant="tonal" color="accent">
        {{ data.topComments.length }} pending
      </v-chip>
    </div>

    <v-card class="soft-card" elevation="0">
      <v-list bg-color="transparent" lines="three">
        <template v-for="(c, i) in data.topComments" :key="c.id">
          <v-list-item class="py-3">
            <template #prepend>
              <v-avatar size="40" class="me-1">
                <v-img :src="c.avatar" :alt="c.author" />
              </v-avatar>
            </template>

            <div class="d-flex align-center flex-wrap ga-2 mb-1">
              <span class="text-body-2 font-weight-bold">{{ c.author }}</span>
              <v-chip
                size="x-small"
                variant="tonal"
                :color="priorityColor(c.priority)"
                label
              >
                {{ c.priority }}
              </v-chip>
              <span class="text-caption text-medium-emphasis">
                · {{ relativeTime(c.timestamp) }}
              </span>
            </div>

            <div class="text-body-2 mb-1 comment-body">"{{ c.comment }}"</div>

            <div class="d-flex align-center ga-3 text-caption text-medium-emphasis">
              <span class="d-flex align-center">
                <v-icon size="14" class="me-1">mdi-heart</v-icon>
                {{ formatCompact(c.likes) }}
              </span>
              <span class="text-truncate">on "{{ c.postTitle }}"</span>
            </div>

            <template #append>
              <v-btn
                icon
                size="small"
                variant="tonal"
                color="primary"
                :aria-label="`Reply to ${c.author}`"
              >
                <v-icon size="18">mdi-reply</v-icon>
              </v-btn>
            </template>
          </v-list-item>
          <v-divider v-if="i < data.topComments.length - 1" class="mx-4" />
        </template>
      </v-list>
    </v-card>
  </section>
</template>

<script setup lang="ts">
import type { EngagementSummary as ES, CommentItem } from '../types'
import { formatCompact, relativeTime } from '../utils/format'

defineProps<{ data: ES }>()

function priorityColor(p: CommentItem['priority']): string {
  return p === 'high' ? 'error' : p === 'medium' ? 'warning' : 'info'
}
</script>

<style scoped>
.comment-body {
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.4;
}
</style>

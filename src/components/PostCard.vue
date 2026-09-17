<template>
  <v-card class="soft-card h-100" elevation="0">
    <div class="thumb-wrap">
      <v-img :src="post.thumbnail" :aspect-ratio="16 / 9" cover>
        <div class="thumb-overlay">
          <v-chip
            size="x-small"
            variant="flat"
            :color="platformColor"
            class="platform-chip"
            label
          >
            <v-icon start size="14">{{ platformIcon }}</v-icon>
            {{ post.platform }}
          </v-chip>
          <v-chip
            size="x-small"
            variant="flat"
            :color="trend === 'up' ? 'success' : 'error'"
            label
            class="trend-chip"
          >
            <v-icon start size="14">
              {{ trend === 'up' ? 'mdi-trending-up' : 'mdi-trending-down' }}
            </v-icon>
            {{ post.vsAverage > 0 ? '+' : '' }}{{ post.vsAverage }}%
          </v-chip>
        </div>
      </v-img>
    </div>

    <v-card-text class="pa-3">
      <div class="text-body-2 font-weight-medium text-truncate-2 mb-2" :title="post.title">
        {{ post.title }}
      </div>
      <div class="d-flex align-center flex-wrap ga-3 text-caption text-medium-emphasis">
        <span class="d-flex align-center">
          <v-icon size="14" class="me-1">mdi-eye-outline</v-icon>
          {{ formatCompact(post.views) }}
        </span>
        <span class="d-flex align-center">
          <v-icon size="14" class="me-1">mdi-heart-outline</v-icon>
          {{ formatCompact(post.likes) }}
        </span>
        <span class="d-flex align-center">
          <v-icon size="14" class="me-1">mdi-comment-outline</v-icon>
          {{ formatCompact(post.comments) }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from '../types'
import { colorForPlatform, formatCompact, iconForPlatform } from '../utils/format'

const props = defineProps<{ post: Post; trend: 'up' | 'down' }>()

const platformIcon = computed(() => iconForPlatform(props.post.platform))
const platformColor = computed(() => colorForPlatform(props.post.platform))
</script>

<style scoped>
.thumb-wrap { position: relative; }
.thumb-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  pointer-events: none;
}
.platform-chip, .trend-chip {
  pointer-events: auto;
  color: #fff !important;
  backdrop-filter: blur(6px);
}
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.25;
  min-height: 2.5em;
}
</style>

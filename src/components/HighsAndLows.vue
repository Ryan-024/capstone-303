<template>
  <section class="mb-8">
    <div class="d-flex align-end justify-space-between mb-3">
      <div>
        <h2 class="section-title text-h6">Highs & Lows</h2>
        <p class="section-subtitle ma-0">This month's over &amp; under performers</p>
      </div>
      <v-chip size="small" variant="tonal" color="primary">
        <v-icon start size="16">mdi-chart-line</v-icon>
        4 posts
      </v-chip>
    </div>

    <div class="mb-2 d-flex align-center">
      <v-icon size="16" color="success" class="me-1">mdi-arrow-up-bold</v-icon>
      <span class="text-caption font-weight-medium">Over performing</span>
    </div>
    <v-row dense>
      <v-col v-for="post in data.overPerforming" :key="post.id" cols="6">
        <PostCard :post="post" trend="up" />
      </v-col>
    </v-row>

    <div class="mt-4 mb-2 d-flex align-center">
      <v-icon size="16" color="error" class="me-1">mdi-arrow-down-bold</v-icon>
      <span class="text-caption font-weight-medium">Under performing</span>
    </div>
    <v-row dense>
      <v-col v-for="post in data.underPerforming" :key="post.id" cols="6">
        <PostCard :post="post" trend="down" />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import type { ContentFeedOverview } from '../types'
import PostCard from './PostCard.vue'

defineProps<{ data: ContentFeedOverview }>()
</script>

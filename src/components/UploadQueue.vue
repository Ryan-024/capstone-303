<template>
  <section class="mb-8">
    <div class="d-flex align-end justify-space-between mb-3">
      <div>
        <h2 class="section-title text-h6">Upload Queue</h2>
        <p class="section-subtitle ma-0">Next 5 scheduled posts</p>
      </div>
      <v-btn size="small" variant="tonal" color="primary" prepend-icon="mdi-plus">
        Schedule
      </v-btn>
    </div>

    <v-card class="soft-card" elevation="0">
      <v-list density="comfortable" bg-color="transparent">
        <template v-for="(item, i) in queue" :key="item.id">
          <v-list-item class="py-2">
            <template #prepend>
              <div class="date-badge me-3">
                <div class="dow">{{ dayOfWeek(item.scheduledDate) }}</div>
                <div class="day">{{ new Date(item.scheduledDate).getDate() }}</div>
              </div>
            </template>

            <v-list-item-title class="text-body-2 font-weight-medium">
              {{ item.title }}
            </v-list-item-title>

            <v-list-item-subtitle class="mt-1 d-flex align-center flex-wrap ga-2">
              <v-chip
                size="x-small"
                variant="flat"
                :color="colorForPlatform(item.platform)"
                label
                class="platform-chip"
              >
                <v-icon start size="12">{{ iconForPlatform(item.platform) }}</v-icon>
                {{ item.platform }}
              </v-chip>
              <span class="text-caption text-medium-emphasis text-capitalize">
                {{ item.type }}
              </span>
            </v-list-item-subtitle>

            <template #append>
              <v-chip
                size="x-small"
                :color="statusColor(item.status)"
                variant="tonal"
                label
              >
                {{ statusLabel(item.status) }}
              </v-chip>
            </template>
          </v-list-item>
          <v-divider v-if="i < queue.length - 1" class="mx-4" />
        </template>
      </v-list>
    </v-card>
  </section>
</template>

<script setup lang="ts">
import type { QueueItem } from '../types'
import { colorForPlatform, dayOfWeek, iconForPlatform } from '../utils/format'

defineProps<{ queue: QueueItem[] }>()

function statusColor(status: QueueItem['status']): string {
  switch (status) {
    case 'scheduled': return 'success'
    case 'draft': return 'warning'
    case 'in-review': return 'info'
    default: return 'grey'
  }
}
function statusLabel(status: QueueItem['status']): string {
  switch (status) {
    case 'in-review': return 'In review'
    default: return status.charAt(0).toUpperCase() + status.slice(1)
  }
}
</script>

<style scoped>
.date-badge {
  min-width: 44px;
  text-align: center;
  padding: 6px 8px;
  border-radius: 12px;
  background: rgb(var(--v-theme-surface-variant));
  line-height: 1;
}
.date-badge .dow {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgb(var(--v-theme-on-surface-variant));
}
.date-badge .day {
  font-size: 18px;
  font-weight: 700;
  margin-top: 2px;
}
.platform-chip {
  color: #fff !important;
}
</style>

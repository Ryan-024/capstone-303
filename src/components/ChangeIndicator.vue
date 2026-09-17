<template>
  <div class="d-flex align-center">
    <v-icon
      size="16"
      :color="positive ? 'success' : 'error'"
      class="me-1"
    >
      {{ positive ? 'mdi-trending-up' : 'mdi-trending-down' }}
    </v-icon>
    <span
      :class="positive ? 'text-success' : 'text-error'"
      class="text-caption font-weight-medium"
    >
      {{ change > 0 ? '+' : '' }}{{ change }}%
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ change: number }>()
const positive = computed(() => props.change >= 0)
</script>

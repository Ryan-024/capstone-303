<template>
  <v-card class="soft-card h-100 pa-4" elevation="0">
    <div class="d-flex align-center mb-2">
      <v-avatar size="32" color="surface-variant" class="me-2">
        <v-icon size="18">{{ icon }}</v-icon>
      </v-avatar>
      <span class="text-caption text-medium-emphasis">{{ label }}</span>
    </div>

    <div class="text-h5 font-weight-bold">{{ value }}</div>

    <div class="mt-2 d-flex align-center text-caption">
      <v-icon
        size="16"
        :color="deltaPositive ? 'success' : 'error'"
        class="me-1"
      >
        {{ deltaPositive ? 'mdi-arrow-up-bold' : 'mdi-arrow-down-bold' }}
      </v-icon>
      <span :class="deltaPositive ? 'text-success' : 'text-error'" class="font-weight-medium me-1">
        {{ formatSigned(delta) }}
      </span>
      <span class="text-medium-emphasis">{{ deltaLabel }}</span>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatSigned } from '../utils/format'

const props = defineProps<{
  label: string
  icon: string
  value: string
  delta: number
  deltaLabel: string
  /** When true, a positive delta is a bad thing (e.g. lost subscribers) */
  inverse?: boolean
}>()

const deltaPositive = computed(() => {
  const goingUp = props.delta >= 0
  return props.inverse ? !goingUp : goingUp
})
</script>

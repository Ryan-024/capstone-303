<template>
  <section class="mb-8">
    <div class="d-flex align-end justify-space-between mb-3">
      <div>
        <h2 class="section-title text-h6">Subscriptions</h2>
        <p class="section-subtitle ma-0">Growth vs. previous month</p>
      </div>
    </div>

    <v-row dense>
      <v-col cols="6" sm="6">
        <MetricCard
          label="Total Subscribers"
          icon="mdi-account-group"
          :value="formatCompact(data.totalSubscribers)"
          :delta="data.vsPreviousMonth.totalSubscribersDelta"
          delta-label="vs last month"
        />
      </v-col>
      <v-col cols="6" sm="6">
        <MetricCard
          label="New This Month"
          icon="mdi-account-plus"
          :value="formatCompact(data.newSubscribers)"
          :delta="data.vsPreviousMonth.newSubscribersDelta"
          delta-label="vs last month"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import type { SubscriptionManagement as SM } from '../types'
import MetricCard from './MetricCard.vue'
import { formatCompact } from '../utils/format'

defineProps<{ data: SM }>()
</script>

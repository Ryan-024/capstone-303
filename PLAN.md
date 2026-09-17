# Mobile Experience - Content Analytics and Management

## What is this?
A mobile first responsive website. One page layout.
Think social media analytics dashboard and Content Planning mashed together

## Data
Generate a fake dataset as a JSON file (src/datametrics.json).
12 months of data (Jan-Dec 2025), each month containing:

- Content Feed Overview
    - Over preforming and under preforming
- Subscription management 
    - Subscription ups and downs 
- Upload Queue
    - Queue of content to be posted on future dates
- Engagement Summary
    - Top comments to respond to
- Trending
    - trending topics
    - hashtags
    - music 

## Layout (Vuetify)

- V-app-bar at the top with Content Buddy 
- Content Feed Overview (Call it Highs and Lows) a set of 4 post overviews 2x2
    - Top 2 content posts that are over performing
    - Under that 2 content posts that are under performing
- Subscription Management 3 cards next to each other
    - Total Subscribers
    - New Subscribers this month (with up or down from last month)
    - Lost Subscribers
- Upload queue
    - Show a queue of 5 post scheduled to go out each day over the next week
- Engagement Summary
    - Top 5 comments to respond to
- Use v-container, v-row, v-col for responsive grid layout

## Interactions
- Cards show show a small up/down arrow or color indicating change from previous month

## Style
- Dark theme by default (Vuetify dark theme) toggle in the top right app bar for light and dark mode
- Clean, minimal, lots of whitespace
- Charts should use a cohesive color palette - not rainbow
- Mobile responsive - cards stack on small screens

## Tech
- Vue 3 + TypeScript + Vuetify 3
- Chart.js via vue-chartjs for all charts
- Fake data from a local JSON file (no API calls)
- Single page - no routing needed for this app
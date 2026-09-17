export type Platform = 'YouTube' | 'Instagram' | 'TikTok' | 'X' | 'Substack'

export interface Post {
  id: string
  title: string
  platform: Platform
  publishedDate: string
  thumbnail: string
  views: number
  likes: number
  comments: number
  shares: number
  engagementRate: number
  vsAverage: number
}

export interface ContentFeedOverview {
  overPerforming: Post[]
  underPerforming: Post[]
}

export interface SubscriptionManagement {
  totalSubscribers: number
  newSubscribers: number
  lostSubscribers: number
  netChange: number
  vsPreviousMonth: {
    totalSubscribersDelta: number
    newSubscribersDelta: number
    lostSubscribersDelta: number
    trend: 'up' | 'down' | 'flat'
  }
}

export interface QueueItem {
  id: string
  title: string
  platform: Platform
  scheduledDate: string
  status: 'scheduled' | 'draft' | 'in-review'
  type: string
}

export interface CommentItem {
  id: string
  author: string
  avatar: string
  postTitle: string
  comment: string
  likes: number
  timestamp: string
  priority: 'high' | 'medium' | 'low'
}

export interface TopContent {
  id: string
  title: string
  platform: Platform
  views: number
  engagementRate: number
}

export interface EngagementSummary {
  topComments: CommentItem[]
  topPerformingContent: TopContent[]
}

export interface TrendingTopic {
  id: string
  topic: string
  volume: number
  change: number
  category: string
}

export interface TrendingHashtag {
  id: string
  tag: string
  posts: number
  change: number
}

export interface TrendingMusic {
  id: string
  title: string
  artist: string
  uses: number
  change: number
}

export interface Trending {
  topics: TrendingTopic[]
  hashtags: TrendingHashtag[]
  music: TrendingMusic[]
}

export interface MonthData {
  month: string
  year: number
  monthIndex: number
  contentFeedOverview: ContentFeedOverview
  subscriptionManagement: SubscriptionManagement
  uploadQueue: QueueItem[]
  engagementSummary: EngagementSummary
  trending: Trending
}

export interface DataMetrics {
  months: MonthData[]
}

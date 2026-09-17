const platformIcons: Record<string, string> = {
  YouTube: 'mdi-youtube',
  Instagram: 'mdi-instagram',
  TikTok: 'mdi-music-note',
  X: 'mdi-alpha-x-circle',
  Substack: 'mdi-email-newsletter'
}

const platformColors: Record<string, string> = {
  YouTube: '#ff5c5c',
  Instagram: '#e879f9',
  TikTok: '#22d3ee',
  X: '#a5b4fc',
  Substack: '#fbbf24'
}

export function iconForPlatform(platform: string): string {
  return platformIcons[platform] ?? 'mdi-web'
}

export function colorForPlatform(platform: string): string {
  return platformColors[platform] ?? '#7c5cff'
}

export function formatCompact(n: number): string {
  if (Math.abs(n) >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (Math.abs(n) >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'
  return n.toLocaleString()
}

export function formatSigned(n: number): string {
  const s = formatCompact(Math.abs(n))
  return `${n >= 0 ? '+' : '-'}${s}`
}

export function relativeTime(iso: string): string {
  const then = new Date(iso).getTime()
  const now = Date.now()
  const diff = Math.max(0, now - then)
  const min = Math.floor(diff / 60000)
  if (min < 60) return `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}h ago`
  const d = Math.floor(hr / 24)
  if (d < 30) return `${d}d ago`
  const mo = Math.floor(d / 30)
  if (mo < 12) return `${mo}mo ago`
  return `${Math.floor(mo / 12)}y ago`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export function dayOfWeek(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { weekday: 'short' })
}

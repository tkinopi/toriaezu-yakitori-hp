import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '炭火焼鳥 とりあえず | 福岡・今泉の本格炭火焼鳥',
  description: '福岡市中央区今泉にある炭火焼鳥「とりあえず」。厳選素材を備長炭で丁寧に焼き上げる、こだわりの一本をお届けします。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

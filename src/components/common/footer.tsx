import { SEO } from '@/lib/seo'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-accent px-8 py-4">
      <p className="text-[0.625rem] opacity-75">
        © {year} Copyright <span className="font-semibold">{SEO.name}</span>
      </p>
    </footer>
  )
}

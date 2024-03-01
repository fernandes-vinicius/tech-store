import { SEO } from '@/lib/seo'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-accent px-8 py-4 lg:py-5">
      <div className="lg:container">
        <p className="text-[0.625rem] opacity-60 lg:text-sm">
          © {year} Copyright <span className="font-semibold">{SEO.name}</span>
        </p>
      </div>
    </footer>
  )
}

import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  PackageIcon,
  PackageSearchIcon,
} from 'lucide-react'

import { TechStoreLogo } from '@/components/common/tech-store-logo'
import { Button } from '@/components/ui/button'

export function Sidebar() {
  return (
    <aside className="sticky left-0 top-0 flex w-full max-w-[300px] flex-col items-center gap-10 border-r bg-background p-8">
      <TechStoreLogo />

      <div className="flex w-full flex-col gap-3">
        <Button variant="outline" className="w-full justify-start gap-2">
          <LayoutDashboardIcon className="size-4" />
          Dashboard
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <PackageIcon className="size-4" />
          Produtos
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <ListOrderedIcon className="size-4" />
          Categorias
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <PackageSearchIcon className="size-4" />
          Pedidos
        </Button>
      </div>
    </aside>
  )
}

'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatCurrency, type ProductWithTotal } from '@/lib/utils'

type ProductWithTotalPriceAndCategory = ProductWithTotal & {
  category: {
    name: string
  }
}

interface ProductsTableProps {
  products: ProductWithTotalPriceAndCategory[]
}

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Preço Cheio</TableHead>
          <TableHead>Preço com Desconto</TableHead>
          <TableHead>Vendidos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>

            <TableCell>{product.category.name}</TableCell>

            <TableCell>{formatCurrency(Number(product.basePrice))}</TableCell>

            <TableCell>{formatCurrency(product.totalPrice)}</TableCell>

            <TableCell>{0}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

//import React from 'react'

const DataTable = <T,>({colums, data, rawKey, tableClassName,
    headerRawClassName, headerCellClassName, 
    bodyRowClassName, }:DataTableProps<T>) => {
    return (
        <Table className={cn('custom-scrollbar', tableClassName)}>
            
            <TableHeader className={headerRawClassName}>
                <TableRow className={cn('hover:bg-transparent',
                    headerRawClassName)}>
                        {colums.map((column, i) => (
                            <TableHead key={i} className={cn('bg-dark-400 text-purple-100 py-4 first:pl-5 last:pr-5')}>
                                {column.header}
                            </TableHead>
    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default DataTable
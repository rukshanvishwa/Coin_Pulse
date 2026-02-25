"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { buildPageNumbers } from "@/lib/utils";
import build from "next/dist/build";
import { useRouter } from "next/navigation";

const CoinsPagination = ({currentPage, totalPages, hasMorePages}:
    Pagination
) => {
const router=useRouter();
const handlePageChange=(page:number)=>{
    router.push(`/coins?page=${page}`);
}
const pageNumbers  = buildPageNumbers(currentPage, totalPages);
return (
  <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
  
)}

export default CoinsPagination
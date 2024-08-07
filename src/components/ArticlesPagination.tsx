"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

import { useSearchParams } from "next/navigation";

export default function ArticlesPagination({ total }: { total: number }) {
  const params = useSearchParams();
  const page = Number(params.get("page")) || 1;

  const articlesPerPage = 10;
  const totalPages = Math.ceil(total / articlesPerPage);

  const getPaginationNumbers = () => {
    let start = page - 1;
    if (start < 2) start = 2;
    let end = start + 2;
    if (end > totalPages) {
      end = totalPages;
      start = end - 2 > 1 ? end - 2 : 2;
    }
    return { start, end };
  };

  if (totalPages <= 1) return null;

  const { start, end } = getPaginationNumbers();

  return (
    <div className="mt-10">
      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`/blog?page=${page > 1 ? page - 1 : 1}`}
              />
            </PaginationItem>
          )}

          <PaginationItem className="rounded-xl bg-white">
            <PaginationLink href={`/blog?page=1`} isActive={page === 1}>
              1
            </PaginationLink>
          </PaginationItem>

          {start > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
            (p) => (
              <PaginationItem key={p}>
                <PaginationLink href={`/blog?page=${p}`} isActive={page === p}>
                  {p}
                </PaginationLink>
              </PaginationItem>
            ),
          )}

          {end < totalPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {page < totalPages && (
            <PaginationItem>
              <PaginationNext href={`/blog?page=${page + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

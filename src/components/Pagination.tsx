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
  const page = Number(params.get("page")) || 1; // Ensure page is at least 1 if not specified

  const articlesPerPage = 10; // Assuming you display 10 articles per page
  const totalPages = Math.ceil(total / articlesPerPage); // Calculate total pages

  // Helper function to calculate the range of numbers to display
  const getPaginationNumbers = () => {
    let start = page - 1;
    if (start < 2) start = 2; // Ensure it doesn't go below 2
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
          {page === 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`/articles?page=${page > 1 ? page - 1 : 1}`}
              />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink href={`/articles?page=1`} isActive={page === 1}>
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
                <PaginationLink
                  href={`/articles?page=${p}`}
                  isActive={page === p}
                >
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
              <PaginationNext href={`/articles?page=${page + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

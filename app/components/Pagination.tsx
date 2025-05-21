import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  totalUsers: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaginationPage({ totalUsers, page, setPage }: Props) {
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
              onClick={() => setPage((prev) => prev - 1)}
            />
          </PaginationItem>

          <PaginationItem>
            {[...Array(3)].map((_, i) => (
              <PaginationLink
                key={i}
                onClick={() => setPage(i + 1)} //  update page
                isActive={page === i + 1} //  highlight active page
                href="#"
              >
                {i + 1}
              </PaginationLink>
            ))}
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage((prev) => prev + 1)}
              className={page === 3 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

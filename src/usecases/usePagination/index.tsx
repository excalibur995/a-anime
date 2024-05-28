"use client";

import { PAGINATION_DEFAULT } from "@/models/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function usePagination(props = PAGINATION_DEFAULT) {
  const [page, setPage] = useState(props.current_page);
  const { push } = useRouter();

  const { items, has_next_page, current_page } = props;

  const changePage = (newPage: number) => {
    if (newPage < 1) newPage = 1;
    if (newPage > items.total) newPage = items.total;
    setPage(newPage);

    push(`?page=${newPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (current_page > 1) changePage(page - 1);
  };
  const handleNext = () => {
    if (has_next_page) changePage(page + 1);
  };

  return { page, handleNext, handlePrevious, ...props };
}

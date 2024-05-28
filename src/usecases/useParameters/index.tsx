"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function useParameters() {
  const search_params = useSearchParams();
  const { push } = useRouter();

  function onChangeParams(parameters: Record<string, string>) {
    const params = new URLSearchParams(search_params.toString());
    for (const key in parameters) {
      params.set(key, parameters[key]);
    }
    push("?" + params.toString());
  }

  return { search_params, onChangeParams };
}

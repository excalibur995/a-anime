"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function useParameters() {
  const params = useSearchParams();
  const search_params = new URLSearchParams(params.toString());
  const { push } = useRouter();

  function onChangeParams(parameters: Record<string, string>) {
    for (const key in parameters) {
      if (parameters[key] === "") {
        search_params.delete(key);
      } else {
        if (search_params.has(key)) {
          search_params.set(key, parameters[key]);
        } else {
          search_params.append(key, parameters[key]);
        }
      }
    }
    push("?" + search_params.toString());
  }

  return { search_params, onChangeParams };
}

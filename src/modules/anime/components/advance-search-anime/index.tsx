"use client";

import { ADVANCE_SELECT_DATA } from "@/models/constants";
import useParameters from "@/usecases/useParameters";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useAnimeDispatch, useAnimeValue } from "../../contexts/FilterContexts/hooks";
import { AnimeParams } from "../../models/types";

export default function AdvanceSearch() {
  const params = useAnimeValue();
  const [q, setQ] = useState(params.q || "");

  const dispatch = useAnimeDispatch();
  const { search_params, onChangeParams } = useParameters();

  const onResetPage = () => {
    dispatch({ page: 1 });
    onChangeParams({ page: "1" });
  };

  const onHandleChanges = (name: keyof AnimeParams, e: string) => {
    onChangeParams({ [name]: e });
    dispatch({ [name]: e });

    onResetPage();
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      onHandleSearch();
    }
  };

  const onHandleSearch = () => {
    onHandleChanges("q", q);
  };

  useEffect(() => {
    const number_key = ["page", "limit"];

    search_params.forEach((value, key) => {
      let key_params = key as keyof AnimeParams;
      let values: string | number = "";

      if (value !== "") {
        values = value;
        if (number_key.includes(key_params)) {
          values = parseInt(value || "1", 10);
        }
        console.log({ key_params, values });
        if (values !== params[key_params]) {
          dispatch({ [key]: values });
        }
      }
    });
  }, [dispatch, params, search_params]);

  return (
    <div className="w-full lg:max-w-[59vw] mx-auto space-y-4">
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search Anime"
        endContent={<Search size={14} onClick={onHandleSearch} />}
      />
      <div key={JSON.stringify(params)} className="inline-flex w-full flex-wrap items-center gap-4 mx-auto">
        {ADVANCE_SELECT_DATA.map((data) => (
          <Select
            name={data.name}
            selectedKeys={[params[data.name] as string]}
            key={data.name}
            label={data.placeholder}
            className="max-w-xs"
            size="sm"
            onChange={(e) => onHandleChanges(data.name, e.target.value)}
          >
            {data.data.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        ))}
      </div>
    </div>
  );
}

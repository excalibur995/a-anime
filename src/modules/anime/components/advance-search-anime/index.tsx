"use client";

import { ADVANCE_SELECT_DATA } from "@/models/constants";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Search } from "lucide-react";
import useAdvanceSearch from "./usecases/useAdvanceSearch";

export default function AdvanceSearch() {
  const { params, inputRef, onHandleKeyPress, onHandleSearch, onHandleChanges } = useAdvanceSearch();
  return (
    <div className="w-full lg:max-w-[59vw] mx-auto space-y-4">
      <Input
        key={params.q}
        ref={inputRef}
        defaultValue={params.q}
        onKeyDown={onHandleKeyPress}
        placeholder="Search Anime"
        isClearable
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

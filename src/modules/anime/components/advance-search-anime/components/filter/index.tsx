"use client";

import { ADVANCE_SELECT_DATA } from "@/models/constants";
import { Button, Select, SelectItem } from "@nextui-org/react";
import useAdvanceSearch from "../../usecases/useAdvanceSearch";

export default function FilterSearchComponents() {
  const { onHandleChanges, onChange, state } = useAdvanceSearch();

  return (
    <div className="flex flex-col gap-4">
      <div className="inline-flex w-full flex-wrap items-center gap-4 mx-auto">
        {ADVANCE_SELECT_DATA.map((data) => (
          <Select
            name={data.name}
            selectedKeys={[String(state[data.name] || "")]}
            key={data.name}
            label={data.placeholder}
            size="sm"
            onChange={(e) => onChange(data.name, e.target.value)}
          >
            {data.data.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        ))}
      </div>
      <Button onClick={onHandleChanges}>Apply</Button>
    </div>
  );
}

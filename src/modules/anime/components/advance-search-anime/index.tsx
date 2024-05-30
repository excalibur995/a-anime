"use client";

import Drawer from "@/ui/drawer";
import useDrawers from "@/usecases/useDrawers";
import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import FilterSearchComponents from "./components/filter/lazy";
import useAdvanceSearch from "./usecases/useAdvanceSearch";

export default function AdvanceSearch() {
  const { params, inputRef, onHandleKeyPress, onHandleSearch } = useAdvanceSearch();
  const { isOpen, toggleDrawer } = useDrawers();
  return (
    <div className="w-full lg:max-w-[59vw] mx-auto space-y-4">
      <div className="inline-flex w-full items-center gap-4">
        <Input
          className="w-full"
          key={params.q}
          ref={inputRef}
          defaultValue={params.q}
          onKeyDown={onHandleKeyPress}
          placeholder="Search Anime"
          isClearable
          endContent={<Search size={14} onClick={onHandleSearch} />}
        />
        <Drawer title="Filter Options" open={isOpen} toggle={toggleDrawer}>
          <FilterSearchComponents onApplyCallback={toggleDrawer} />
        </Drawer>
      </div>
    </div>
  );
}

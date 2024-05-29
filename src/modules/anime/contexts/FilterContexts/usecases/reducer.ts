import { FilterState, FilterStateAction } from "../models/types";

export const reducer = (prev: FilterState, next: FilterStateAction): FilterState => ({ ...prev, ...next });

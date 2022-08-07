import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./store";
import type { RootState } from "./rootReducer";

// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Export a hook that can be reused to resolve types

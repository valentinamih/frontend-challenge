import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "./store";

export const AppUseSelector: TypedUseSelectorHook<RootState> = useSelector
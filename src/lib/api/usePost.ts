import { useReducer } from "react";
import { State, reducer } from "./useReduce";
import { ApiCall, server } from "./server";




type UserPostResponse<TData, Tbody> = [
    (body: Tbody) => void,
    State<TData>
]

export const usePost = <TData = any, TBody = any>(apiCall: ApiCall): UserPostResponse<TData, TBody> => {
  const fetchReducer = reducer<TData>();
  const [state, dispatch] = useReducer(fetchReducer, {
    data: null,
    loading: false,
    error: null,
  });

  const fetch = async <TBody>(body: TBody) => {
    dispatch({ type:"FETCH" })
    const res = await server[apiCall]<TData, TBody>(body)

    if (res.error) {
        dispatch({ type: "FETCH_ERROR", error: res.error})
    }

    dispatch({ type:"FECH_SUCCESS", payload: res.data})
  }

  return [fetch, state]
};


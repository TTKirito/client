import { useCallback, useEffect, useReducer } from "react";
import { State, reducer } from "./useReduce";
import { ApiCall, server } from "./server";

interface UseGetResponse<TData> extends State<TData> {
    refetch: () => void;
}

export const useGet = <TData, TParam>(query: TParam, apiCall: ApiCall) : UseGetResponse<TData> => {
  const fetchReducer = reducer<TData>();
  const [state, dispatch] = useReducer(fetchReducer, {
    error: null,
    data: null,
    loading: false,
  });

  const fetch = useCallback(() => {
    const fetchApi = async () => {
      dispatch({ type: "FETCH" });
      const res = await server[apiCall]<TData, TParam>(query);

      if (res.error) {
        dispatch({ type: "FETCH_ERROR", error: res.error });
      }

      dispatch({ type: "FECH_SUCCESS", payload: res.data });
    };

    fetchApi();
  }, [query]);

  useEffect(() => {
    fetch();
  }, [query]);

  return {...state, refetch: fetch}
};

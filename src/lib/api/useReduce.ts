export interface State<TData> {
  data: TData | null;
  error: { code: number; message: string } | null;
  loading: boolean;
}

type Action<TData> =
  | { type: "FETCH" }
  | { type: "FECH_SUCCESS"; payload: TData | null }
  | { type: "FETCH_ERROR"; error: { code: number; message: string } | null };

export const reducer =
  <TData>() =>
  (state: State<TData>, action: Action<TData>) => {
    switch (action.type) {
      case "FETCH":
        return { ...state, loading: true };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.error || null };
      case "FECH_SUCCESS":
        return { loading: false, error: null, data: action.payload };
      default:
        throw new Error();
    }
  };

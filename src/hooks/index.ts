import { Collection, getAllDocs } from "config/queries";
import { useEffect, useState } from "react";

export const useQuery = <T extends object>(
  collection: Collection,
  defaultData: T[] = []
) => {
  const [state, setState] = useState({
    data: defaultData,
    error: undefined,
    isError: false,
    isLoading: false,
    isFetched: false,
  });

  useEffect(() => {
    if (!state.isFetched) {
      setState((previous) => ({ ...previous, isLoading: true }));

      getAllDocs(collection)
        .then((data: T[]) => setState((previous) => ({ ...previous, data })))
        .catch((error: any) => {
          setState((previous) => ({ ...previous, error, isError: true }));
        })
        .finally(() => {
          setState((previous) => ({
            ...previous,
            isLoading: false,
            isFetched: true,
          }));
        });
    }
  }, [collection, state.isFetched]);

  return state;
};

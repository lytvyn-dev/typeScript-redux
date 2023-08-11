import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actions-types";
import { Action } from "../actions";

export const seearchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });

    try {
      const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
        params: {
          text: term,
        },
      });

      const names = data.objects.map((el: any) => {
        return el.package.name;
      });

      dispatch({ type: ActionType.SEARCH_REPOSITORIES_SUCCESS, payload: names });
    } catch (err) {
      dispatch({ type: ActionType.SEARCH_REPOSITORIES_ERROR, payload: (err as Error).message });
    }
  };
};

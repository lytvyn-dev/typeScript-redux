import { ActionType } from "../actions-types/index";

export interface RepositoriesState {
  data: string[];
  error: string | null;
  loading: boolean;
}

interface SearchAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchActionSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchActionError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchAction | SearchActionSuccess | SearchActionError;

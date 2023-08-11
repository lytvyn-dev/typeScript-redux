import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreactors } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreactors, dispatch);
};

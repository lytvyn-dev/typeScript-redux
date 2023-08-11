import RepositoriesList from "./components/RepositoriesList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <h1>Search Packeges: </h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;

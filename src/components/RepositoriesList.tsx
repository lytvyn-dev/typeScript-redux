import { useState } from "react";
import { useAppSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { seearchRepositories } = useActions();

  const { data, error, loading } = useAppSelector((state) => state.repositories);

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTerm("");
    seearchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <input onChange={(e) => setTerm(e.target.value)} type="text" value={term} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((el) => {
          return <div key={el}>{el}</div>;
        })}
    </div>
  );
};

export default RepositoriesList;

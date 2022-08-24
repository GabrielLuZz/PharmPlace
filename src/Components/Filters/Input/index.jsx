import { Container } from "./style";

const SearchInput = ({ set, func, ...rest }) => {
  return (
    <Container>
      <input
        onChange={(evt) => set(evt.target.value)}
        className="input"
        placeholder="Digite aqui sua busca"
      />
      <button onClick={func} type="submit" className="button">
        Buscar
      </button>
    </Container>
  );
};

export default SearchInput;

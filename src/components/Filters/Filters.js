import Button from "../Button";
import Input from "../Input";
import style from "./Filters.module.css";
import { useFilters } from "./useFilters";

const Filters = ({ onFilter }) => {
    const {
        filters,
        setFilters,
        cleanFilters,
        handleOnSubmit,
        handleOnRegiste,
    } = useFilters({ onFilter });

    return (
        <form className={style.filters} onSubmit={handleOnSubmit}>
            <Input
                name="name"
                type="text"
                placeholder="Digine um nome..."
                form={filters}
                setForm={setFilters}
            />
            <Input
                name="age"
                type="number"
                placeholder="Digine uma idade..."
                form={filters}
                setForm={setFilters}
            />
            <Button onClick={() => cleanFilters()}>Limpar</Button>
            <Button type="submit">Buscar</Button>
            <Button onClick={() => handleOnRegiste()}>Cadastrar</Button>
        </form>
    );
};

export default Filters;

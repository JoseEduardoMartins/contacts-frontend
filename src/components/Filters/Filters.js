import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "../Field";
import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import { handleInputObjectChange } from "../../utils/formUtils";
import style from "./Filters.module.css";

const Filters = ({ onFilter }) => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({});

    const cleanFilters = () => {
        setFilters({});
        onFilter();
    };

    return (
        <div className={style.filters}>
            <Field>
                <Label>Nome:</Label>
                <Input
                    value={filters.name}
                    onChange={(e) =>
                        handleInputObjectChange(e, "name", filters, setFilters)
                    }
                />
            </Field>
            <Field>
                <Label>Idade:</Label>
                <Input
                    value={filters.age}
                    onChange={(e) =>
                        handleInputObjectChange(e, "age", filters, setFilters)
                    }
                />
            </Field>
            <Button onClick={() => cleanFilters()}>Limpar</Button>
            <Button onClick={() => onFilter(filters)}>Buscar</Button>
            <Button onClick={() => navigate("/contact")}>Cadastrar</Button>
        </div>
    );
};

export default Filters;

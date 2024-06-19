import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultContactFilters } from "../../services/Contact.service";

export const useFilters = ({ onFilter }) => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState(defaultContactFilters);

    const cleanFilters = () => {
        setFilters(defaultContactFilters);
        onFilter();
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    };

    const handleOnRegiste = () => navigate("/contact");

    return {
        filters,
        setFilters,
        cleanFilters,
        handleOnSubmit,
        handleOnRegiste,
    };
};

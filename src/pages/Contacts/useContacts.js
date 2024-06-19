import { useEffect, useState } from "react";
import { find, remove } from "../../services/Contact.service";

export const useContacts = () => {
    const [contacts, setContacts] = useState([]);

    const removeContact = async (id) => {
        if (!id) return;

        try {
            await remove(id);
            await loadContact();
        } catch (error) {
            alert("error");
        }
    };

    const loadContact = async (filters = {}) => {
        try {
            const response = await find(filters);
            setContacts(response);
        } catch (error) {
            alert("error");
        }
    };

    useEffect(() => {
        loadContact();
    }, []);

    return {
        contacts,
        loadContact,
        removeContact,
    };
};

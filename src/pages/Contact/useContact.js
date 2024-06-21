import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    findById,
    save,
    defaultContact,
    defaultPhone,
} from "../../services/Contact.service";

export const useContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState(defaultContact);
    const [phones, setPhones] = useState([]);
    const [phone, setPhone] = useState(defaultPhone);

    const onSavePhone = () => {
        if (!Object.keys(phone).length)
            return alert("Numero de telefone invalido");

        const data = [...phones, phone];

        setPhones(data);
        setPhone(defaultPhone);
    };

    const onRemovePhone = (phone) => {
        if (!phone) return;

        const data = phones.filter((obj) => obj.number !== phone.number);

        setPhones(data);
    };

    const onSave = async () => {
        try {
            await save({ id, ...contact, phones });
            alert("Sucesso");
            navigate("/");
        } catch (errors) {
            alert(errors[0].msg);
        }
    };

    const loadContact = async () => {
        try {
            const { phones, ...rest } = await findById(id);
            setContact(rest);
            setPhones(phones);
        } catch (error) {
            alert("error");
        }
    };

    useEffect(() => {
        if (!!id) loadContact();
        // eslint-disable-next-line
    }, [id]);

    return {
        id,
        contact,
        setContact,
        loadContact,
        phones,
        setPhones,
        phone,
        setPhone,
        onSave,
        onSavePhone,
        onRemovePhone,
    };
};

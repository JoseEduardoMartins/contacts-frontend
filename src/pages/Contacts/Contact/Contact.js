import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Page from "../../../components/Page/Page";
import Title from "../../../components/Title";
import Field from "../../../components/Field";
import Label from "../../../components/Label/Label";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {
    handleInputObjectChange,
    handleInputObjectListChange,
} from "../../../utils/formUtils";
import { phoneMask } from "../../../utils/number.utils";
import {
    findById,
    save,
    defaultContact,
    defaultPhones,
} from "../Contact.service";
import style from "./Contact.module.css";

const Contact = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState(defaultContact);
    const [phones, setPhones] = useState([]);
    const [phone, setPhone] = useState(defaultPhones);

    const onSavePhone = () => {
        if (!phone || phone.length) return alert("Numero de telefone invalido");

        const data = [...phones, phone];

        setPhones(data);
        setPhone(defaultPhones);
    };

    const onRemovePhone = (phone) => {
        if (!phone) return;

        const data = phones.filter((obj) => obj.id !== phone.id);

        setPhones(data);
    };

    const onSave = async () => {
        try {
            await save({ id, ...contact, phones });
            alert("Sucesso");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("error");
        }
    };

    const loadContact = async () => {
        try {
            const { phones, ...rest } = await findById(id);
            setContact(rest);
            setPhones(phones);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!!id) loadContact();
        // eslint-disable-next-line
    }, [id]);

    return (
        <Page>
            <form className={style.form}>
                <Title>Contato</Title>
                <Field flexDirection="column">
                    <Label>Nome:</Label>
                    <Input
                        value={contact.name}
                        onChange={(e) =>
                            handleInputObjectChange(
                                e,
                                "name",
                                contact,
                                setContact
                            )
                        }
                    />
                </Field>
                <Field flexDirection="column">
                    <Label>Idade:</Label>
                    <Input
                        type="number"
                        value={String(contact.age)}
                        onChange={(e) =>
                            handleInputObjectChange(
                                e,
                                "age",
                                contact,
                                setContact
                            )
                        }
                    />
                </Field>
                <Field flexDirection="column">
                    <Label>Telefones:</Label>
                    {phones?.map((phone, index) => (
                        <Field key={index}>
                            <Input
                                type="tel"
                                maxlength="15"
                                value={phoneMask(phone.number)}
                                onChange={(e) =>
                                    handleInputObjectListChange(
                                        e,
                                        index,
                                        "number",
                                        phones,
                                        setPhone
                                    )
                                }
                            />
                            <Button
                                theme="delete"
                                onClick={() =>
                                    onRemovePhone({ id: index, ...phone })
                                }
                            >
                                Deletar
                            </Button>
                        </Field>
                    ))}
                    <Input
                        type="tel"
                        maxlength="15"
                        value={phoneMask(phone.number)}
                        onChange={(e) =>
                            handleInputObjectChange(
                                e,
                                "number",
                                phone,
                                setPhone
                            )
                        }
                    />
                    <Button onClick={() => onSavePhone()}>
                        Adicionar numero
                    </Button>
                </Field>

                <Button onClick={() => onSave()}>
                    {!id ? "Cadastrar" : "Atualizar"}
                </Button>
            </form>
        </Page>
    );
};

export default Contact;

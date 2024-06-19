import Button from "../../components/Button";
import Field from "../../components/Field";
import Input from "../../components/Input";
import Label from "../../components/Label/Label";
import Page from "../../components/Page/Page";
import Title from "../../components/Title";
import style from "./Contact.module.css";
import { useContact } from "./useContact";

const Contact = () => {
    const {
        id,
        contact,
        setContact,
        phones,
        setPhones,
        phone,
        setPhone,
        onSave,
        onSavePhone,
        onRemovePhone,
    } = useContact();

    return (
        <Page>
            <form className={style.form}>
                <Title>Contato</Title>
                <Field flexDirection="column">
                    <Label>Nome:</Label>
                    <Input
                        name="name"
                        type="text"
                        form={contact}
                        setForm={setContact}
                    />
                </Field>
                <Field flexDirection="column">
                    <Label>Idade:</Label>
                    <Input
                        name="age"
                        type="number"
                        form={contact}
                        setForm={setContact}
                    />
                </Field>
                <Field flexDirection="column">
                    <Label>
                        Telefones:
                        <span onClick={() => onSavePhone()}>
                            Adicionar numero
                        </span>
                    </Label>
                    {phones?.map((phone, index) => (
                        <Field key={index}>
                            <Input
                                name="number"
                                type="tel"
                                maxLength="15"
                                index={index}
                                form={phones}
                                setForm={setPhones}
                            />
                            <Button
                                theme="delete"
                                onClick={() => onRemovePhone(phone)}
                            >
                                Deletar
                            </Button>
                        </Field>
                    ))}
                    <Input
                        name="number"
                        type="tel"
                        maxLength="15"
                        form={phone}
                        setForm={setPhone}
                    />
                </Field>

                <Button onClick={() => onSave()}>
                    {!id ? "Cadastrar" : "Atualizar"}
                </Button>
            </form>
        </Page>
    );
};

export default Contact;

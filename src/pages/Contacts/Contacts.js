import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Filters from "../../components/Filters/Filters";
import List from "../../components/List";
import Item from "../../components/List/Item";
import Label from "../../components/Label";
import Button from "../../components/Button";
import { find, remove } from "./Contact.service";
import style from "./Contacts.module.css";

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    const removeContact = async (id) => {
        if (!id) return;

        try {
            await remove(id);
            await loadContact();
        } catch (error) {
            console.log(error);
        }
    };

    const loadContact = async (filters = {}) => {
        try {
            const response = await find(filters);
            setContacts(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadContact();
    }, []);

    return (
        <Page>
            <Title>Contatos</Title>
            <Filters onFilter={loadContact} />
            <List>
                {!contacts.length && <p>Nenhum contato existente</p>}
                {contacts?.map((contact) => (
                    <Item key={contact.id}>
                        <Label>Nome: {contact.name}</Label>
                        <div className={style.menuItem}>
                            <Button>
                                <Link to={`/contact/${contact.id}`}>
                                    Editar
                                </Link>
                            </Button>
                            <Button
                                theme="delete"
                                onClick={() => removeContact(contact.id)}
                            >
                                Excluir
                            </Button>
                        </div>
                    </Item>
                ))}
            </List>
        </Page>
    );
};

export default Contacts;

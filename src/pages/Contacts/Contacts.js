import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import Filters from "../../components/Filters/Filters";
import List from "../../components/List";
import Item from "../../components/List/Item";
import Button from "../../components/Button";
import { find, remove } from "./Contact.service";
import style from "./Contacts.module.css";

const Contacts = () => {
    const [contacts, setContacts] = useState();

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
            <Filters onFilter={loadContact} />
            <List>
                {contacts?.map((contact) => (
                    <Item key={contact.id}>
                        <div>Nome: {contact.name}</div>
                        <div className={style.menuItem}>
                            <Button>
                                <Link to={`/contact/${contact.id}`}>
                                    Editar
                                </Link>
                            </Button>
                            <Button onClick={() => removeContact(contact.id)}>
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

import http from "../../services/htttp";

export const find = async (filters = {}) => {
    try {
        console.log(filters);
        const filterList = Object.entries(filters);

        let url = "/contacts/";

        console.log(filterList);

        filterList?.forEach((filter, index) => {
            const [key, value] = filter;
            url += !index ? `?${key}=${value}` : `&${key}=${value}`;
        });

        const { data } = await http.get(url);
        return data;
    } catch (error) {
        throw error;
    }
};

export const findById = async (id) => {
    try {
        if (!id) return alert("id indefinido");

        const { data } = await http.get(`/contacts/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const save = async (contact) => {
    try {
        const { id, ...rest } = contact;

        const { data } = !id
            ? await http.post("/contacts/", rest)
            : await http.put(`/contacts/${id}`, rest);

        return { id: data.id };
    } catch (error) {
        throw error;
    }
};

export const remove = async (id) => {
    try {
        await http.delete(`/contacts/${id}`);
    } catch (error) {
        throw error;
    }
};

export const defaultPhones = {
    id: undefined,
    number: "",
};

export const defaultContact = {
    id: undefined,
    name: "",
    age: undefined,
};

export const handleInputObjectChange = (event, form, setForm) => {
    const { name, value } = event.target;

    const data = { ...form };
    data[name] = value;

    setForm(data);
};

export const handleInputObjectListChange = (evt, index, form, setForm) => {
    const { name, value } = evt.target;

    const data = [...form];
    data[index][name] = value;

    setForm(data);
};

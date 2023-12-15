export const handleInputObjectChange = (event, field, form, setForm) => {
    const value = event.target.value;

    const data = { ...form };
    data[field] = value;

    setForm(data);
};

export const handleInputObjectListChange = (
    evt,
    index,
    field,
    form,
    setForm
) => {
    const value = evt.target.value;
    const data = [...form];

    data[index][field] = value;
    setForm(data);
};

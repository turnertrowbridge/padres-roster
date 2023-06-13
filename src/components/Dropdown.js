const Dropdown = ({ options, onSelect }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        onSelect(value);
    }


    return (
        <select onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
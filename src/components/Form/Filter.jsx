import PropTypes from "prop-types";
import css from "components/Form/Form.module.css";

const Filter = ({ value, onChangeName }) => {
  return (
    <label>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChangeName}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
};

export default Filter;
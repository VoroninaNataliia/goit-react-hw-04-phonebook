import PropTypes from 'prop-types';
import s from './Form.module.css';

export const Filter = ({ onFilter }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    alignItems: 'center',
      padding: '25px'
    }}
  >
    <label className={s.label} htmlFor="text">
      Find contact by name
    </label>
    <input className={s.input} onChange={onFilter} type="text" />
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func,
};

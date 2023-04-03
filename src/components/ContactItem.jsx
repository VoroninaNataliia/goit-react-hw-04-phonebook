import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, onClick }) => (
  <>
    <li className={s.item} key={id}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button className={s.btn} type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  </>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

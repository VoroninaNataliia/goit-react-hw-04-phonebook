import { Component } from 'react';
import s from './Form.module.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <input
            className={s.input}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className={s.label} htmlFor="number">
            Number
          </label>
          <input
            className={s.input}
            onChange={this.handleChange}
            type="tel"
            name="number"
            required
          />
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
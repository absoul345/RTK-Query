import { v4 as uuidv4 } from 'uuid';
import styles from './AddContacts.module.css';
import { useCreateContactMutation } from '../../redux/phoneBook/phoneBook';

export const AddContacts = () => {
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    console.dir(e.target.elements.name.value);

    createContact({
      name: e.target.elements.name.value,
      phone: e.target.elements.number.value,
    });

    e.currentTarget.reset();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            id={uuidv4()}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            id={uuidv4()}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.btn} type="submit">
          {isLoading ? <>Loading..</> : <>Create contact</>}
        </button>
      </form>
    </div>
  );
};

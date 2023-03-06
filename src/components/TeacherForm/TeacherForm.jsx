import { useState } from 'react';
import { Paper } from 'components/Paper';
import { Button } from 'components/Button';

import style from './TeacherForm.module.css';

const TEACHER_FORM_BUILD = [
  { placeholder: 'Прізвище', name: 'lastName' },
  { placeholder: "Ім'я", name: 'firstName' },
  { placeholder: 'По-батькові', name: 'patronymic' },
  { placeholder: 'Телефон', name: 'phone' },
  { placeholder: 'Email', name: 'email' },
  { placeholder: 'Місто', name: 'city' },
];

const INITIAL_TEACHER = {
  firstName: '',
  lastName: '',
  patronymic: '',
  phone: '',
  email: '',
  city: '',
};

export function TeacherForm({ addTutor }) {
  const [formData, setFormData] = useState(INITIAL_TEACHER);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function checkSubmitAbility(formState) {
    return Object.values(formState).every(value => {
      return value.length > 1;
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    addTutor(formData);
    setFormData(INITIAL_TEACHER);
  }

  const isEnableSubmit = checkSubmitAbility(formData);
  return (
    <Paper className={style.formWrapper}>
      <h3 className={style.formTitle}>Додати викладача</h3>
      <form className={style.form} onSubmit={onSubmit}>
        {TEACHER_FORM_BUILD.map(({ placeholder, name }) => {
          return (
            <label key={name}>
              <input
                required
                placeholder={placeholder}
                name={name}
                className={style.formInput}
                onChange={handleChange}
                value={formData[name]}
              />
            </label>
          );
        })}

        <Button
          type="submit"
          disabled={!isEnableSubmit}
          className={style.tutorBtn}
          title="Запросити"
        />
      </form>
    </Paper>
  );
}

import { useState } from 'react';
import { Paper } from 'components/Paper';
import { Button } from 'components/Button';

import style from './TeacherForm.module.css';
export function TeacherForm() {
  const[formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  });
  function handleChange(event) {
  const{name, value}=event.target;
  setFormData({
    ...formData,
    [name]: value,
  })
  }
  function checkSubmitAbility(formState){
  return Object.values(formState).every(value => {
    return value.length > 1;
  })
  }
 const isEnableSubmit = checkSubmitAbility(formData);
  return (
    <Paper className={style.formWrapper}>
      <h3 className={style.formTitle}>Додати викладача</h3>
      <form className={style.form}>
        <label>
          <input
          required
          placeholder='Прізвище'
          name='lastName'
          className={style.formInput}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
          required
          placeholder="Ім'я"
          name='firstName'
          className={style.formInput}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
          required
          placeholder="По-батькові"
          name='patronymic'
          className={style.formInput}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
          required
          placeholder="Телефон"
          name='phone'
          className={style.formInput}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
          required
          placeholder="Email"
          name='email'
          className={style.formInput}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
          required
          placeholder="Місто"
          name='city'
          className={style.formInput}
          onChange={handleChange}
          />
        </label>
        <Button type="submit" disabled={!isEnableSubmit} className={style.tutorBtn} title="Запросити"/>
      </form>
    </Paper>
  );
}

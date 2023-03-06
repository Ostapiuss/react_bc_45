import style from '../TeacherForm/TeacherForm.module.css';
import { useState } from 'react';

import { Paper } from 'components/Paper';
import { Button } from 'components/Button';

export const WidgetForm = ({
  title,
  placeholder,
  buttonName,
  handleSubmit,
}) => {
  const [widgetFormData, setWidgetFormData] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(widgetFormData);
    setWidgetFormData('');
  }

  function handleChange(event) {
    const { value } = event.target;
    setWidgetFormData(value);
  }

  const isEnableSubmit = widgetFormData.length > 1;

  return (
    <Paper className={style.formWrapper}>
      <h3 className={style.formTitle}>{title}</h3>
      <form className={style.form} onSubmit={onSubmit}>
        <label>
          <input
            required
            placeholder={placeholder}
            name={placeholder}
            className={style.formInput}
            onChange={handleChange}
            value={widgetFormData}
          />
        </label>

        <Button
          type="submit"
          disabled={!isEnableSubmit}
          className={style.tutorBtn}
          title={buttonName}
        />
      </form>
    </Paper>
  );
};

import { Paper } from 'components/Paper';
import style from './TeacherForm.module.css';
export function TeacherForm() {
  return (
    <Paper className={style.formWrapper}>
      <h3 className={style.formTitle}>Додати викладача</h3>
      <form className={style.form}>
        <label>
          <input required className={style.formInput} />
        </label>
      </form>
    </Paper>
  );
}

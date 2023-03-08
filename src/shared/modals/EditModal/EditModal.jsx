import style from './EditModal.module.css';
import { ReactComponent as EditIcon } from 'assets/images/edit-icon.svg';
import { Button } from 'components/Button';

export function EditModal({placeholder}){

  return (
    <div className= {style.modalEditWrapper}>
     <div className={style.modalEditTypography}>
       <EditIcon className={style.modalEditIcon}/>
      <p>Редагувати інформацію</p>
     </div>
      <label>
        <input type="text" required placeholder={placeholder}/>
      </label>
      <Button
        className={style.modalEditSaveBtn}
        title="Зберегти"
        />
    </div>
  )
}

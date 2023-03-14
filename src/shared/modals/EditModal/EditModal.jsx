import { useState } from 'react';
import style from './EditModal.module.css';
import { ReactComponent as EditIcon } from 'assets/images/edit-icon.svg';
import { Button } from 'components/Button';

export function EditModal({ placeholder, onSubmit, modalData, onClose }) {
  const [editModalData, setEditModalData] = useState(
    modalData || { name: '', id: '' }
  );
  function onChange(changeEvent) {
    const { value, name } = changeEvent.target;
    setEditModalData({
      ...editModalData,
      [name]: value.trim(),
    });
  }
  function onSubmitModal(){
    onSubmit(editModalData);
    onClose();
  }
  return (
    <div className={style.modalEditWrapper}>
      <div className={style.modalEditTypography}>
        <EditIcon className={style.modalEditIcon} />
        <p className={style.modalEditTitle}>Редагувати інформацію</p>
      </div>
      <label>
        <input
          className={style.modalEditInput}
          name="name"
          type="text"
          required
          placeholder={placeholder}
          value={editModalData.name}
          onChange={onChange}
        />
      </label>
      <Button
        className={style.modalEditSaveBtn}
        title="Зберегти"
        onClick={onSubmitModal}
      />
    </div>
  );
}

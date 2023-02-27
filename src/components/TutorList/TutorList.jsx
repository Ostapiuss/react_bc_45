import { Paper } from 'components/Paper';
import phoneIcon from 'assets/images/phone.svg';
import emailIcon from 'assets/images/message-icon.svg';
import locationIcon from 'assets/images/location-icon.svg';

import style from './TutorList.module.css';

export function TutorList({ tutors }) {
  return (
    <div className={style.tutorList}>
      {tutors.map(
        ({ firstName, lastName, patronymic, phone, email, city, options }) => (
          <TutorItem
            key={phone}
            firstName={firstName}
            lastName={lastName}
            patronymic={patronymic}
            phone={phone}
            email={email}
            city={city}
            options={options}
          />
        )
      )}
    </div>
  );
}
export function TutorItem({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) {
  return (
    <Paper className={style.tutorItem}>
      <div className={style.tutorClm}>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{patronymic}</span>
      </div>
      <div className={style.tutorClm}>
        <span>
          <img className={style.tutorIcon} src={phoneIcon} alt="Phone" />
          {phone}
        </span>
        <span>
          <img className={style.tutorIcon} src={emailIcon} alt="Email" />
          {email}
        </span>
        <span>
          <img className={style.tutorIcon} src={locationIcon} alt="Location" />
          {city}
        </span>
      </div>
      <div className={style.tutorClm}>
        <span>{options}</span>
      </div>
    </Paper>
  );
}

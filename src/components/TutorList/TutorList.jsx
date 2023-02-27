import {Paper} from 'components/Paper';
import phoneIcon from 'assets/images/phone.svg';
import emailIcon from 'assets/images/message-icon.svg';
import locationIcon from 'assets/images/location-icon.svg';

export function TutorList({tutors}){
  return(
    <>
    {tutors.map(({firstName, lastName, patronymic, phone, email, city,options})=>
    (<TutorItem
    firstName = {firstName}
    lastName = {lastName}
    patronymic = {patronymic}
    phone = {phone}
    email = {email}
    city = {city}
    options = {options}
    />))}
    </>
  )
}
export function TutorItem(
  {
    firstName,
    lastName,
    patronymic,
    phone,
    email,
    city,
    options
  }) {
    return(
      <Paper>
        <div>
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{patronymic}</span>
        </div>
        <div>
          <span>
            <img src={phoneIcon} alt="Phone" />
            {phone}
          </span>
          <span>
            <img src={emailIcon} alt="Email" />
            {email}
          </span>
          <span>
            <img src={locationIcon} alt="Location" />
            {city}
          </span>
        </div>
        <div>
          <span>{options}</span>
        </div>
      </Paper>
    )
}


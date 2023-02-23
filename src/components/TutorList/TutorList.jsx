import {Paper} from 'components';

export function TutorList({tutors}){
  return(
  <>
  {tutors.map((tutor)=> (

  ))}
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
      <Paper></Paper>
    )
}


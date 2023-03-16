import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { facultySelectors } from 'store/selectors';
import {Section} from 'components/Section';
import style from './FacultyDetails.module.css';

export default function FacultyDetails(){
const params = useParams();
const faculties = useSelector(facultySelectors.getFaculties);
const faculty = faculties.find(el=>el.id===params.id)

  return(
    <div className={style.facultyDetails}>
      <Section title={faculty.name} position="right">

      </Section>
    </div>
  )
}

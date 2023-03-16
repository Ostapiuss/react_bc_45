import style from './FacultyPage.module.css';
import { useSelector } from 'react-redux';
import{useNavigate} from 'react-router-dom';
import {facultySelectors} from 'store/selectors';
import { Section } from 'components/Section';
import { GeneralCardList } from 'components/GeneralCardList';

export default function FacultyPage() {
  const faculties = useSelector(facultySelectors.getFaculties);
  const navigate = useNavigate();
  const navigateToDetails =(id)=>{
  navigate(`/faculty/${id}`);
  }
  return (
  <>
  <Section title="Факультети">
   <GeneralCardList
    className={style.facultyList} list={faculties} isFullItemWidth={true}
    navigateToDetails={navigateToDetails}
    />
    </Section>
  </>
  );
}

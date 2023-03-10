import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from 'components/Section';
import { Card } from 'components/Card';
import { Paper } from 'components/Paper';
import { TutorList } from 'components/TutorList';
import { Button } from 'components/Button';
import { GeneralCardList } from 'components/GeneralCardList';
import { TeacherForm } from 'components/TeacherForm';
import { addFaculty, editFaculty } from 'store/facultySlice';

import universityData from 'constants/universityData.json';
import catIcon from 'assets/images/cat.svg';
import cityMarker from 'assets/images/city-marker.svg';
import robot from 'assets/images/robot.svg';

import { WidgetForm } from 'components/WidgetForm';

const FORM_KEYS = {
  teacherForm: 'teacher',
  cityForm: 'city',
  facultyForm: 'faculty',
};

function UniversityPage() {
  const [modeMenu, setModeMenu] = useState([]);

  const [tutors, setTutors] = useState(universityData.tutors);

  const [cities, setCities] = useState(
    universityData.cities.map(city => ({ name: city }))
  );
const dispatch = useDispatch();
  const faculties = useSelector(state => state.faculty.department);

  const toggleMenu = key =>{
    const element = modeMenu.find(el => el === key);
  if (!element) {
    setModeMenu(prev => [...prev, key]);
  }
  if (element) {
    const newModeMenu = modeMenu.filter(el => el !== key);
    setModeMenu(newModeMenu);
  }
};

const onAddFaculty = faculty => {
  const newFaculty = { name: faculty };
  dispatch(addFaculty(newFaculty));
};

const addTutor = tutor => {
  setTutors([...universityData.tutors, tutor]);
};

const addCity = city => {
  const newCity = { name: city };
  setCities([...cities, newCity]);
};

const isModeMenuIncludes = key => {
  return modeMenu.includes(key);
};

const handleEditModal = (id) =>{
  dispatch(editFaculty(id));
}

const isTeacherFormOpened = isModeMenuIncludes(FORM_KEYS.teacherForm);
const isCityFormOpened = isModeMenuIncludes(FORM_KEYS.cityForm);
const isFacultiesFormOpened = isModeMenuIncludes(FORM_KEYS.facultyForm);

return (
  <>
    <Section title="???????????????????? ?? ????????????????????????" position="right">
      <div className="university-wrapper">
        <Card universityName={universityData.name} />
        <Paper className="university-card">
          <p>
            ????????, ???????????????????? ???????????? ?? ?????????????????????? ???????????????? ?????????????????????? ????????????
            ?????? ???????????? ???? ????????????. ???? ??????????, ?????? ?????????? ?????????????????????? ?????????????????? ??
            ?????????????????????? ???????????????? ?? ?????????? ?????? ?????? ????????. ?? ?????? ???? ??????????????????
            ???????????????????????????? ???????? ?????????? ????????????????????????????????, ???????????????? ???????? ??????-????
            ??????????. ???? ???????????? ?????????? ???????????????????????? ?? ?????????????????? ???????????? ??????????
            ??????????????????????, ?????????? ?????????????????? ?? ?????????????????????????? ?????????? ????????????????
            ????????????????. ????, ???? ???????????? ?? ???????? ?? ?????????? ?????????????? ????????????????????. ??????????,
            ?????? ?????????????????????? ?????????? ???????????????? ?? ?????? ?? ???????????????? ????????????????.
          </p>
        </Paper>
      </div>
    </Section>

    <Section icon={catIcon} title="??????????????????">
      <TutorList tutors={tutors} />
      {isTeacherFormOpened && <TeacherForm addTutor={addTutor} />}
      <Button
        title={isTeacherFormOpened ? '?????????????? ??????????' : '???????????? ??????????????????'}
        onClick={() => {
          toggleMenu(FORM_KEYS.teacherForm);
        }}
      />
    </Section>

    <Section icon={cityMarker} title="??????????">
      <GeneralCardList list={cities} />
      {isCityFormOpened && (
        <WidgetForm
          handleSubmit={addCity}
          buttonName={'????????????'}
          title="???????????? ??????????"
          placeholder="??????????"
        />
      )}
      <Button
        title={isCityFormOpened ? '?????????????? ??????????' : '???????????? ??????????'}
        onClick={() => {
          toggleMenu(FORM_KEYS.cityForm);
        }}
      />
    </Section>

    <Section icon={robot} title="????????????????????">
      <GeneralCardList list={faculties} onEditCard={handleEditModal}/>
      {isFacultiesFormOpened && (
        <WidgetForm
          handleSubmit={onAddFaculty}
          buttonName={'????????????'}
          title="???????????? ??????????????????"
          placeholder="??????????????????"
        />
      )}
      <Button
        title={isFacultiesFormOpened ? '?????????????? ??????????' : '???????????? ??????????????????'}
        onClick={() => {
          toggleMenu(FORM_KEYS.facultyForm);
        }}
      />
    </Section>
  </>
);
}

export default UniversityPage;

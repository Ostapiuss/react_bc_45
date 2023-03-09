import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Section } from 'components/Section';
import { Card } from 'components/Card';
import { Paper } from 'components/Paper';
import { TutorList } from 'components/TutorList';
import { Button } from 'components/Button';
import { GeneralCardList } from 'components/GeneralCardList';
import { TeacherForm } from 'components/TeacherForm';

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

  const faculties = useSelector(state => state.faculty.department);
  console.log(faculties);

  const toggleMenu = key => {
    const element = modeMenu.find(el => el === key);
    if (!element) {
      setModeMenu(prev => [...prev, key]);
    }
    if (element) {
      const newModeMenu = modeMenu.filter(el => el !== key);
      setModeMenu(newModeMenu);
    }
  };

  const addFaculty = faculty => {
    const newFaculty = { name: faculty };
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

  const isTeacherFormOpened = isModeMenuIncludes(FORM_KEYS.teacherForm);
  const isCityFormOpened = isModeMenuIncludes(FORM_KEYS.cityForm);
  const isFacultiesFormOpened = isModeMenuIncludes(FORM_KEYS.facultyForm);

  return (
    <>
      <Section title="Информация о университете" position="right">
        <div className="university-wrapper">
          <Card universityName={universityData.name} />
          <Paper className="university-card">
            <p>
              Опыт, концентрат знаний и возможность избежать большинство ошибок
              при приеме на работу. Мы знаем, что хотят большинство локальных и
              иностранных компаний и можем вам это дать. А еще мы постоянно
              совершенствуем наши курсы программирования, добавляя туда что-то
              новое. Вы можете лично ознакомиться с историями успеха наших
              выпускников, чтобы убедиться в эффективности нашей методики
              обучения. Да, мы начнем с азов и самой простой информации. Знаем,
              что большинство людей приходят к нам с нулевыми знаниями.
            </p>
          </Paper>
        </div>
      </Section>

      <Section icon={catIcon} title="Викладачі">
        <TutorList tutors={tutors} />
        {isTeacherFormOpened && <TeacherForm addTutor={addTutor} />}
        <Button
          title={isTeacherFormOpened ? 'Закрити форму' : 'Додати викладача'}
          onClick={() => {
            toggleMenu(FORM_KEYS.teacherForm);
          }}
        />
      </Section>

      <Section icon={cityMarker} title="Міста">
        <GeneralCardList list={cities} />
        {isCityFormOpened && (
          <WidgetForm
            handleSubmit={addCity}
            buttonName={'Додати'}
            title="Додати місто"
            placeholder="Місто"
          />
        )}
        <Button
          title={isCityFormOpened ? 'Закрити форму' : 'Додати місто'}
          onClick={() => {
            toggleMenu(FORM_KEYS.cityForm);
          }}
        />
      </Section>

      <Section icon={robot} title="Факультети">
        <GeneralCardList list={faculties} />
        {isFacultiesFormOpened && (
          <WidgetForm
            handleSubmit={addFaculty}
            buttonName={'Додати'}
            title="Додати факультет"
            placeholder="Факультет"
          />
        )}
        <Button
          title={isFacultiesFormOpened ? 'Закрити форму' : 'Додати факультет'}
          onClick={() => {
            toggleMenu(FORM_KEYS.facultyForm);
          }}
        />
      </Section>
    </>
  );
}

export default UniversityPage;

import { useState } from 'react';
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

import style from 'pages/UniversityPage.module.css';
import { WidgetForm } from 'components/WidgetForm';

const FORM_KEYS = {
  teacherForm: 'teacher',
  cityForm: 'city',
  facultyForm: 'faculty',
};

export function UniversityPage() {
  const [modeMenu, setModeMenu] = useState([]);

  const [tutors, setTutors] = useState(universityData.tutors);

  const [cities, setCities] = useState(
    universityData.cities.map(city => ({ name: city }))
  );

  const toggleMenu = key => {
    const index = modeMenu.indexOf(key);

    if (index < 0) {
      console.log('ne index');
      setModeMenu([...modeMenu, key]);
    }

    if (index > 0) {
      console.log('index');
      setModeMenu([...modeMenu.splice(index, 1)]);
    }
  };

  const addTutor = tutor => {
    setTutors([...universityData.tutors, tutor]);
  };

  const addCity = city => {
    setCities([...cities, city]);
  };

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
        {modeMenu.includes(FORM_KEYS.teacherForm) && (
          <TeacherForm addTutor={addTutor} />
        )}
        <Button
          title="Добавити викладача"
          onClick={() => {
            toggleMenu(FORM_KEYS.teacherForm);
          }}
        />
      </Section>

      <Section icon={cityMarker} title="Міста">
        <GeneralCardList list={cities} />
        {modeMenu.includes(FORM_KEYS.cityForm) && (
          <WidgetForm handleSubmit={addCity} buttonName={'Додати'} />
        )}
        <Button
          title="Додати місто"
          onClick={() => {
            toggleMenu(FORM_KEYS.cityForm);
          }}
        />
      </Section>

      <Section icon={robot} title="Факультети">
        <GeneralCardList list={universityData.department} />
        <Button title="Додати факультет" />
      </Section>
    </>
  );
}

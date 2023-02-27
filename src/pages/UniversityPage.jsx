import { Section } from 'components/Section';
import { Card } from 'components/Card';
import { Paper } from 'components/Paper';
import { TutorList } from 'components/TutorList';
import { Button } from 'components/Button';

import universityData from 'constants/universityData.json';
import catIcon from 'assets/images/cat.svg';

import style from 'pages/UniversityPage.module.css';

export function UniversityPage() {
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
        <TutorList tutors={universityData.tutors} />
        <Button title="Добавити викладача" />
      </Section>
    </>
  );
}

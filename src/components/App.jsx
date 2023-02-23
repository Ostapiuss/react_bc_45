import React from 'react';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import { Card } from 'components/Card';
import { Paper } from './Paper';

import universityData from 'constants/universityData.json';

import '../../node_modules/modern-normalize/modern-normalize.css';
import 'index.css';
import { Section } from './Section';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Sidebar />

        <Main>
          <Section title="Информация о университете" position="right">
            <div className="university-wrapper">
              <Card universityName={universityData.name} />
              <Paper className="university-card">
                <p>
                  Опыт, концентрат знаний и возможность избежать большинство
                  ошибок при приеме на работу. Мы знаем, что хотят большинство
                  локальных и иностранных компаний и можем вам это дать. А еще
                  мы постоянно совершенствуем наши курсы программирования,
                  добавляя туда что-то новое. Вы можете лично ознакомиться с
                  историями успеха наших выпускников, чтобы убедиться в
                  эффективности нашей методики обучения. Да, мы начнем с азов и
                  самой простой информации. Знаем, что большинство людей
                  приходят к нам с нулевыми знаниями.
                </p>
              </Paper>
            </div>
          </Section>
        </Main>
      </div>
    );
  }
}

export default App;

import { Paper } from 'components/Paper'
import style from './GeneralCardList.module.css'
import shortid from 'shortid'

import dots from 'assets/images/dots.svg'

export function GeneralCardList({ list }) {

    return (
        <div className={style.cardList}>
            {
                list.map((item, index) => (
                    <GeneralCard name={item.name} key={shortid()} />
                ))
            }
        </div>
    )
    
}

function GeneralCard({name}) {
    return (
        <Paper className={style.generalCard}>
            <p>{name}</p>
            <button type='button' className={style.generalCardBtn}>
                <img src={dots} alt="dots" />
            </button>
        </Paper>
    )
}
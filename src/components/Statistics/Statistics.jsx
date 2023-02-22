import PropTypes from 'prop-types';

import style from './Statistics.module.scss'

function Statistics(items) {
    const {title, stats} = items
    return (
        <section className={style.statistics}>
            <h2 className={style.title}>{title}</h2>
  <ul className={style.statList}>
                {stats.map(({ id, label, percentage }) => {
            return (<li className={style.item} key={id} style={{backgroundColor: randomColor()}}>
                    <span className={style.label} >{label}</span>
                    <span className={style.interest} >{percentage}</span>
                </li>)
        })}
  </ul>
</section>
    )
}




Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
}))
}

export default Statistics

export function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

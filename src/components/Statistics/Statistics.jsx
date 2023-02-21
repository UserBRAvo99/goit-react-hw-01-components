import PropTypes from 'prop-types'

function Statistics(items) {
    // console.log(items);
    const {title, stats} = items
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
  <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    // console.log(id, label, percentage);
                    // const { id, label, percentage } = item
            return (<li className="item" key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>)
        })}
  </ul>
</section>
    )
}

export default Statistics


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
}))
}
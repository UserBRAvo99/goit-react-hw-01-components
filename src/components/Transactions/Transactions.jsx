import PropTypes from 'prop-types'

import style from './Transactions.module.scss'

function TransactionHistory({items}) {
    return (
        <table className={style.transactionHistory}>
            <thead className=''>
                <tr>
                <th className={style.th}>Type</th>
                <th className={style.th}>Amount</th>
                <th className={style.th}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }, index) => {
                    let i = index + 1
                    return (<tr className={i%2===0 ? style.trGrey : style.trWhite } key={id}>
                        <td className={style.td}>{ type }</td>
                        <td className={style.td}>{ amount }</td>
                        <td className={style.td}>{ currency }</td>
                    </tr>)
                })}
            </tbody>
            </table>
    )
 }

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}


export default TransactionHistory


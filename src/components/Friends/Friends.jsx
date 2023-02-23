// імпортую пакет PropTypes для майбутньої перевірки доних що приходять
import PropTypes from 'prop-types'
// імпортую стилі для розмітки
import style from './Friends.module.scss'
//компонент функція, приймає пропс
function FriendList({ friends }) {
    // обов'язково повертаю розмітку
    return (
        //батьківський елемент, в данному випадку він один, а в нього буде рендиритися потрібна кількість елементів
        //підключаю стилі style.friendList (прописую камелкейсом)
        <ul className={style.friendList} >
            {/* мапаю масив данних та одразу деструктуризую потрібні ключі */}
            {/* також можна вказати дефолтні значення, якщо прийдуть биті данні або картинка, наприклад: imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder", */}
            {friends.map(({ id, avatar, name, isOnline }) => {
                // з мапу також обов'язково треба повертати результат роботи методу
                // якщо треба зарендити колекцію, обовязково треба вказати ключ(тобто унікальний айдішнік в найголовніший/найвищий елемент розмітки блоку), інакше буде помилка
                return (
                    <li className={style.item} key={id}>
                        {/* тут використовую рендер за умовою, в даному випадку в className потрібно вказати клас який відповідаєє умові */}
                        <span className={isOnline ? style.isOnline : style.isOffline} ></span>
                        {/* далі все схоже, пропису розмітку та вказую динамічні значення для рендингу, підключаю стилі */}
                        <img className={style.img} src={avatar} alt="User avatar" />
                        <p className={style.nameFriend} >{name}</p>
                    </li>
                )
            })}
        </ul>
    )
    
}


// до початку рендинга потрібно перевірити дані(пропс), на компонент-функцію викликаю метод та перевіряю чи приходять дані і чи відповідають вони потрібному типу
FriendList.propTypes = {
    // обов'язково треба звертати увагу на вкладеність в пропсі який перевіряємо, за для уникнення помилок в консолі
    // friends вказую що це масив і викликаю метод PropTypes.arrayOf, потім спускаюсь нище по вкладеності і вказую що далі буде об'єкт PropTypes.shape. Далі перевіряю ключі та їх значення - id(ключ): PropTypes(метод перевірки).number(який тип данних я очікую).isRequired(означає що ці данні обов'язкові),
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
        // типи можуть бути різні, все залежить від того які дані будуть в пропсі(тобто прийдуть с бєка)
}))
}
// експортую компонент функція по дефолту, можна і звичайним експортом
export default FriendList

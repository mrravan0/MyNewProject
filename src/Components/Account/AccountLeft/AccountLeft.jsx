import './_accountLeft.scss';
const AccountLeft = () => {
    return (
        <div className="account__left">
            <p className="account__title">Manage My Account</p>
            <ul className='account__list'>
                <li className='account__subtitle is-select'>My Profile</li>
                <li className='account__subtitle'>Address Book</li>
                <li className='account__subtitle'>My Payment Options</li>
            </ul>
            <p className="account__title">My Orders</p>
            <ul className='account__list'>
                <li className='account__subtitle'>My Returns</li>
                <li className='account__subtitle'>My Cancellations</li>
            </ul>
            <p className="account__title">My WishList</p>
        </div>
    )
}

export default AccountLeft
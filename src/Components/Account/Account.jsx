import PageInfo from '../PageInfo/PageInfo';
import AccountLeft from './AccountLeft/AccountLeft';
import AccountRight from './AccountRight/AccountRight';
import './_account.scss';
const Account = () => {
    return(
        <section className='account'>
            <div className="account__inner container">
                <div className="account__wrapper">
                    <PageInfo textList={['Home','Account']}/>
                    <div className="account__group">
                        <AccountLeft />
                        <AccountRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Account;
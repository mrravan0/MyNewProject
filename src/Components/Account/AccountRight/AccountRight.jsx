import Input from '../../Input/Input';
import Button from '../../Button/Button';
import './_accountRight.scss';
const AccountRight = () => {
    return (
        <div className="account__right">
            <p className="account__right-title">Edit your Profile</p>
            <div className="account__right-content">
                <div className="account__right-group">
                    <p className="account__title">First Name</p>
                    <Input condition={'text'} text={'Andrei'} />
                </div>
                <div className="account__right-group">
                    <p className="account__title">Last Name</p>
                    <Input condition={'text'} text={'Rimel'} />
                </div>
            </div>
            <div className="account__right-content">
                <div className="account__right-group">
                    <p className="account__title">Email</p>
                    <Input condition={'email'} text={'andrei@gmail.com'} />
                </div>
                <div className="account__right-group">
                    <p className="account__title">Address</p>
                    <Input condition={'text'} text={'Canada, Toronto'} />
                </div>
            </div>
            <div className="account__bottom">
                <div className="account__right-group">
                    <p className="account__title">Password Changes</p>
                    <Input condition={'password'} text={'Current Password'} />
                </div>
                <Input condition={'password'} text={'New Password'} />
                <Input condition={'password'} text={'Confirm New Password'} />
            </div>
            <div className="account__buttons">
                <Button text={'Cancel'} />
                <Button text={'Save Changes'} />
            </div>
        </div>
    )
}
export default AccountRight
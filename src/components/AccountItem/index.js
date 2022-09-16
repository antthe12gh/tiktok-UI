import { faCheck, faCheckCircle, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avt')}
                src="https://p9-sign-sg.tiktokcdn.com/tiktok-obj/1665757201241090~c5_300x300.webp?x-expires=1663484400&x-signature=B3OOJ%2B9Lv96xCQjWVLuH1hKknfQ%3D"
                alt="duytham"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>duythamchannel</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>

                <span className={cx('usename')}>Duy Thẩm</span>
            </div>
        </div>
    );
}

export default AccountItem;

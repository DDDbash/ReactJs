import React from 'react';
import layoutModule from '../icons/layout-module-1.svg';
import paragraphCenter from '../icons/paragraph-center-align.svg';
import angleBrackets from '../icons/angle-brackets.svg';
import checkShield from '../icons/check-shield-alternate.svg';
import pin from '../icons/pin-2.svg';
import spellingCheck from '../icons/spelling-check.svg';


const SubMenu = () => (
    <ul>
        <li className="part-one">
            <ol className="mega-menu__category">
                <li>
                    <img
                        src={layoutModule}
                        height="16"
                        width="16"
                        alt=""
                    />
                    <span className="mega-menu__link">Menu Link</span>
                </li>
                <li>
                    <img
                        src={paragraphCenter}
                        height="16"
                        width="16"
                        alt=""
                    />
                    <span className="mega-menu__link">Menu Link</span>
                </li>
                <li>
                    <img
                        src={spellingCheck}
                        height="16"
                        width="16"
                        alt=""
                    />
                    <span className="mega-menu__link">Menu Link</span>
                </li>
                <li>
                    <img
                        src={angleBrackets}
                        height="16"
                        width="16"
                        alt=""
                    />
                    <span className="mega-menu__link">Menu Link</span>
                </li>
            </ol>
        </li>
        <li className="part-two">
            <ol className="mega-menu__category">
                <li>
                    <img
                        src={checkShield}
                        height="16"
                        width="16"
                        alt=""
                    />
                    <span className="mega-menu__link">Menu Link</span>
                </li>
                <li>
                    <img
                        src={pin}
                        height="16"
                        width="16"
                        alt=""
                    />
                    <span className="mega-menu__link">Menu Link</span>
                </li>
            </ol>
        </li>
    </ul>
);

export default SubMenu;
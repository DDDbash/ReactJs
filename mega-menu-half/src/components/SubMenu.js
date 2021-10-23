import React from 'react';
import questionBg from '../illustration/images_5.png';
import uploadCircle from '../icons/uploadCircle.svg';
import firstIcon from '../icons/icon.svg';
import secondIcon from '../icons/icon2.svg';
import thirdIcon from '../icons/icon3.svg';

const SubMenu = () => (
    <ul>
        <li>
            <li className="part-one">
                <span className="mega-menu__category">MARKETING</span>
                <ol className="mega-menu__category-header">
                    <li>
                        <img
                            src={firstIcon}
                            height="56"
                            width="56"
                            alt=""
                        />
                        <div className="mega-menu__text">
                            <span className="mega-menu__link">Menu Link</span>
                            <span className="mega-menu__subtext">Subtext goes here</span>
                        </div>
                    </li>
                    <li>
                        <img
                            src={secondIcon}
                            height="56"
                            width="56"
                            alt=""
                        />
                        <div className="mega-menu__text">
                            <span className="mega-menu__link">Menu Link</span>
                            <span className="mega-menu__subtext">Subtext goes here</span>
                        </div>
                    </li>
                </ol>
            </li>
            <li className="part-one">
                <span className="mega-menu__category">MARKETING</span>
                <ol className="mega-menu__category-header">
                    <li>
                        <img
                            src={thirdIcon}
                            height="56"
                            width="56"
                            alt=""
                        />
                        <div className="mega-menu__text">
                            <span className="mega-menu__link">Menu Link</span>
                            <span className="mega-menu__subtext">Subtext goes here</span>
                        </div>
                    </li>
                </ol>
            </li>
        </li>
        <li>
            <div className="part-two">
                <img
                    src={questionBg}
                    height="239"
                    width="239"
                    className="question-image"
                    alt=""
                />
                <div className="mega-menu__text">
                    <span className="mega-menu__question-text">Got questions?</span>
                    <span className="mega-menu__question-subtext">Contact us to get them answered!</span>
                </div>
                <img
                    src={uploadCircle}
                    height="20"
                    width="20"
                    className="upload"
                    alt=""
                />
            </div>
        </li>
    </ul>
);
export default SubMenu;
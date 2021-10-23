import React from 'react';
import uploadCircle from '../icons/uploadCircle.svg';
import illustration09 from '../illustrations/Illustrations-09.png';
import illustration11 from '../illustrations/Illustrations-11.png';
import illustration18 from '../illustrations/Illustrations-18.png';
import illustration22 from '../illustrations/Illustrations-22.png';

const SubMenu = () => (
    <ul>
        <li className="mega-menu__section-one">
            <li className="part-one">
                <ol className="mega-menu__category-header">
                    <li>
                        <img
                            src={illustration09}
                            height="105"
                            width="130"
                            alt=""
                        />
                        <div className="mega-menu__text">
                            <span className="mega-menu__link">
                                Menu Link
                            </span>
                            <span className="mega-menu__subtext">
                                Laudem et harum quidem se esse albam, dulce mel quorum nihil est, omnis.
                            </span>
                            <button type="button" className="btn btn-yellow">
                                Learn More
                            </button>
                        </div>
                    </li>
                    <li>
                        <img
                            src={illustration18}
                            height="80"
                            width="130"
                            alt="" />
                        <div className="mega-menu__text">
                            <span className="mega-menu__link">
                                Menu Link
                            </span>
                            <span className="mega-menu__subtext">
                                Laudem et harum quidem se esse albam, dulce mel quorum nihil est, omnis.
                            </span>
                            <button type="button" className="btn btn-yellow">
                                Learn More
                            </button>
                        </div>
                    </li>
                    <li>
                        <img
                            src={illustration22}
                            height="90"
                            width="130"
                            alt=""
                        />
                        <div className="mega-menu__text">
                            <span className="mega-menu__link">
                                Menu Link
                            </span>
                            <span className="mega-menu__subtext">
                                Laudem et harum quidem se esse albam, dulce mel quorum nihil est, omnis.
                            </span>
                            <button type="button" className="btn btn-yellow">
                                Learn More
                            </button>
                        </div>
                    </li>
                </ol>
            </li>
        </li>
        <li className="mega-menu__section-two">
            <div className="part-two">
                <img
                    src={illustration11}
                    height="165"
                    width="200"
                    className="question-image"
                    alt="" />
                <div className="mega-menu__text">
                    <span className="mega-menu__question-text">
                        Got questions?
                    </span>
                    <span className="mega-menu__question-subtext">
                        Read our knowledge base.
                    </span>
                </div>
                <img
                    src={uploadCircle}
                    height="20"
                    width="20"
                    className="upload fade-in"
                    alt="" />
            </div>
        </li>
    </ul>
);

export default SubMenu;

import React from 'react';
import FourthLevel from './FourthLevel';

const Content = (props) => {

    return (
        <ul className="btn-toggle-nav list-unstyled">
            <li>
                <span
                    className="btn btn-toggle rounded collapsed sub-folder"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + props.id}
                    aria-expanded={props.reset ? "false" : props.drop ? "true" : "false"}
                    onClick={() => props.setDrop(!props.drop)}>
                    <img src="https://i.postimg.cc/MGpxmPSp/Icon-Folder.png" height="24" width="24" />
                    <span className="sub-text__header">Fourth Level</span>
                </span>
            </li>
            <div className={props.reset ? "collapse sub no-show" : "collapse sub"} id={props.id}>
                <FourthLevel />
            </div>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/903hxyvN/file-restore.png" height="24" width="24" />
                        <span className="sub-text__header">AppDelegate.h</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/903hxyvN/file-restore.png" height="24" width="24" />
                        <span className="sub-text__header">AppDelegate.m</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/Fs7yb39Q/file-music.png" height="24" width="24" />
                        <span className="sub-text__header">ViewController.h</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/Fs7yb39Q/file-music.png" height="24" width="24" />
                        <span className="sub-text__header">ViewController.m</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/gJzRx6MQ/file-export.png" height="24" width="24" />
                        <span className="sub-text__header">Main.Storyboard</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/vmMxKVdT/folder-image.png" height="24" width="24" />
                        <span className="sub-text__header">Assets.xcassets</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/Fs7yb39Q/file-music.png" height="24" width="24" />
                        <span className="sub-text__header">LaunchStoryBoard</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/wvrv9tnh/file-outline.png" height="24" width="24" />
                        <span className="sub-text__header">Info.plist</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className="link-dark sub-item rounded">
                    <div className="sub-text">
                        <img src="https://i.postimg.cc/wvrv9tnh/file-outline.png" height="24" width="24" />
                        <span className="sub-text__header">Files.json</span>
                    </div>
                </a>
            </li>
        </ul>
    );
}

export default Content;
import React, { useState } from 'react';
import Content from './ThirdLevel';

const SubFolder = (props) => {
    const [reset, setReset] = useState(true);
    const [drop, setDrop] = useState(false);

    const dropHandle = () => {
        setReset(!reset);
        if (drop)
            setDrop(!drop);
    }

    return (
        <ul className="sub-category">
            <li>
                <span
                    className="btn btn-toggle rounded collapsed sub-folder"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + props.id}
                    aria-expanded="false"
                    onClick={dropHandle}
                >
                    <img src={props.img} height="24" width="24" />
                    {props.title}
                </span>
            </li>
            <div className="collapse sub" id={props.id}>
                <Content
                    reset={reset}
                    drop={drop}
                    setDrop={setDrop}
                    id={props.id + "FoldersThirdLevel"}
                />
            </div>
        </ul>
    );
}

export default SubFolder;

// @ts-ignore
import React from "react";
import './Avatar.css';

export const Avatar = (props: {src:string}) => {
    return <img className="avatar" src={props.src}/>
};

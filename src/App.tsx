import React, {useState} from 'react';
import './App.css';
import Avatar1 from './images/star_wars_wallpaper_1.png';
import Avatar2 from './images/star_wars_wallpaper_2.png';
import Avatar3 from './images/star_wars_wallpaper_3.png';
import Avatar4 from './images/star_wars_wallpaper_4.png';
import {Hello} from "./components/hello/Hello";
import {Avatar} from "./components/avatar/Avatar";

function App() {

    const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];

    const [image, setImage] = useState<string>(Avatar1);
    const [currentAvatarVariant, setCurrentAvatarVariant] = useState<number>(1);
    const [name, setName] = useState<String>("");
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const btnClickLoginHandler = () => {
        console.log("Login button clicked");
        setLoggedIn(true);
    };

    const btnClickLogoutHandler = () => {
        console.log("Logout button clicked");
        setLoggedIn(false);
    };

    const btnClickSetNameHandler = () => {
        console.log("Set name button clicked");
        setName("Liza");
    };

    const btnClickChangeAvatarHandler = () => {
        const numberOfAvatarVariants = avatars.length;
        // to make sure that next avatar doesn't match the current one
        // select avatar variant number from 0 to length-2 (since one is already used)
        // and increase it by 1 if it is equal to or larger than the current avatar variant
        let variant = Math.floor(Math.random() * Math.floor(numberOfAvatarVariants-1));
        console.log("current " + currentAvatarVariant + "  next " + variant);
        if (variant >= currentAvatarVariant) {
            variant = variant+1;
            console.log("new variant was changed to " + variant)
        }
        setCurrentAvatarVariant(variant);
        setImage(avatars[variant]);
    };

    return (
        <div className="App">
            <div className="App-wrapper">
                {loggedIn ? <div className="UserInfo-wrapper">
                    <Avatar src={image}/>
                    <Hello name={name}/>
                </div> : null}
                {loggedIn ?
                    <button className="App-button logout-button" onClick={btnClickLogoutHandler}>Log out</button> :
                    <button className="App-button login-button" onClick={btnClickLoginHandler}>Log in</button>}
                {loggedIn ?
                    <button className="App-button"
                            onClick={btnClickSetNameHandler}>
                        Set name to 'Liza'
                    </button>
                    : null}
                {loggedIn ?
                    <button className="App-button"
                            onClick={btnClickChangeAvatarHandler}>
                        Set random avatar
                    </button>
                    : null}
            </div>
        </div>
    );
}

export default App;

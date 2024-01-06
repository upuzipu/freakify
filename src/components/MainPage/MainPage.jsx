import React from "react";

export function MainPage(props) {
    const username = props.username
    return (
        <div className="wrapper">
            <div>
                <h1>
                    Welcome back, { username }
                </h1>
            </div>
            <div className="playlists">
                <h3>
                    Your playlists
                </h3>
            </div>
            <div className="albums">
                <h3>
                    Your Albums
                </h3>
            </div>
        </div>
    )
}

export default MainPage
import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./MainPage.css"
import {useSelector} from "react-redux";

export function MainPage(props) {
    const username = props.username
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const login = useSelector((state) => state.login.value)
    useEffect(() => {
        axios
            .get("https://localhost:8080/albums?user=" + username.toString())
            .then((response) => {
                setAlbums(response.data);
                getAlbums()
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get("https://localhost:8080/playlists?user=" + username.toString())
            .then((response) => {
                setPlaylists(response.data);
                getPlaylists()
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function getPlaylists() {
        let newUl = document.createElement('ul')
        playlists.forEach(playlist => {
            let listItem = document.createElement("li");
            let itemText = document.createTextNode(playlist.name)
            listItem.appendChild(itemText)
            newUl.appendChild(listItem)
        })
        let playlists_div = document.querySelector('#playlists')
        playlists_div.appendChild(newUl)
    }

    function getAlbums() {
        let newUl = document.createElement('ul')
        albums.forEach(album => {
            let listItem = document.createElement("li");
            let itemText = document.createTextNode(album.name)
            listItem.appendChild(itemText)
            newUl.appendChild(listItem)
        })
        let album_div = document.querySelector('#albums')
        album_div.appendChild(newUl)
    }

    return (
        <div>
            <h1 className="MainText">Welcome back, {login}</h1>
            <div className="wrapper">
                <div className="left">
                    <h1>Your Albums</h1>
                    <button>Add album</button>
                    <div id="albums">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <h1>Your playlists</h1>
                    <button>Add playlist</button>
                    <div id="playlists">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage


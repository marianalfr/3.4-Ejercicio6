import React from 'react';
import MediaCard from './Mediacard';
import '../styles/App.scss';

class MediaList extends React.Component{
    render(){
        return (
            <div className="app">
                <h1>Media Cards</h1>
                <ul className="card-list">
                    <li><MediaCard imgno="img1" name="Lucía Herrador" date="15 de Diciembre de 2019" likes="40" heart="fill"/></li>
                    <li><MediaCard imgno="img2" name="Mariana Lerma" date="15 de Diciembre de 2019" likes="20" heart="fill"/></li>
                    <li><MediaCard imgno="img3" name="Amelia González" date="17 de Noviembre de 2019" likes="0" heart="nofill"/></li>
                </ul>
            </div>
        );
    }
}

export default MediaList;
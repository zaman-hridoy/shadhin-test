import React from 'react';

const SearchResult = ({ loading, results }) => {
    const searchItems = results !== null && results.data.Album.data.map(artist => {
        const image = artist.image.replace('<$size$>', '300');
        // console.log(image);
        return (
            <li key={artist.AlbumId}>
                <a href="#!"><img src={image || '/img/artist1.jpg'} alt={artist.Artist} /> <span>{artist.Artist}</span> - {artist.title}</a>
            </li>
        )
    });
    return (
        <div className="search-reasult">
                <ul>
                    {searchItems}
                    {/* <li><a href="#!"><img src="img/artist1.jpg" /> <span>Habib wa</span>hid - Prithibir Joto Shukh</a></li>
                    <li><a href="#!"><img src="img/artist2.jpg" /> <span>Habib wa</span>hid - Din Gelo</a></li>
                    <li><a href="#!"><img src="img/artist3.jpg" /> <span>Habib wa</span>hid</a></li>
                    <li><a href="#!"><img src="img/artist4.jpg" /> <span>Habib wa</span>hid - Best of Habib</a></li>
                    <li><a href="#!"><img src="img/artist5.jpg" /> <span>Habib wa</span>hid - Tumi Je Amar Thikana</a></li>
                    <li><a href="#!"><img src="img/artist6.jpg" /> <span>Habib wa</span>hid - Cholo Na</a></li>
                    <li><a href="#!"><img src="img/artist7.jpg" /> <span>Habib wa</span>hid - Doob</a></li>
                    <li><a href="#!"><img src="img/artist8.jpg" /> <span>Habib wa</span>hid - Moner Thikana</a></li>
                    <li><a href="#!"><img src="img/album4.jpg" /> <span>Habib wa</span>hid - Ghum</a></li>
                    <li><a href="#!"><img src="img/album2.jpg" /> <span>Habib wa</span>hid - Didha</a></li> */}
                </ul>
        </div>
    );
}

export default SearchResult;

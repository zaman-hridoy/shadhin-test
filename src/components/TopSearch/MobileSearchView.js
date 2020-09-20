import React from 'react';

const MobileSearchView = ({ keyword, changeHandler, submitHandler, clearKeyword }) => {
    return (
        <div className="p30 src src-mobile d-block d-md-none">
            <h3 className="heading">Search</h3>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    // name="" 
                    placeholder="Search artist, songs, videos..." 
                    value={keyword}
                    onChange={changeHandler}
                />
                <button type="submit" className="btn-submit"><i className="fa fa-search"></i></button>
                {keyword.length > 0 && <button onClick={clearKeyword} className="search-cancil"><img src="img/icon-cross.png" alt="icon cross" /></button>}
            </form>
        </div>
    );
}

export default MobileSearchView;

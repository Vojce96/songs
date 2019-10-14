import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'My Name Is', duration: '4:07' },
        { title: 'Still D.R.E.', duration: '4:51' },
        { title: 'Gangstas Paradise', duration: '4:16' },
        { title: 'Jump Around', duration: '4:01' } //Yes, i love '90 rap music 
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

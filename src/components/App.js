import React from 'react';
import SongsList from './SongsList';
import SongDetails from './SongDetails';

import '../styles/app.css';

const App = () => {
	return (
		<div className="app">
			<SongsList />
			<SongDetails />
		</div>
	);
}

export default App;
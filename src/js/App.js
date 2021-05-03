import React, { useState, useEffect } from "react";
import { SoundList } from "./component/soundlist.jsx";
import { Player } from "./component/player.jsx";
//import { Player } from "./component/player.jsx"

const App = () => {
	const [soundList, setSoundList] = useState({
		Songs: [
			{
				id: 1,
				category: "game",
				name: "Mario Castle",
				url: "files/mario/songs/castle.mp3"
			},
			{
				id: 2,
				category: "game",
				name: "Mario Star",
				url: "files/mario/songs/hurry-starman.mp3"
			},
			{
				id: 3,
				category: "game",
				name: "Mario Overworld",
				url: "files/mario/songs/overworld.mp3"
			}
		]
	});
	const playSound = url => {
		setCurrentSong(url);
	};

	const [currentSong, setCurrentSong] = useState("");
	return (
		<div className="container">
			<div className="page-header">
				<h1 className="text-center">Music Player With React</h1>
			</div>
			<SoundList data={soundList.Songs} playSound={playSound} />
			<Player song={currentSong} />
		</div>
	);
};
export default App;

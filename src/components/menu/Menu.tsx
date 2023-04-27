import "./menu.css";

import React from "react";
import * as Scenes from "../../game/scenes";
import { useGameContext } from "../app";

const Menu: React.FC = () => {
	const { game } = useGameContext();
	const scene = game?.scene.getScene("GameScene") as Scenes.GameScene;
	return (
		<div className="bit-container menu">
			<div>Menu</div>
		</div>
	);
};

export default Menu;

import "./menu.css";

import React from "react";
import * as Scenes from "../../game/scenes";

export interface MenuProps {
	game: Phaser.Game | undefined;
}

const Menu: React.FC<MenuProps> = ({ game }) => {
	const scene = game?.scene.getScene("GameScene") as Scenes.GameScene;
	return (
		<div className="bit-container menu">
			<div>Menu</div>
		</div>
	);
};

export default Menu;

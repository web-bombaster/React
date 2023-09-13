import styles from "./title.module.css";
import { Link } from "react-router-dom";

export const NavComponent = () => {
	return (
		<ul>
			<li>
				<Link to="/">Главная</Link>
			</li>
			<li>
				<Link to="/services">Услуги</Link>
			</li>
			<li>
				<Link to="/contacts">Контакты</Link>
			</li>
		</ul>
	);
};

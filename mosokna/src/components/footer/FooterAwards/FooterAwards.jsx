// import fa01 from "./../../../img/content/footer-awards/01.png";
// import fa02 from "./../../../img/content/footer-awards/02.png";
// import fa03 from "./../../../img/content/footer-awards/03.png";
// import fa04 from "./../../../img/content/footer-awards/04.png";
// import fa05 from "./../../../img/content/footer-awards/05.png";
// import fa06 from "./../../../img/content/footer-awards/06.png";
// import fa07 from "./../../../img/content/footer-awards/07.png";
// import fa08 from "./../../../img/content/footer-awards/08.png";

import styles from './style.module.scss'

const FooterAwards = () => {
	return (
		<div className={styles.footer_awards}>
			<p>Наши награды</p>
			<ul className={styles.footer_awards__list}>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa01} alt="" /> */}
					<img src='/footer-awards/01.png' alt="" />
				</li>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa02} alt="" /> */}
					<img src='/footer-awards/02.png' alt="" />
				</li>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa03} alt="" /> */}
					<img src='/footer-awards/03.png' alt="" />
				</li>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa04} alt="" /> */}
					<img src='/footer-awards/04.png' alt="" />
				</li>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa05} alt="" /> */}
					<img src='/footer-awards/05.png' alt="" />
				</li>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa06} alt="" /> */}
					<img src='/footer-awards/06.png' alt="" />
				</li>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa07} alt="" /> */}
					<img src='/footer-awards/07.png' alt="" />
				</li>
				<li className={styles.footer_awards__list_item}>
					{/* <img src={fa08} alt="" /> */}
					<img src='/footer-awards/08.png' alt="" />
				</li>
			</ul>
		</div>
	);
};

export default FooterAwards;
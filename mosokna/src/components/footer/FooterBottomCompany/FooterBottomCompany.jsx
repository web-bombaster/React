// import footerlogo from "./../../../img/footer-logo.svg";

import styles from './style.module.scss'

const FooterBottomCompany = () => {
	return (
		<div className={styles.footer_bottom__col}>
			<p className={styles.footer_bottom__offer}>
				Все цены на сайте указаны с учетом действующих скидок и акций.
				Сайт не является публичной офертой и носит информационный
				характер.
			</p>
			<div className={`${styles.footer_bottom__company} ${styles.footer_company}`}>
				<div className={styles.footer_company__logo}>
					{/* <img src={footerlogo} alt="" /> */}
					<img src='/footer-logo.svg' alt="" />
				</div>
				<p className={styles.footer_company__copy}>
					© 1992—2023 «Московские Окна»
				</p>
				<p className={styles.footer_company__copy_descr}>
					Права официального использования слова «Москва» письменно предоставлены Межведомственной комиссией Правительства Москвы.
				</p>
			</div>
		</div>
	);
};

export default FooterBottomCompany;
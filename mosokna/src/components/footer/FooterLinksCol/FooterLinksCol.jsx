import styles from './links.module.scss'
const FooterLinkBlock  = () => {
	return (
		<div className={`${styles.footer_links__col} ${styles.footer_col}`}>
			<span className={styles.footer_col__title}>Продукция</span>
			<div className={styles.footer_col__links}>
				<a className={styles.footer_col__links_item} href="#">
					Пластиковые окна
				</a>
				<a className={styles.footer_col__links_item} href="#">
					Пластиковые окна РЕХАУ
				</a>
				<a className={styles.footer_col__links_item} href="#">
					Стеклопакеты
				</a>
				<a className={styles.footer_col__links_item} href="#">
					Двери
				</a>
				<a className={styles.footer_col__links_item} href="#">
					Фурнитура
				</a>
				<a className={styles.footer_col__links_item} href="#">
					Готовые окна
				</a>
			</div>
		</div>
	);
};
export default FooterLinkBlock ;
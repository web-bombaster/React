import styles from './style.module.scss';

const FooterColLinksBold = () => {
	return (
		<div className={styles.footer_col__links__bold}>
			<a className={styles.footer_col__links_item} href="#">
				Сертификаты
			</a>
			<a className={styles.footer_col__links_item} href="#">
				Вопросы и ответы
			</a>
			<a className={styles.footer_col__links_item} href="#">
				Политика конфидециальности
			</a>
		</div>
	);
};
export default FooterColLinksBold;

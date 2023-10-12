// import rehaulogo from "./../../../img/rehau-logo.svg";
// import certificate from "./../../../img/certificate.svg";

import styles from './style.module.scss'

const FooterRehau = () => {
	return (
		<div className={styles.footer_bottom__col}>
			<div className={styles.footer_rehau}>
				<div className={styles.footer_rehau__logo}>
					{/* <img src={rehaulogo} alt="" /> */}
					<img src='/rehau-logo.svg' alt="" />
				</div>
				<p className={styles.footer_rehau__descr}>
					ООО «Московские окна» является сертифицированным
					производителем компании REHAU
				</p>
				<a className={styles.footer_rehau__link} href="#">
					<div className={styles.footer_rehau__qr}>
						{/* <img src={certificate} alt="" /> */}
						<img src='/certificate.svg' alt="" />
					</div>
					Сертификат
				</a>
			</div>
		</div>
	);
};

export default FooterRehau;
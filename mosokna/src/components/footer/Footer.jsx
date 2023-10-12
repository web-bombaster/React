// import "./../../scss/_vars.scss";
import "./../../scss/_main.scss";
// import "./../../scss/_fonts.scss";
// import "./../../scss/_button.scss";
import styles from './style.module.scss';

import FooterLinksCol from "./FooterLinksCol/FooterLinksCol";
import FooterColLinksBold from "./FooterColLinksBold/FooterColLinksBold";
import SocBtns from "./SocBtns/SocBtns";
import FooterAwards from "./FooterAwards/FooterAwards";
import FooterBottomCompany from "./FooterBottomCompany/FooterBottomCompany";
import FooterRehau from "./FooterRehau/FooterRehau";

import CommonButtonModal from "../CommonButtonModal/CommonButtonModal";
// import icon from'./icon.svg';
import fa08 from "./../../img/content/footer-awards/08.png";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.container} ${styles.footer__container}`}>
				
				<div className={styles.footer_btns}>
					<a
						className={`${styles.footer_btns__item} ${styles.footer_btns__item__payment} ${styles.btn}`}
						href="#"
					>
						<svg
							className={styles.footer_btns__item_icon}
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
						>
							<rect
								width="16"
								height="16"
								transform="translate(0.5)"
								fill="white"
							/>
							<path
								d="M0.5 4C0.5 2.89543 1.39543 2 2.5 2H14.5C15.6046 2 16.5 2.89543 16.5 4V5H0.5V4Z"
								fill="currentColor"
							/>
							<path
								d="M0.5 7V12C0.5 13.1046 1.39543 14 2.5 14H14.5C15.6046 14 16.5 13.1046 16.5 12V7H0.5ZM3.5 9H4.5C5.05228 9 5.5 9.44772 5.5 10V11C5.5 11.5523 5.05228 12 4.5 12H3.5C2.94772 12 2.5 11.5523 2.5 11V10C2.5 9.44772 2.94772 9 3.5 9Z"
								fill="currentColor"
							/>
						</svg>
						<span>Оплатить заказ</span>
					</a>
					<a
						className={`${styles.footer_btns__item} ${styles.footer_btns__item__phone} ${styles.btn}`}
						href="#"
					>
						<svg
							className={styles.footer_btns__item_icon}
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1.88477 0.511076C2.62689 -0.231039 3.85149 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z"
								fill="currentColor"
							/>
						</svg>

						<span>Обратный звонок</span>
					</a>
					<CommonButtonModal text={"Оплатить заказ"}  icon={fa08} variant="white" />
				</div>

				<div className={styles.footer_links}>
					<FooterLinksCol/>
					<FooterLinksCol/>
					<FooterLinksCol/>
					<FooterLinksCol/>

					<div className={styles.footer_col}>
						<FooterColLinksBold />
						<SocBtns/>
					</div>
				</div>
				
				<FooterAwards />
				<div className={styles.footer_bottom}>
					<FooterBottomCompany />
					<FooterRehau/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

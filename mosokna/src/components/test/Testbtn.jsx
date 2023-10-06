// import "./../../scss/_vars.scss";
import "./../../scss/_main.scss";
// import "./../../scss/_fonts.scss";
// import "./../../scss/_button.scss";
import "./style.scss";
// import styles from "./testbtn.module"

import vk from './../../img/content/soc-btns/vk.svg'
import youtube from './../../img/content/soc-btns/youtube.svg'
import fa01 from './../../img/content/footer-awards/01.png'
import fa02 from './../../img/content/footer-awards/02.png'
import fa03 from './../../img/content/footer-awards/03.png'
import fa04 from './../../img/content/footer-awards/04.png'
import fa05 from './../../img/content/footer-awards/05.png'
import fa06 from './../../img/content/footer-awards/06.png'
import fa07 from './../../img/content/footer-awards/07.png'
import fa08 from './../../img/content/footer-awards/08.png'
import footerlogo from './../../img/footer-logo.svg'
import rehaulogo from './../../img/rehau-logo.svg'
import certificate from './../../img/certificate.svg'


export const Testbtn = () => {
	return (
		<footer className="footer">
			<div className="container footer__container">
				<div className="footer_btns">
					<a
						className="footer_btns__item footer_btns__item--payment btn"
						href="#"
					>
						<svg
							className="footer_btns__item-icon"
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
						className="footer_btns__item footer_btns__item--phone btn"
						href="#"
					>
						<svg
							className="footer_btns__item-icon"
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
				</div>
				<div className="footer_links">
					<div className="footer_links__col footer_col">
						<span className="footer_col__title">Продукция</span>
						<div className="footer_col__links">
							<a className="footer_col__links_item" href="#">
								Пластиковые окна
							</a>
							<a className="footer_col__links_item" href="#">
								Пластиковые окна РЕХАУ
							</a>
							<a className="footer_col__links_item" href="#">
								Стеклопакеты
							</a>
							<a className="footer_col__links_item" href="#">
								Двери
							</a>
							<a className="footer_col__links_item" href="#">
								Фурнитура
							</a>
							<a className="footer_col__links_item" href="#">
								Готовые окна
							</a>
						</div>
					</div>
					<div className="footer_links__col">
						<span className="footer_col__title">Услуги</span>
						<div className="footer_col__links">
							<a className="footer_col__links_item" href="#">
								Остекление квартир
							</a>
							<a className="footer_col__links_item" href="#">
								Остекление балконов
							</a>
							<a className="footer_col__links_item" href="#">
								Отделка балконов
							</a>
							<a className="footer_col__links_item" href="#">
								Остекление офисов
							</a>
							<a className="footer_col__links_item" href="#">
								Остекление загородных домов
							</a>
						</div>
					</div>
					<div className="footer_links__col">
						<span className="footer_col__title">Цены и оплата</span>
						<div className="footer_col__links">
							<a className="footer_col__links_item" href="#">
								Калькулятор стоимости окон
							</a>
							<a className="footer_col__links_item" href="#">
								Цены на окна
							</a>
							<a className="footer_col__links_item" href="#">
								Цены на установку окон РЕХАУ
							</a>
							<a className="footer_col__links_item" href="#">
								Как купить
							</a>
							<a className="footer_col__links_item" href="#">
								Оплатить заказ
							</a>
							<a className="footer_col__links_item" href="#">
								Рассрочка
							</a>
						</div>
					</div>
					<div className="footer_links__col">
						<span className="footer_col__title">Компания</span>
						<div className="footer_col__links">
							<a className="footer_col__links_item" href="#">
								О компании
							</a>
							<a className="footer_col__links_item" href="#">
								Наше производство
							</a>
							<a className="footer_col__links_item" href="#">
								Отзывы клиентов
							</a>
							<a className="footer_col__links_item" href="#">
								Вакансии
							</a>
							<a className="footer_col__links_item" href="#">
								Контакты
							</a>
						</div>
					</div>
					<div className="footer_links__col">
						<div className="footer_col__links--bold">
							<a className="footer_col__links_item" href="#">
								Сертификаты
							</a>
							<a className="footer_col__links_item" href="#">
								Вопросы и ответы
							</a>
							<a className="footer_col__links_item" href="#">
								Политика конфидециальности
							</a>
						</div>

						<p className="soc-btns_descr">Мы в соц сетях</p>

						<div className="soc-btns">
							<a className="soc-btns_item" href="#">
								{/* <img src="./../../img/content/soc-btns/vk.svg" alt="" /> */}
								<img src={vk} alt="" />
							</a>
							<a className="soc-btns_item" href="#">
								<img
									src={youtube}
									alt=""
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="footer_awards">
					<p>Наши награды</p>
					<ul className="footer_awards__list">
						<li className="footer_awards__list-item">
							<img
								src={fa01}
								alt=""
							/>
						</li>
						<li className="footer_awards__list-item">
							<img
								src={fa02}
								alt=""
							/>
						</li>
						<li className="footer_awards__list-item">
							<img
								src={fa03}
								alt=""
							/>
						</li>
						<li className="footer_awards__list-item">
							<img
								src={fa04}
								alt=""
							/>
						</li>
						<li className="footer_awards__list-item">
							<img
								src={fa05}
								alt=""
							/>
						</li>
						<li className="footer_awards__list-item">
							<img
								src={fa06}
								alt=""
							/>
						</li>
						<li className="footer_awards__list-item">
							<img
								src={fa07}
								alt=""
							/>
						</li>
						<li className="footer_awards__list-item">
							<img
								src={fa08}
								alt=""
							/>
						</li>
					</ul>
				</div>
				<div className="footer_bottom">
					<div className="footer_bottom__col">
						<p className="footer_bottom__offer">
							Все цены на сайте указаны с учетом действующих
							скидок и акций. Сайт не является публичной офертой и
							носит информационный характер.
						</p>
						<div className="footer_bottom__company footer-company">
							<div className="footer-company__logo">
								<img src={footerlogo} alt="" />
							</div>
							<p className="footer-company__copy">
								© 1992—2023 «Московские Окна»
							</p>
							<p className="footer-company__copy-descr">
								Права официального использования слова «Москва»
								письменно предоставлены Межведомственной
								комиссией Правительства Москвы.
							</p>
						</div>
					</div>
					<div className="footer_bottom__col">
						<div className="footer-rehau">
							<div className="footer-rehau__logo">
								<img src={rehaulogo} alt="" />
							</div>
							<p className="footer-rehau__descr">
								ООО «Московские окна» является сертифицированным
								производителем компании REHAU
							</p>
							<a className="footer-rehau__link" href="#">
								<div className="footer-rehau__qr">
									<img src={certificate} alt="" />
								</div>
								Сертификат
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

// import vk from "./../../../img/content/soc-btns/vk.svg";
// import youtube from "./../../../img/content/soc-btns/youtube.svg";

import styles from './style.module.scss'

const SocBtns = () => {
	return (
		<>
			<p className={styles.soc_btns_descr}>Мы в соц сетях</p>

			<div className={styles.soc_btns}>
				<a className={styles.soc_btns_item} href="#">
					{/* <img src={vk} alt="" /> */}
					<img src='/soc-btns/vk.svg' alt="" />
				</a>
				<a className={styles.soc_btns_item} href="#">
					{/* <img src={youtube} alt="" /> */}
					<img src='/soc-btns/youtube.svg' alt="" />
				</a>
			</div>
		</>
	);
};
export default SocBtns;
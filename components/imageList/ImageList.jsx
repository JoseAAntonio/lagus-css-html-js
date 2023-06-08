/* eslint-disable @next/next/no-img-element */

import styles from "./ImageList.module.css";

export default function ImageList() {
	return (
		<div className={styles.container}>
			<div className={styles.title1}>
				<h1>Image List Component</h1>
			</div>
			<div className={styles.imgContainer}>
				<div className={styles.img1}>
					<div className={styles.title2}>
						<div class={styles.barra}></div>
						<h2>Atom in the hand of a robot</h2>
					</div>
					<img src='/assets/pic-atom.png' alt='Atom in the hand of a robot' />
				</div>
				<div className={styles.img2}>
					<div class={styles.barra}></div>
					<h2>Person working on a website</h2>
					<img
						src='/assets/pic-man-code.png'
						alt='Person working on a website'
					/>
				</div>
				<div className={styles.img3}>
					<div class={styles.barra}></div>
					<h2>Women working in styles and ESLint configurations</h2>
					<img
						src='/assets/pic-woman-code.png'
						alt='Women working in styles and ESLint configurations'
					/>
				</div>
			</div>
		</div>
	);
}

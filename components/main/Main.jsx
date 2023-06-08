import styles from "./Main.module.css";

export default function Main() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h1>This page is a HTML/CSS/JS Test!</h1>
			</div>

			<div className={styles.blocks}>
				<div className={styles.block1}>
					<p className={styles.p1}>
						The objective of this test is to assess your coding and styling
						skills. It will be considered a good result if you can style all the
						components of this page. This text also count as a valid component.
					</p>
					<p className={styles.p2}>
						This second part is a second paragraph of the same component. Both p
						tags must follow the flow and display side by side, instead of the
						regular behavior of one on top of the other. only on desktop.
					</p>
				</div>
				<div className={styles.block2}>
					<p>
						Attention: components must be responsive and use CSS Flex and Grid
						layouts
					</p>
				</div>
			</div>
		</div>
	);
}

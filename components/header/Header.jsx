import style from "./Header.module.css";

import { useState } from "react";

import Image from "next/image";

export default function Header() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div className={style.header}>
			<div className={style.menu}>
				<Image
					className={style.hamburguer}
					src='/assets/menu.svg'
					alt='menu'
					width={20.66}
					height={18}
				/>

				<button onClick={handleClick}>clicked {count} times</button>
			</div>

			<div className={style.logo}>
				Lagus<span>_</span>
			</div>
			<ul className={style.icons}>
				<li>
					<a href='#'>
						<Image
							src='/assets/person.svg'
							alt='login'
							width={18}
							height={18}
						/>
					</a>
				</li>
				<li>
					<a href='#'>
						<Image src='/assets/cart.svg' alt='cart' width={24} height={18} />
					</a>
				</li>
			</ul>
		</div>
	);
}

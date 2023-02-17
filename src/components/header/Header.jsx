import './header.css';

function Header({ title }) {
	return (
		<header className='header'>
			<p className='header__paragraph'>{title}</p>
		</header>
	);
}

export { Header };

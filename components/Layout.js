import Meta from '../lib/meta';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<div>{children}</div>
		</>
	);
};

export default Layout;

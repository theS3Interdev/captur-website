import Navbar from './navbar';
import Meta from '../lib/meta';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;

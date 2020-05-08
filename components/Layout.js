import { useRouter } from 'next/router';

import MyNavbar from "./Navbar"
import MainLayout from "./HomeLayout"
import Footer from "./Footer"
import Header from "./Header"
import { Row, Col } from "react-bootstrap"

export default function Layout(props) {

	const router = useRouter()

	return (
		<div>
			<Header />
			<Row>
				<Col><MyNavbar /></Col>
			</Row>
			<Row className="main-layout-row">
				<Col>
					{props.children}	
				</Col>
			</Row>
			<Row>
				<Col className="footer-col">
					<Footer />
				</Col>
			</Row>
		</div>
	)
}
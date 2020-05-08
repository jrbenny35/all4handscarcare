import react from "react"
import Link from "next/link"
import { Navbar, Nav, Container } from "react-bootstrap"

export default function MyNavbar(props) {

	return (
		<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
			<Container>
				<Navbar.Brand>
					<Link href="/" as={"/"} passHref>
						<h2>All 4 Hands Car Care</h2>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav>
						<Nav.Item>
							<Link href="/services" as={`/services`} passHref>
								<Nav.Link>
									Services
								</Nav.Link>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link href="/about" as={`/about`} passHref>
								<Nav.Link>
									About Us
								</Nav.Link>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link href="/contact" as={`/contact`} passHref>
								<Nav.Link>
									Contact Us
								</Nav.Link>
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

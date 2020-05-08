import react from "react"
import Link from "next/link"
import { Container, Row, Col, Nav } from "react-bootstrap"

export default function Footer() {
	return (
		<Container expand="lg" fluid className="justify-content-center sticky-bottom">
			<Row className="footer">
				<Container>
					<Row>
						<Col className="footer-author">
							<p>All 4 Hands Car Care @2020</p>
						</Col>
						<Col className="">
							<Nav className="flex-column footer-nav">
								<Nav.Item>
									<Link href="/" passHref>
										<Nav.Link>
											Link 1
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href="/" passHref>
										<Nav.Link>
											Link 1
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href="/" passHref>
										<Nav.Link>
											Link 1
										</Nav.Link>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link href="/" passHref>
										<Nav.Link>
											Link 1
										</Nav.Link>
									</Link>
								</Nav.Item>
							</Nav>
						</Col>
					</Row>
				</Container>
			</Row>
		</Container>
  )
}
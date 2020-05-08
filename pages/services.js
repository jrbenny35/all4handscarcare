import react from "react"
import ReactMarkdown from "react-markdown"

import Layout from "../components/Layout";
import "../public/styles.scss"
import level_1_services from "../markdown/level_1_services.md"
import level_2_services from "../markdown/level_2_services.md"
import level_3_services from "../markdown/level_3_services.md"
import extra_services from "../markdown/extra_services.md"

import { Container, Row, Col, Card, Jumbotron, Table } from "react-bootstrap";
import ServicesItem from "../components/ServicesItem"

function Services(props) {

	return (
		<Layout className="services-page-layout">
			<Container className="services-container">
				<Row>
					<Col>
						<Jumbotron>
							<h1>Services</h1>
						</Jumbotron>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<h1>Combination Packages</h1>
					<hr />
				</Row>
				<ServicesItem service_markdown={level_1_services}/>
				<Row className="justify-content-center">
					<h1>Exterior</h1>
					<hr />
				</Row>
				<ServicesItem service_markdown={level_2_services}/>
				<Row className="justify-content-center">
					<h1>Interior</h1>
					<hr />
				</Row>
				<ServicesItem service_markdown={level_3_services}/>
				<Row className="justify-content-center">
					<h1>Title</h1>
					<hr />
				</Row>
				<ServicesItem service_markdown={level_3_services}/>
				<Row className="justify-content-center">
					<Col>
						<Card className="services-card">
							<Card.Body>
								<Card.Title>
									<h1>Add On Services</h1>
								</Card.Title>
								<Card.Text>
									<Container>
										<Table responsive="sm" borderless={true}>
											<tbody>
												<ReactMarkdown className="markdown-table" source={extra_services} />
											</tbody>
										</Table>
										<p>*Starting at prices</p>
									</Container>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}

export default Services
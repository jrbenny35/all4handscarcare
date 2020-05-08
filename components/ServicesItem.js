import react from "react"
import ReactMarkdown from "react-markdown"

import { Container, Row, Col, Card, Jumbotron, Table } from "react-bootstrap";

function ServicesItem(props) {
	
	return (
		<Row className="justify-content-center">
			<Col>
				<Card className="services-card">
					<Card.Body>
						<Card.Title>
							<h1>Level 1</h1>
						</Card.Title>
						<hr />
						<Card.Text>
							<ReactMarkdown source={props.service_markdown} />
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default ServicesItem
import react from "react"
import { Container, Row, Col, Jumbotron, Button, Card, Carousel } from "react-bootstrap"
import VideoBg from "reactjs-videobg"
import mp4 from "../public/content/video.mp4"

export default function HomeLayout() {
	return (
		<Container fluid expand="lg">
			<Row className="jumbotron-row">
				<Col>
					<Jumbotron fluid className="home-jumbotron">
						<video id="jumbotron-video" preload={true} muted={true} autoPlay={true} loop={false}>
							<source src="/content/video.mp4" type="video/mp4" />
						</video>
						<Container fluid className="jumbotron-container">
							<h1>Treat yoself</h1>
							<p>A Gif will go here of awesome detailing stuff in slow-motion</p>
							<Button>Maybe</Button>
						</Container>
					</Jumbotron>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Container fluid className="top-main-filler">
					<Row className="justify-content-center">
						<Col className="" lg={4}>
							<Card className="main-filler-card">
								<Card.Body>
									<Card.Title>Elevated Car Care</Card.Title>
									<hr />
									<Card.Text>Some text here about how awesome our car care is and what makes is better!!</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col className="" lg={6}>
							<Container className="carousel-container">
								<Carousel pause="hover" fade={true}>
									<Carousel.Item>
										<img
											className="img-fluid"
											src="https://via.placeholder.com/750"
											alt="First slide"
										/>
										<Carousel.Caption>
											<h3>First slide label</h3>
											<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="img-fluid"
											src="https://via.placeholder.com/750"
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3>Second slide label</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="img-fluid"
											src="https://via.placeholder.com/750"
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3>Third slide label</h3>
											<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
							</Container>
						</Col>
					</Row>
				</Container>
			</Row>
			<Row className="justify-content-center" ></Row>
				<Container className="after-jumbo-filler wider-container">
					<h1>What We Do</h1>
				</Container>
			<Row className="card-row">
				<Container className="Main-Page-card-container">
					<Row>
						<Col>
							<Card className="floating-card saga-card">
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<hr />
									<Card.Text>Some text here</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="floating-card saga-card" >
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<hr />
									<Card.Text>Some text here</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className="floating-card saga-card" >
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<hr />
									<Card.Text>Some text here</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Container className="services-section">
						<Row className="justify-content-center">
							<Col>
								<Button size="lg">Learn about our Services</Button>
							</Col>
						</Row>
					</Container>
				</Container>
			</Row>
			<Row className="after-cards-section">
				<Container fluid>
					<Row className="about-us-section-header">
						<Col>
							<h1>Who are we</h1>
						</Col>
					</Row>
					<Row className="align-items-center about-us-section">
						<Col className="second-info-section offset-md-1" lg={5}>
							<Card className="second-info-section-card">
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>Some text here</Card.Text>
									<Button>Floating</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col className="second-info-section" lg={6}>
							<h2>Some Heading</h2>
							<p>Some text</p>
						</Col>
					</Row>
				</Container>
			</Row>
			<Row className="ida-detailing-promo justify-content-center">
				<Col>
					<Container fluid>
						<h1>IDA DETAILING LOGO</h1>
					</Container>
				</Col>
				<Col>
					<Container fluid>
						<h1> LOGO</h1>
					</Container>
				</Col>
			</Row>
		</Container>		
	)
}
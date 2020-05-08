import react from "react"
import { useState } from "react"

import Layout from "../components/Layout";
import "../public/styles.scss"

import { Container, Row, Col, Form, InputGroup, Button, Jumbotron, Toast } from "react-bootstrap"
import { Formik } from "formik"
import * as yup from 'yup';
import 'isomorphic-fetch'

function Contact(props) {
	const [show, setShow] = useState(false)

	const schema = yup.object({
		firstName: yup.string().min(2).max(20).required(),
		lastName: yup.string().min(2).max(30).required(),
		email: yup.string().email().required(),
		city: yup.string().required(),
		state: yup.string().required(),
		zip: yup.string().required(),
		number: yup.string().max(13).min(10),
		condition: yup.string(),
		interior_package: yup.string(),
		exterior_package: yup.string(),
		extra_services: yup.string(),
		comments: yup.string().max(500),
		make: yup.string(),
		model: yup.string(),
		year: yup.number(),
		miles: yup.string()
	});

	function submitData(data) {
		fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      res.status === 200 ? data.setSubmitting(false) : ''
    })
	}
	
	return (
        <Layout>
            <Container className="contact-us-form-container">
								<Row>
									<Col>
										<Jumbotron>
											<h1>Contact Us</h1>
										</Jumbotron>
									</Col>
								</Row>
								<Row>
									<Col>
										<Container className="above-form-info">
											<h2>Fill out this form</h2>
											<hr />
											<p>The more detail you guve us, the better we can give you an accurate quote!</p>
										</Container>
									</Col>
								</Row>
                <Row>
                    <Col>
											<Formik
												validationSchema={schema}
												initialValues={{
													firstName: '',
													lastName: '',
													email: '',
													state:'Texas',
													city: '',
													zip: '',
													number: '',
													condition: 'None Selected',
													interior_package: 'None Selected',
													exterior_package: 'None Selected',
													extra_services: 'None Selected',
													comments: '',
													model: '',
													make: '',
													year: '',
													miles: '',
												}}
												onSubmit={(data, actions) => {
													console.log(data)
													fetch('/api/contact', {
														method: 'post',
														headers: {
															'Accept': 'application/json, text/plain, */*',
															'Content-Type': 'application/json'
														},
														body: JSON.stringify(data)
													}).then((res) => {
														if (res.status === 200){
															setShow(true)
															actions.setSubmitting(false)
														} else {
															return ''
														}
													})
												}}
											>
												{({
													handleSubmit,
													handleChange,
													handleBlur,
													values,
													touched,
													isValid,
													errors,
												}) => (
													<Form noValidate onSubmit={handleSubmit}>
														<Form.Row>
															<Form.Group as={Col} md="3" controlId="validationFormik01">
																<Form.Label>First name</Form.Label>
																<Form.Control
																	type="text"
																	name="firstName"
																	placeholder="Mark"
																	value={values.firstName}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.firstName && !errors.firstName}
																	isInvalid={touched.firstName && errors.firstName}
																/>
																<Form.Control.Feedback type="invalid">First Name is Required</Form.Control.Feedback>
																<Form.Control.Feedback>Looks Good</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik02">
																<Form.Label>Last name</Form.Label>
																<Form.Control
																	type="text"
																	name="lastName"
																	placeholder="Smith"
																	value={values.lastName}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.lastName && !errors.lastName}
																	isInvalid={touched.lastName && errors.lastName}
																/>

																<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
																<Form.Control.Feedback type="invalid">Last Name is Required</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormikUsername">
																<Form.Label>Email</Form.Label>
																<InputGroup>
																	<Form.Control
																		type="text"
																		placeholder="Email@email.com"
																		name="email"
																		value={values.email}
																		onChange={handleChange}
																		onBlur={handleBlur}
																		isValid={touched.email && !errors.email}
																		isInvalid={touched.email && errors.email}
																	/>
																	<Form.Control.Feedback type="invalid">
																		{errors.email}
																	</Form.Control.Feedback>
																</InputGroup>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormikUsername">
																<Form.Label>Number</Form.Label>
																<InputGroup>
																	<Form.Control
																		type="text"
																		placeholder="123-456-7899"
																		name="number"
																		value={values.number}
																		onChange={handleChange}
																		onBlur={handleBlur}
																		isValid={touched.number && !errors.number}
																		isInvalid={touched.number && errors.number}
																	/>
																	<Form.Control.Feedback type="invalid">
																		{errors.number}
																	</Form.Control.Feedback>
																</InputGroup>
															</Form.Group>
														</Form.Row>
														<Form.Row>
															<Form.Group as={Col} md="5" controlId="validationFormik03">
																<Form.Label>City</Form.Label>
																<Form.Control
																	type="text"
																	placeholder="City"
																	name="city"
																	value={values.city}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.city && !errors.city}
																	isInvalid={touched.city && errors.city}
																/>

																<Form.Control.Feedback type="invalid">
																	{errors.city}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik04">
																<Form.Label>State</Form.Label>
																<Form.Control
																	type="text"
																	placeholder="State"
																	name="state"
																	value={values.state}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.state && !errors.state}
																	isInvalid={touched.state && errors.state}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.state}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Zip</Form.Label>
																<Form.Control
																	type="text"
																	placeholder="Zip"
																	name="zip"
																	value={values.zip}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.zip && !errors.zip}
																	isInvalid={touched.zip && errors.zip}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.zip}
																</Form.Control.Feedback>
															</Form.Group>
														</Form.Row>
														<h2 className="car-info-form-header">Vehicle info</h2>
														<Form.Row>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Make</Form.Label>
																<Form.Control
																	type="text"
																	placeholder="Make"
																	name="make"
																	value={values.make}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.make && !errors.make}
																	isInvalid={touched.make && errors.make}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.make}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Model</Form.Label>
																<Form.Control
																	type="text"
																	placeholder="Model"
																	name="model"
																	value={values.model}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.model && !errors.model}
																	isInvalid={touched.model && errors.model}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.model}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Year</Form.Label>
																<Form.Control
																	type="text"
																	placeholder="Year"
																	name="year"
																	value={values.year}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.year && !errors.year}
																	isInvalid={touched.year && errors.year}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.year}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Mileage</Form.Label>
																<Form.Control
																	type="text"
																	placeholder="Vehicle Milage"
																	name="miles"
																	value={values.year}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.year && !errors.year}
																	isInvalid={touched.year && errors.year}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.year}
																</Form.Control.Feedback>
															</Form.Group>
														</Form.Row>
														<Form.Row>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Condition</Form.Label>
																<Form.Control
																	as="select"
																	type="text"
																	placeholder="Vehicle Condition"
																	name="condition"
																	value={values.condition}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.condition && !errors.condition}
																	isInvalid={touched.condition && errors.condition}
																>
																	<option>Very Dirty</option>
																	<option>Slightly Dirty</option>
																	<option>Clean</option>
																	<option>Immaculate</option>
																</Form.Control>
																<Form.Control.Feedback type="invalid">
																	{errors.condition}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Interior Package</Form.Label>
																<Form.Control
																	as="select"
																	type="text"
																	name="interior_package"
																	value={values.interior_package}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.interior_package && !errors.interior_package}
																	isInvalid={touched.interior_package && errors.interior_package}
																>
																	<option>Level 1</option>
																	<option>Level 2</option>
																	<option>Level 3</option>
																	<option>Level 4</option>
																</Form.Control>
																<Form.Control.Feedback type="invalid">
																	{errors.interior_package}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Exterior Package</Form.Label>
																<Form.Control
																	as="select"
																	type="text"
																	name="exterior_package"
																	value={values.exterior_package}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.exterior_package && !errors.exterior_package}
																	isInvalid={touched.exterior_package && errors.exterior_package}
																>
																	<option>Level 1</option>
																	<option>Level 2</option>
																	<option>Level 3</option>
																	<option>Level 4</option>
																</Form.Control>
																<Form.Control.Feedback type="invalid">
																	{errors.exterior_package}
																</Form.Control.Feedback>
															</Form.Group>
															<Form.Group as={Col} md="3" controlId="validationFormik05">
																<Form.Label>Extra Services</Form.Label>
																<Form.Control
																	as="select"
																	type="text"
																	name="extra_services"
																	value={values.extra_services}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.extra_services && !errors.extra_services}
																	isInvalid={touched.extra_services && errors.extra_services}
																>
																	<option>Level 1</option>
																	<option>Level 2</option>
																	<option>Level 3</option>
																	<option>Level 4</option>
																</Form.Control>
																<Form.Control.Feedback type="invalid">
																	{errors.extra_services}
																</Form.Control.Feedback>
															</Form.Group>
														</Form.Row>
														<Form.Row className="justify-content-center">
															<Form.Group as={Col} md="6" controlId="validationFormik05">
																<Form.Label>Comments</Form.Label>
																<Form.Control
																	as="textarea"
																	rows="6"
																	type="text"
																	placeholder="Comments, questions, etc"
																	name="comments"
																	value={values.comments}
																	onChange={handleChange}
																	onBlur={handleBlur}
																	isValid={touched.comments && !errors.comments}
																	isInvalid={touched.comments && errors.comments}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.comments}
																</Form.Control.Feedback>
															</Form.Group>
														</Form.Row>
														<Button size="lg" type="submit">Submit form</Button>
													</Form>
												)}
											</Formik>
                    </Col>
                </Row>
								<Row className="justify-content-center">
									<Col lg={4}>
										<Toast className='form-toast' onClose={() => setShow(false)} show={show} delay={10000} autohide>
											<Toast.Header>
												<h3 className="mr-auto">Information Submitted</h3>
											</Toast.Header>
											<Toast.Body>We will be in touch with you soon!</Toast.Body>
										</Toast>
									</Col>
								</Row>
            </Container>
        </Layout>
    )
}
export default Contact
const sgMail = require('@sendgrid/mail');

export default async function(req, res){

	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const { email, name } = req.body
	const info = `${req.body.firstName} ${req.body.lastName} sent a contact request.`
	const content = {
    to: 'bennyjr169@gmail.com',
    from: 'b4hand@protonmail.com',
    subject: `New Message From - ${email}`,
    text: info,
		html: `
			<p>First name: ${req.body.firstName}</p>
			<p>Last Name: ${req.body.lastName}</p>
			<p>Email: ${req.body.email}</p>
			<p>City: ${req.body.city}</p>
			<p>State: ${req.body.state}</p>
			<p>Zip: ${req.body.zip}</p>
			<p>Phone Number: ${req.body.number}</p>
			<p>Condition: ${req.body.condition}</p>
			<p>Interior Package: ${req.body.interior_package}</p>
			<p>Exterior: ${req.body.exterior_package}</p>
			<p>Extra Services: ${req.body.extra_services}</p>
			<p>Comments: ${req.body.comments}</p>
			<p>Vehicle Make:${req.body.make}</p>
			<p>Vehicle Model: ${req.body.model}</p>
			<p>Vehicle Year: ${req.body.year}</p>
			<p>Vehicle Miles: ${req.body.miles}</p>
		`
  }

	try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
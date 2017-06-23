import React, { Component } from 'react'
// import { dummyData } from './App.js'

const SingleEmail = ({ match: { params: { emailID: id } } }) => {
	console.log(id)
	return (
		<section>
			<h1></h1>
		</section>
	)
}

const Emails = () => {
	return (
		<section>
			<h1>Emails</h1>
		</section>
	)
}

export default Emails
export { SingleEmail }
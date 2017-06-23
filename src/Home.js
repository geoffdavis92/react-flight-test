import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from './functions.js';

const dummyData = [
  {
    title: 'Test Email 001',
    subject: 'Adipisicing officia qui nisi et dolore'
  }
]

const emails = dummyData.map(email => {
	return (
		<article key={email.title.replace(/\s/g,'_')}>
			<header>
				<h3>{email.title}</h3>
			</header>
			<main>
				<p>{email.subject}</p>
			</main>
			<footer>
				<p><Link to={`/emails/${slugify(email.title)}`}>VIEW EMAIL&nbsp;&raquo;</Link></p>
			</footer>
		</article>
	)
})

const Home = () => {
	return (
		<section>
			<h1>TinyLetter Builder</h1>
			{emails}
		</section>
	)
}

export default Home
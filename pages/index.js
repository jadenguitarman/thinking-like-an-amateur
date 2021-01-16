import Head from 'next/head';
import React, { Component } from 'react';
import Image from 'next/image';
import styles from "../styles/index.module.css";

import Nav from "../components/nav.js";
import FormField from "../components/form-field.js";
import Ring from "../components/ring.js";
import Rabbit from "../components/rabbit.js";
import Bear from "../components/bear.js";
import Bug from "../components/bug.js";
import Bird from "../components/bird.js";
//import AlbumSeries from "../components/album-series.js";

class Index extends Component {
	constructor (props) {
		super(props);
		this.state = { submitted: false };
		this.submitMessage = this.submitMessage.bind(this);
		this.contactForm = React.createRef();
	}

	submitMessage () {
		this.contactForm.current.submit();
		this.setState({submitted: true})
	}

	render () {
		return  (
			<>
				<Head>
					<title>The Oh Hellos</title>
				</Head>

				<Nav />

				{
					//*
						(
							<section id={styles.intro}>
								<Ring />
								<Rabbit />
								<Bug />
								<Bird />
								<Bear />
							</section>
						)
					// */
				}

				{
					/*
						(
							<section id={styles.album}>
								<AlbumSeries />
							</section>
						)
					// */
				}

				<section id={styles.about}>
					<img src="/band.jpg" width="750" height="500" alt="The Oh Hellos" />

					<p>The Oh Hellos began in a cluttered bedroom in 2011, where siblings Maggie and Tyler Heath (born and raised in southern Texas) recorded their self-titled EP. In the fall of 2012, the duo released their debut full-length record Through the Deep, Dark Valley, an album full of regret and redemption, which they wrote, recorded, produced, mixed, and mastered themselves. In early 2013 the Heath siblings reached out to friends both new and old and gathered together an ensemble of touring musicians the size of a circus, tumblers and all.</p>

					<p>Their 2015 full-length album, Dear Wormwood—a collection of songs inspired in part by C.S. Lewis' The Screwtape Letters, Patrick Rothfuss' The Name of the Wind, mythology, folklore, and apocalyptic literature—tells the story of a protagonist trapped in an abusive relationship through a series of letters written to the antagonist. It is at times delicate, intimate, affectionate; and at others, soaring and towering and joyfully explosive.</p>

					<p>Notos—released in late 2017, as the first installment in an ongoing series—is named for the ancient Greco-Roman god of the south wind, who brought storms in the summer. Musically, the record draws from our memories of summers spent exploring the Pacific Northwest with our grandparents, as well as our experiences with the frequent threat of hurricanes as we grew up on the Texas Gulf Coast. Thematically, this series considers the question: "where did our ideas come from?" Notos recounts a time when we weren't even aware that was a question we could (or should) ask, and reflects on the backfire effect we experience when confronted with new information for the first time.</p>

					<p>Once that first question is asked, it opens the floodgates to more. While wrestling with them all can ultimately lead to a fuller understanding of the world around you (and leave you with more empathy than you started with), it can also leave you feeling alienated from the communities you used to identify with. Eurus, the second installment in the series, released in early 2018, is a continued interrogation of our own beliefs, and as Eurus was the wind most closely associated with autumn, the record seeks to capture the feeling of dark woods, dry branches, dead leaves, and wondering who had migrated — you, or your flock?</p>

					<p>Boreas, the northern wind, ushered in the harsh frosts of lonely winter. The arrangements of the third installment in the series, released in 2020, evoke images of snow-blanketed darkness, candlelight behind cupped hands, and a vast night sky ribboned with stars and auroras. As we wrote these songs, we found ourselves confronted with the ways we’ve reflected this wind — how we often avoid discomfort, even at the expense of others, until we are left cold, hard, and unfeeling. In this record, we ask the winter to instead kindle us into something warmer and softer than who we’ve been.</p>

					<p>The band’s influences include groups like Fleet Foxes and the Muppets, Sufjan Stevens, and animated works such as Over the Garden Wall and the films of Studio Ghibli. The band delights in bending and blending styles and genres into a unique mixture of eclectic folk rock.</p>
				</section>

				<section id={styles.contactForm}>
					{ this.state.submitted
						? <p>Thanks for reaching out! We'll be in touch soon.</p>
						: (
							<>
								<form action="/.netlify/functions/contact" ref={this.contactForm}>
									<h2>Keep in touch</h2>
									<p>Ask us your questions! We'll be sure to get back to you right away.</p>

									<FormField>
										<input placeholder=" " name="first-name" type="text" />
										<label>First Name</label>
									</FormField>

									<FormField>
										<input placeholder=" " name="last-name" type="text" />
										<label>Last Name</label>
									</FormField>

									<FormField>
										<input placeholder=" " name="email" type="text" />
										<label>Email</label>
									</FormField>

									<FormField>
										<textarea placeholder=" " name="message"></textarea>
										<label>Message</label>
									</FormField>

									<FormField>
										<button type="button" onClick={this.submitMessage}>Send Message</button>
									</FormField>

									<p>We respect your privacy.</p>
								</form>
							</>
						)
					}
				</section>

				<footer id={styles.footer}>
					<p>Content shamelessly copied and modified from <a href="http://theohhellos.com/">theohhellos.com</a>. This website is for educational purposed only, and therefore does not conflict with or infringe upon any copyright or trademark. Made by <a href="https://jaden.baptista.dev">Jaden Baptista</a> in 2020.</p>
				</footer>
			</>
		);
	}
}

export default Index;

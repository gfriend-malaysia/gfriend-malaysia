<template>
	<div class="template-root">
		<header>
			<nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar" id="mainNav">
				<div class="container">
					<a class="navbar-brand mr-5" href="#">여자친구 GFriend</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav mr-auto smooth-scroll">
							<li class="nav-item">
								<a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#profile" data-offset="90">Profile</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#gallery" data-offset="90">Gallery</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#social" data-offset="30">Social Media</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#achievements" data-offset="90">Achievements</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#about" data-offset="90">About</a>
							</li>
						</ul>
						<!-- Social Icon  -->
						<ul class="navbar-nav nav-flex-icons">
							<li class="nav-item">
								<a class="nav-link" target="_blank" href="https://www.facebook.com/gfriendmalaysia/"><i class="fa fa-facebook light-green-text-2"></i></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" target="_blank" href="https://twitter.com/GFRDMalaysia?lang=en"><i class="fa fa-twitter light-green-text-2"></i></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" target="_blank" href="https://www.instagram.com/gfriendofficial/?hl=en"><i class="fa fa-instagram light-green-text-2"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<section class="view intro-video" id="home">
				<video playsinline autoplay muted loop preload="auto">
					<source src="/gfriend_video.mp4" type="video/mp4">
				</video>
				<div class="hm-gradient">
					<div class="full-bg-img">
						<div class="container flex-center">
							<div class="row pt-5 mt-3">
								<div class="col-md-12 white-text text-center smooth-scroll">
									<div class="wow fadeInDown" data-wow-delay="0.1s">
										<h3 class="display-5 font-bold white-text mb-2">G-FRIEND MALAYSIA FANSITE</h3>
										<hr class="hr-light my-4">
										<h6 class="subtext-header mt-2 mb-4">Buddies will be like that glass bead that wont break easily and shining on you forever. <i class="fa fa-heart heart"></i></h6>
									</div>
									<a href="#profile" data-offset="90" class="btn btn-rounded purple-gradient wow fadeInUp" data-wow-delay="0.1s">More of GFRIEND</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</header>
		<main>
			<div class="container">
				<section class="section team-section pb-5" id="profile">
					<h3 class="text-center mb-5 mt-5 pt-5 font-up font-bold grey-text-2 wow fadeIn" data-wow-delay="0.1s">Members Profile</h3>
					<!-- <input type="file" id="fileButton" @change='upload' /> -->
					<p class="section-description">GFRIEND is a six-member South Korean girl group formed by <span class="font-bold">Source Music</span class="font-bold"> in 2015. The group consists of <span class="font-bold">Sowon</span class="font-bold">, <span class="font-bold">Yerin</span class="font-bold">, <span class="font-bold">Eunha</span class="font-bold">, <span class="font-bold">Yuju</span class="font-bold">, <span class="font-bold">SinB</span class="font-bold">, and <span class="font-bold">Umji</span class="font-bold">. They made their debut on January 16, 2015.</p>
						<div class="row text-center">
		<div class="col-lg-4 col-md-6 mb-r">
			<div class="avatar wow fadeIn" data-wow-delay="0.1s">
				<img class="sr-sowon rounded-circle z-depth-1" src="/sowon.jpg" alt="Yerin">
			</div>
			<h5>Sowon</h5>
			<h6 class="font-bold indigo-text">Leader, Main Rapper, Vocalist, Visual</h6>
			<p class="text-muted profile-description"><span class="font-bold">Birth Name :</span> Jung Ye Rin (정예린)
						<br><span class="font-bold">Birthday</span>: December 7, 1995
						<br><span class="font-bold">Height</span> : 177 cm (5’10”)
						<br><span class="font-bold">Weight</span> : 50 kg (110 lbs)
						<br><span class="font-bold">Blood Type</span> : A</p>
			</div>
			<div class="col-lg-4 col-md-6 mb-r">
				<div class="avatar wow fadeIn" data-wow-delay="0.1s">
					<img class="sr-sowon rounded-circle z-depth-1" src="/yerin.jpg" alt="Yerin">
				</div>
				<h5>Yerin</h5>
				<h6 class="font-bold indigo-text">Lead Dancer, Vocalist, Center</h6>
				<p class="text-muted profile-description"><span class="font-bold">Birth Name :</span> Jung Ye Rin (정예린)
					<br><span class="font-bold">Birthday</span> : August 19, 1996
					<br><span class="font-bold">Height</span> : 168 cm (5’6″)
					<br><span class="font-bold">Weight</span> : 47 kg (103 lbs)
					<br><span class="font-bold">Blood Type</span> : O</p>
			</div>
			<div class="col-lg-4 col-md-6 mb-r">
				<div class="avatar wow fadeIn" data-wow-delay="0.1s">
					<img class="sr-sowon rounded-circle z-depth-1" src="/eunha.jpg" alt="Eunha">
				</div>
				<h5>Eunha</h5>
				<h6 class="font-bold indigo-text">Lead Vocalist</h6>
				<p class="text-muted profile-description"><span class="font-bold">Birth Name :</span> Jung Eun Bi (정은비)
					<br><span class="font-bold">Birthday</span> : May 30, 1997
					<br><span class="font-bold">Height</span> : 165 cm (5’5″)
					<br><span class="font-bold">Weight</span> : 46 kg (101 lbs)
					<br><span class="font-bold">Blood Type</span> : O</p>
			</div>
			<div class="col-lg-4 col-md-6 mb-r">
				<div class="avatar wow fadeIn" data-wow-delay="0.1s">
					<img class="sr-sowon rounded-circle z-depth-1" src="/yuju.jpg" alt="Yuju">
				</div>
				<h5>Yuju</h5>
				<h6 class="font-bold indigo-text">Main Vocalist</h6>
				<p class="text-muted profile-description"><span class="font-bold">Birth Name :</span> Choi Yu Na (최유나)
					<br><span class="font-bold">Birthday</span> : October 4, 1997
					<br><span class="font-bold">Height</span> : 170 cm (5’7″)
					<br><span class="font-bold">Weight</span> : 49 kg (108 lbs)
					<br><span class="font-bold">Blood Type</span> : AB</p>
			</div>
			<div class="col-lg-4 col-md-6 mb-r">
				<div class="avatar wow fadeIn" data-wow-delay="0.1s">
					<img class="sr-sowon rounded-circle z-depth-1" src="/sinb.jpg" alt="Sinb">
				</div>
				<h5>SinB</h5>
				<h6 class="font-bold indigo-text">Main Dancer, Center, Face of the Group</h6>
				<p class="text-muted profile-description"><span class="font-bold">Birth Name :</span> Hwang Eun Bi (황은비)
					<br><span class="font-bold">Birthday</span> : June 3, 1998
					<br><span class="font-bold">Height</span> : 167 cm (5’6″)
					<br><span class="font-bold">Weight</span> : 50 kg (110 lbs)
					<br><span class="font-bold">Blood Type</span> : AB</p>
			</div>
			<div class="col-lg-4 col-md-6 mb-r">
				<div class="avatar wow fadeIn" data-wow-delay="0.1s">
					<img class="sr-sowon rounded-circle z-depth-1" src="/umji.jpg" alt="Umji">
				</div>
				<h5> Umji</h5>
				<h6 class="font-bold indigo-text">Lead Rapper, Vocalist, Maknae</h6>
				<p class="text-muted profile-description"><span class="font-bold">Birth Name :</span> Kim Ye Won (김예원)
					<br><span class="font-bold">Birthday</span> : August 19, 1998
					<br><span class="font-bold">Height</span> : 166 cm (5’5″)
					<br><span class="font-bold">Weight</span> : 49 kg (108 lbs)
					<br><span class="font-bold">Blood Type</span> : O</p>
			</div>
	</div>
	</section>
	<hr>
	</div>
	<section class="no-padding" id="gallery">
		<h3 class="text-center mb-5 mt-5 pt-5 font-up font-bold grey-text-2 wow fadeIn" data-wow-delay="0.1s">Photo Gallery</h3>
		<div class="container-fluid px-0">
			<div class="row no-gutters popup-gallery">
				<div class="col-lg-4 col-sm-6">
					<a class="portfolio-box" href="#">
										<img class="img-fluid wow zoomInLeft" data-wow-delay="0.1s" src="/img/gallery1-thumb.jpg" alt="">
										<div class="portfolio-box-caption" id="gallery1">
											<div class="portfolio-box-caption-content">
												<div class="project-category text-faded">
													Date : 2017-06-10
													</br>
													Credit : Legendx2
												</div>
											</div>
										</div>
									</a>
				</div>
				<div class="col-lg-4 col-sm-6">
					<a class="portfolio-box" href="#">
										<img class="img-fluid wow zoomInDown" data-wow-delay="0.1s" src="/img/gallery2-thumb.jpg" alt="">
										<div class="portfolio-box-caption"  id="gallery2">
											<div class="portfolio-box-caption-content">
												<div class="project-category text-faded">
													Date : 2017-06-03
													</br>
													Credit : Legendx2
												</div>
											</div>
										</div>
									</a>
				</div>
				<div class="col-lg-4 col-sm-6">
					<a class="portfolio-box" href="#">
										<img class="img-fluid wow zoomInRight" data-wow-delay="0.1s" src="/img/gallery3-thumb.jpg" alt="">
										<div class="portfolio-box-caption"  id="gallery3">
											<div class="portfolio-box-caption-content">
												<div class="project-category text-faded">
													Date : 2017-05-17
													</br>
													Credit : Legendx2
												</div>
											</div>
										</div>
									</a>
				</div>
				<div class="col-lg-4 col-sm-6">
					<a class="portfolio-box" href="#">
										<img class="img-fluid wow zoomInLeft" data-wow-delay="0.1s"  src="/img/gallery4-thumb.jpg" alt="">
										<div class="portfolio-box-caption" id="gallery4">
											<div class="portfolio-box-caption-content">
												<div class="project-category text-faded">
													Date : 2017-05-13
													</br>
													Credit : Legendx2
												</div>
											</div>
										</div>
									</a>
				</div>
				<div class="col-lg-4 col-sm-6">
					<a class="portfolio-box" href="#">
										<img class="img-fluid wow zoomInDown" data-wow-delay="0.1s" src="/img/gallery5-thumb.jpg" alt="">
										<div class="portfolio-box-caption" id="gallery5">
											<div class="portfolio-box-caption-content">
												<div class="project-category text-faded">
													Date : 2017-04-05
													</br>
													Credit : Legendx2
												</div>
											</div>
										</div>
									</a>
				</div>
				<div class="col-lg-4 col-sm-6">
					<a class="portfolio-box" href="#">
										<img  class="img-fluid wow zoomInRight" data-wow-delay="0.1s" src="/img/gallery6-thumb.jpg" alt="">
										<div class="portfolio-box-caption" id="gallery6">
											<div class="portfolio-box-caption-content">
												<div class="project-category text-faded">
													Date : 2016-09-28
													</br>
													Credit : C-Studio
												</div>
											</div>
										</div>
									</a>
				</div>
			</div>
		</div>
	</section>
	<div class="container">
		<section id="social" class="section about mt-5 mb-5">
			<h3 class="text-center mb-5 mt-5 pt-5 font-up font-bold grey-text-2 wow fadeIn" data-wow-delay="0.1s">Social Media</h3>
			<div class="row">
				<div class="col-lg-12" v-if="fbPost" v-for="item in fbPost">
					<div class="card card-plain card-blog">
						<div class="row">
							<div class="col-md-5 d-flex align-items-center justify-content-center wow zoomInLeft" data-wow-delay="0.1s">
								<div class="card-image">
									<a :href="item.permalink_url" target="_blank"><img class="img" :src="item.full_picture"></a>
								</div>
							</div>
							<div class="col-md-7 d-flex align-items-center wow  zoomInRight" data-wow-delay="0.1s">
								<div class="card-block">
									<p class="card-description px-3">
										{{item.message}}
									</p>
									<p class="author px-3">
										by <a href="https://www.facebook.com/gfriendmalaysia/" target="_blank"><span>GFriend Malaysia </span></a>, {{item.created_time}}
										<a :href="item.permalink_url" target="_blank" class="pull-right read-more"> Read More ...</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<hr>
	</div>
	<div class="container">
		<section id="achievements" class="my-4">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h3 class="text-center mb-5 mt-5 font-up font-bold grey-text-2 wow fadeIn" data-wow-delay="0.1s">Achievements</h3>
					<p class="section-description">This is a list of awards received by <span class="font-bold">GFriend</span class="font-bold"> since their debut in 2015.  <i class="fa fa-trophy trophy"></i></p>
						</div>
						<div class="col-lg-12 text-center">
							<ul class="timeline">
								<li class="timeline-line"></li>
								<li class="timeline-group">
									<a href="javascript:void(0)" class="btn btn-rounded peach-gradient"><i class="fa fa-calendar px-2"></i>Today</a>
								</li>
							</ul>
							<ul class="timeline">
								<li class="timeline-line"></li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">6th Gaon Chart Music Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> February 22 ,2017</div>
										</div>
										<div class="timeline-content">
											<p>Artist of the Year (Song – January) </br><strong>Rough</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">26th Seoul Music Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> January 19 ,2017</div>
										</div>
										<div class="timeline-content">
											<p>Bonsang Award </br><strong>Rough</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">31st Golden Disk Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> January 13 ,2017</div>
										</div>
										<div class="timeline-content">
											<p>Digital Bonsang </br><strong>Rough</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">MBC Show Champion Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> December 23 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>Most Appearances </br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">Mnet Asian Music Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> December 16 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>Best Dance Performance - Female </br><strong>Rough</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">Melon Music Awards 2016</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> November 19 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>Best Dance - Female</br><strong>Rough</strong></p>
											<p>Top 10 Artists</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">The 24th Korean Cultural Entertainment Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> December 02 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>Most Excellent KPOP Singer Award</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">MTN Broadcast Advertising Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> July 21 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>The Women CF Star Award</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">28th Korean PD Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> March 10 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>Best Program Guest Award (Singer)</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">5th Gaon Chart Music Award</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> February 17 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>New Artist of the Year</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">25th Seoul Music Awards</strong >
											<div class="timeline-date"><i class="fa fa-clock-o"></i> January 14 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>Best New Artist</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">30th Golden Disc Awards</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> January 01 ,2016</div>
										</div>
										<div class="timeline-content">
											<p>New Artist Award</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
								<li class="timeline-item wow fadeIn" data-wow-delay="0.1s">
									<div class="timeline-badge"><a href="javascript:void(0)" class="hidden-sm-down"></a></div>
									<div class="timeline-panel">
										<div class="timeline-heading">
											<strong class="font-bold indigo-text">Melon Music Awards 2015</strong>
											<div class="timeline-date"><i class="fa fa-clock-o"></i> November 07 ,2015</div>
										</div>
										<div class="timeline-content">
											<p>Best New Artist (Female)</br><strong>GFriend</strong></p>
										</div>
									</div>
								</li>
							</ul>
							<ul class="timeline">
								<li class="timeline-line"></li>
								<li class="timeline-group">
									<a href="javascript:void(0)" class="btn btn-rounded peach-gradient"><i class="fa fa-calendar px-2"></i>2015</a>
								</li>
							</ul>
						</div>
					</div>
			</section>
		</div>
		<div class="streak streak-photo streak-long-2 hm-black-strong" style="background-image:url('https://firebasestorage.googleapis.com/v0/b/gfriend-malaysia.appspot.com/o/images%2Fgfriend_background.jpg?alt=media&token=552245c0-66f6-491f-b0ed-bd46fa84d67d')" id="about">
		    <div class="mask flex-center">
		        <div class="container">
		            <h3 class="white-text text-center mb-5 mt-5 font-up font-bold wow fadeIn" >About Us</h3>
		            <p class="white-text text-center mb-5 wow fadeIn" >A fan-site made for GFriend by a Buddy! Learn more about GFRIEND and share, discover content and connect with all Buddy. This website is under development and more features will be comming soon. </p>
		        </div>
		    </div>
		</div>
		</main>
		<footer class="page-footer right-on-small-only mt-0 pt-0">
			<div class="footer-copyright">
				<div class="container-fluid">
					© 2017 Copyright <i class="fa fa-heart heart"></i> by
					<a href="https://www.facebook.com/HanJeaHwan" target="_blank">HanJeaHwan</a>.
				</div>
			</div>
		</footer>
		</div>
	</template>
	<script>
	import photoGallery from "~/assets/gallery.js"
	import fb from "~/plugins/fb-sdk.js"
	import axios from 'axios'
	export default {
		async asyncData(context) {
			return new Promise((resolve, reject) => {
			    let img = new Image()
			    img.onload = () => resolve()
			    img.onerror = reject
			    img.src = 'https://firebasestorage.googleapis.com/v0/b/gfriend-malaysia.appspot.com/o/images%2Fgfriend_background.jpg?alt=media&token=552245c0-66f6-491f-b0ed-bd46fa84d67d'
			  })
		},
		data: () => ({
			box1: photoGallery.box1,
			box2: photoGallery.box2,
			box3: photoGallery.box3,
			box4: photoGallery.box4,
			box5: photoGallery.box5,
			box6: photoGallery.box6,
			fbPost: [],
			token: 'EAAWNlDNjk6oBACJKsZCw7CPFZB38zFfsgBKYTvhdplPuRzLyZCO6WErIL2v1eJz008imktMIhEW93rRlyZBqnxoctl4TZAQFjmjccdHwZBObSNvgJNFE0QbZAs91F1WlWyillRcUFSP7iBY554fWd3dbwT1XsJtBpI5oZCsPk6cqNQZDZD'
		}),
		created() {
			// 	this.$firebase.auth().onAuthStateChanged(function(user) {
			//   if (user) {
			//     // User is signed in.
			//   } else {
			//     // No user is signed in. Show Sign in methods or Auth anonymously
			//   }
			// });
// Sign in using a popup.
// var provider = new firebase.auth.FacebookAuthProvider();
// provider.addScope('user_birthday');
// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Facebook Access Token.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   console.log(token)
//   console.log(user)
// });
			// axios.get(`https://gfriend-malaysia.firebaseio.com/user`).then((res) => {
			// 		console.log(res)
			// 	})
			// 	.catch(error => {})
			// this.$firebase.database().ref('user').set('asdsad')
	// 		this.$firebase.database().ref('user').orderByKey().on("child_added", function(snapshot) {
	//   console.log(snapshot.val());
	// })
	// 		firebase.database().ref('user').push({
	//   'id': 'ada',
	//   'title': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.',
	//   'date': 'asd2312.',
	// })
	// firebase.auth().createUserWithEmailAndPassword('hanjeahwan@gmail.com', 'fgacyc94').catch(function(error) {
	//   // Handle Errors here.
	//   var errorCode = error.code;
	//   var errorMessage = error.message;
	//   // ...
	// });
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    // firebase.database().ref('user').push({
	    // 	  'id': 'ada',
	    // 	  'title': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.',
	    // 	  'date': 'asd2312.',
	    // 	})
	  } else {
	    // No user is signed in.
	    // alert(2)
	  }
	});
		},
		mounted() {
			this.$initFbSDK()
			FB.api(`gfriendmalaysia/posts?fields=full_picture,picture,message,created_time,source,permalink_url&access_token=${this.token}`, (response) => {
				let count = 0
				for (let index in response.data) {
					if (response.data[index].message) {
						if (count == 5) {
							break
						} else {
							response.data[index].created_time = moment(response.data[index].created_time).format('ddd D/MM/YYYY LT')
							this.fbPost.push(response.data[index])
						}
						count += 1
					}
				}
			})
			new WOW().init();
			// Smooth scrolling using jQuery easing
			$('a[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: (target.offset().top - 48)
						}, 1000, "easeInOutExpo");
						return false;
					}
				}
			});
			// Activate scrollspy to add active class to navbar items on scroll

			$('#gallery1').magnificPopup({
				items: this.box1,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
				},
				type: 'image' // this is a default type
			});
			$('#gallery2').magnificPopup({
				items: this.box2,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
				},
				type: 'image' // this is a default type
			});
			$('#gallery3').magnificPopup({
				items: this.box3,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
				},
				type: 'image' // this is a default type
			});
			$('#gallery4').magnificPopup({
				items: this.box4,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
				},
				type: 'image' // this is a default type
			});
			$('#gallery5').magnificPopup({
				items: this.box5,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
				},
				type: 'image' // this is a default type
			});
			$('#gallery6').magnificPopup({
				items: this.box6,
				gallery: {
					enabled: true,
					navigateByImgClick: true,
				},
				type: 'image' // this is a default type
			});
			$('.navbar-collapse>ul>li>a').click(function() {
				$('.navbar-collapse').collapse('hide');
			});
			// Collapse the navbar when page is scrolled
			$(window).scroll(function() {
				if ($("#mainNav").offset().top > 100) {
					$("#mainNav").addClass("navbar-shrink");
				} else {
					$("#mainNav").removeClass("navbar-shrink");
				}
			});
		},
		methods: {
 upload(e) {
 	var file = e.target.files[0];
 	console.log(file)
 	              // var storageRef = firebase.storage().ref(file.name);
 	              // storageRef.put(file);
 	              var storageRef = firebase.storage().ref();
 	              var uploadTask = storageRef.child('images/rivers.jpg').put(file);
 	              // Register three observers:
 	              // 1. 'state_changed' observer, called any time the state changes
 	              // 2. Error observer, called on failure
 	              // 3. Completion observer, called on successful completion
 	              uploadTask.on('state_changed', function(snapshot){
 	                // Observe state change events such as progress, pause, and resume
 	                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
 	                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
 	                console.log('Upload is ' + progress + '% done');
 	                switch (snapshot.state) {
 	                  case firebase.storage.TaskState.PAUSED: // or 'paused'
 	                    console.log('Upload is paused');
 	                    break;
 	                  case firebase.storage.TaskState.RUNNING: // or 'running'
 	                    console.log('Upload is running');
 	                    break;
 	                }
 	              }, function(error) {
 	                // Handle unsuccessful uploads
 	              }, function() {
 	                // Handle successful uploads on complete
 	                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
 	                var downloadURL = uploadTask.snapshot.downloadURL;
 	                console.log(downloadURL)
 	              });
      },
		}
	}
	</script>
	<style src="~/assets/index.css"></style>
	<style>
	p,
	.subtext-header {
		line-height: 2rem
	}
	.trophy {
	    color: rgba(240,173,78,.73);
	}
	.smile, .trophy {
	    font-size: 1.25rem;
	}
	@media (max-width: 740px) {
		.full-height,
		.full-height body,
		.full-height header,
		.full-height header .view {
			height: 700px;
		}
	}
	.profile-description {
		line-height: 2rem
	}
	.full-height,
	.full-height body,
	.full-height header,
	.full-height header .view,
	#__nuxt,
	.template-root {
		height: 100%;
		font-size: 0.975rem
	}
	.heart {
		color: #EB5E28;
		animation: heathing 1s ease infinite
	}
	@-webkit-keyframes heathing {
		0% {
			-webkit-transform: scale(1)
		}
		5% {
			-webkit-transform: scale(1.2)
		}
		10% {
			-webkit-transform: scale(1.1)
		}
		15% {
			-webkit-transform: scale(1.3)
		}
		50% {
			-webkit-transform: scale(1)
		}
		100% {
			-webkit-transform: scale(1)
		}
	}
	@keyframes heathing {
		0% {
			transform: scale(1)
		}
		5% {
			transform: scale(1.2)
		}
		10% {
			transform: scale(1.1)
		}
		15% {
			transform: scale(1.3)
		}
		50% {
			transform: scale(1)
		}
		100% {
			transform: scale(1)
		}
	}
	.portfolio-box {
		position: relative;
		display: block;
		max-width: 650px;
		margin: 0 auto
	}
	.portfolio-box .portfolio-box-caption {
		position: absolute;
		bottom: 0;
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		opacity: 0;
		color: #fff;
		background: rgba(0, 0, 0, .3);
		-webkit-transition: all .2s;
		-moz-transition: all .2s;
		transition: all .2s
	}
	.portfolio-box .portfolio-box-caption .portfolio-box-caption-content {
		position: absolute;
		top: 50%;
		width: 100%;
		transform: translateY(-50%);
		text-align: center
	}
	.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category,
	.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
		padding: 0 15px;
		font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif
	}
	.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {
		font-size: 14px;
		font-weight: 600;
		text-transform: uppercase
	}
	.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {
		font-size: 18px
	}
	.portfolio-box:hover .portfolio-box-caption {
		opacity: 1
	}
	.portfolio-box:focus {
		outline: none
	}
	.card.card-plain {
		background-color: transparent;
		box-shadow: none;
		border-radius: 0
	}
	.card {
		border-radius: 12px;
		box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
		background-color: #FFF;
		color: #333;
		margin-bottom: 20px;
		position: relative;
		z-index: 1;
		border: 0 none;
		-webkit-transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease;
		-moz-transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease;
		-o-transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease;
		-ms-transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease;
		transition: transform 300ms cubic-bezier(0.34, 2, 0.6, 1), box-shadow 200ms ease
	}
	.card-blog {
		margin-bottom: 2rem;
		margin-top: 2rem;
	}
	.card.card-plain img {
		border-radius: 12px
	}
	.card img {
		max-width: 100%;
		height: auto;
		border-radius: 12px 12px 0 0
	}
	.card-image img {
		max-width: 100%;
		height: 100%;
		width: 200px;
		min-width: 230px;
		max-height: 100%;
		border-radius: 12px 12px 0 0
	}
	.card .card-description {
		color: #9A9A9A;
		margin-bottom:1rem;
		margin-top:1rem
	}
	.card a:not(.btn),
	.read-more {
		color: #5bc0de;
	}
	.card-title,
	.card-title a {
		color: #333333;
		text-decoration: none;
	}

	.streak.streak-photo {
	    background-repeat: no-repeat;
	    background-size: cover;
	    background-position: 100% 100%;
	}
	.hm-black-strong .full-bg-img, .hm-black-strong .mask {
	    background-color: rgba(0,0,0,.6);
	}
	@media (max-width: 450px){
	.streak.streak-long-2 {
	    height: 500px;
	}
	.streak.streak-photo {
	    background-position: 50% 100%;
	}
	}
			@media screen and (min-width: 48em) {
	.streak.streak-long-2 {
	    height: 500px;
	}
	.streak.streak-photo {
	    background-position: 50% 40%;
	}
	}
	.navbar.navbar-light .breadcrumb .nav-item .nav-link, .navbar.navbar-light .navbar-nav .nav-item .nav-link {
	    color: #fff;
	    -webkit-transition: .35s;
	    transition: .35s;
	}
	.navbar-light .navbar-brand {
	    color: #fff
	}
	</style>
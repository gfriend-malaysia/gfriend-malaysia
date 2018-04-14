<template>
	<div class="template-root">
		<section class="view intro-2 hm-stylish-strong h-100">
			<div class="full-bg-img flex-center">
				<div class="container">
					<div class="row">
						<img src="" alt="">
						<div class="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto">
							<section class="form-gradient">
								<div class="card wow rollIn" data-wow-delay="0.3s">
									<div class="card">
										<div class="card-body mx-4">
											<div class="text-center my-4 pb-4">
												<img src="/login.png" class="mx-auto d-block" alt="placeholder" width="100" height="100">
											</div>
											<div class="md-form">
												<i class="fa fa-user prefix grey-text"></i>
												<input type="text" id="orangeForm-name" class="form-control py-1" v-model="username">
												<label for="orangeForm-name">username / email address</label>
											</div>
											<div class="md-form pmb-2">
												<i class="fa fa-envelope prefix grey-text"></i>
												<input type="password" id="orangeForm-name" class="form-control py-1" v-model="password">
												<label for="orangeForm-name">password</label>
											</div>
											<div class="text-center mb-3">
												<Button type="text" :loading="btnLoading" @click="signIn" class="btn purple-gradient waves-effect waves-light btn-rounded z-depth-1a border-0">
													<span class="text-capitalize" v-if="!btnLoading">Sign In</span>
													<span class="text-capitalize" v-else>Loading...</span>
												</Button>
												<!-- 	<el-button  class="btn purple-gradient waves-effect waves-light btn-rounded z-depth-1a" :loading="btnLoading" @click="signIn($event)" id="signInBtn" >Sign in</el-button> -->
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import photoGallery from "~/assets/gallery.js"
import fb from "~/plugins/fb-sdk.js"
import axios from 'axios'
export default {
	data: () => ({
		username: '',
		password: '',
		btnLoading: false,
		loaded: false,
		image: '',
	}),
	async asyncData(context) {
		return new Promise((resolve, reject) => {
		    let img = new Image()
		    img.onload = () => resolve()
		    img.onerror = reject
		    img.src = 'https://firebasestorage.googleapis.com/v0/b/gfriend-malaysia.appspot.com/o/images%2Fgfriend_background.jpg?alt=media&token=552245c0-66f6-491f-b0ed-bd46fa84d67d'
		  })
	},
	created() {},
	mounted() {
		new WOW().init()
	},
	methods: {
		signIn() {

			this.btnLoading = true
			firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(user => {
				// user signed in
				this.$router.push({ path: '/admin/home' })

			}).catch(error => {
				console.log(error.message)
				this.$Notice.error({
					title: 'Authentication Failed',
					desc: error.message
				})

				this.btnLoading = false

				// alert(errorCode)
			})
		},
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
			uploadTask.on('state_changed', function(snapshot) {
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
<style>
.full-height,
.full-height body,
.full-height header,
.full-height header .view,
#__nuxt,
.template-root {
	height: 100%;
}

.hm-stylish-strong .full-bg-img,
.hm-stylish-strong .mask {
	background-color: rgba(62, 69, 81, 0.23);
}

.card {
	background-color: #ffffffd4;
}

.intro-2 {
	background: url("https://firebasestorage.googleapis.com/v0/b/gfriend-malaysia.appspot.com/o/images%2Fgfriend_background.jpg?alt=media&token=552245c0-66f6-491f-b0ed-bd46fa84d67d")no-repeat center center;
	background-size: cover;
}

.top-nav-collapse {
	background-color: #3f51b5 !important;
}

.navbar:not(.top-nav-collapse) {
	background: transparent !important;
}

@media (max-width: 768px) {
	.navbar:not(.top-nav-collapse) {
		background: #3f51b5 !important;
	}
}


@media (max-width: 740px) {
	.full-height,
	.full-height body,
	.full-height header,
	.full-height header .view {
		height: 750px;
	}
}

@media (min-width: 741px) and (max-height: 638px) {
	.full-height,
	.full-height body,
	.full-height header,
	.full-height header .view {
		height: 750px;
	}
}

.form-light .font-small {
	font-size: 0.8rem;
}

.form-light .z-depth-1a {
	-webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
	box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
}

.form-light .z-depth-1-half,
.form-light .btn:hover {
	-webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
	box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
}

.form-light .font-small {
	font-size: 0.8rem;
}

.md-form label,
.md-form label.active {

	font-size: 0.8125rem;
	cursor: text;
}

input[type=text] {
	font-size: 0.8125rem;
}

.md-form .prefix.grey-text {
	font-size: 1.25rem;
	margin-top: 1rem;
}

</style>

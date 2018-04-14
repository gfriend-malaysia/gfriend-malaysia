<template>
	<div class="template-root">
<div class="fb-comment-embed"
   data-href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185"
   data-width="500"></div>
   <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>
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

	created() {
			// this.$initFbSDK()
		
	},
	mounted() {
			this.$initFbSDK()
			FB.login(function(response) {
			    if (response.authResponse) {
			     console.log('Welcome!  Fetching your information.... ');
			     FB.api('/me', function(response) {
			       console.log('Good to see you, ' + response.name + '.');
			     });
			    } else {
			     console.log('User cancelled login or did not fully authorize.');
			    }
			})
	},
	methods: {

	}
}

</script>
<style>
</style>

<template>
    <nuxt/>
</template>
<script>
	export default {
	  mounted () {
	   document.getElementsByTagName( 'body' )[0].className  += 'creative-lp'
	    document.getElementsByTagName( 'html' )[0].className += 'full-height'
	  }
	}
</script>
<style>


</style>

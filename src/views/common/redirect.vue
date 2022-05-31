<<<<<<< HEAD
<script>
export default {
	created() {
		const { params, query } = this.$route;
		const { path } = params;
		this.$router.replace({ path: '/' + path, query });
	},
	render: function (h) {
		return h();
	},
};
</script>
=======
<script>
export default {
	created() {
		const { params, query } = this.$route;
		const { path } = params;
		this.$router.replace({ path: '/' + path, query });
	},
	render: function (h) {
		return h();
	},
};
</script>
>>>>>>> 375a70ccfc6d442ff0cc85c0f7e7a82aee7d19b9

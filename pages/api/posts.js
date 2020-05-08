import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://10.10.1.210:2368',
  key: '060326c167dd7f91d18569455c',
  version: "v3"
});

export async function getPosts() {
	return await api.posts
		.browse({
			limit: "all"
		})
		.catch(err => {
			console.error(err);
		});
	}
	
export async function getSinglePost(postSlug) {
	return await api.posts
		.read({
			slug: postSlug
		})
		.catch(err => {
			console.error(err);
		});
}
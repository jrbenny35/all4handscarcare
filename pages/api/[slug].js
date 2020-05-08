import react from "react"

import Layout from "../../components/Layout";
import "../public/styles.scss"

import { getPosts, getSinglePost } from './posts';

const PostPage = (props) => {
	// Render post title and content in the page from props
	return (
		<Layout>
			<h1>{props.post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: props.post.html }} />
		</Layout>
	)
}
  
  // Pass the page slug over to the "getSinglePost" function
  // In turn passing it to the posts.read() to query the Ghost Content API
PostPage.getInitialProps = async (params) => {
	const post = await getSinglePost(`5ea268e37eed9cd8d9899e0e`);
	return { post: post }
};

export default PostPage
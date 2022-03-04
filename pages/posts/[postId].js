
function Posts({post}){


    return(
        <>
        <p>title : {post.title}</p>
        <p>body : {post.body}</p>
        </>
    )
}

export default Posts;

export async function getServerSideProps({query}){
    const {postId} = query;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId);
    const post = await response.json();
  
    return{
        props:{
            post
        }
    }
}
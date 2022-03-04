import { useRouter } from "next/router";

function Blog({blog}){
    const router = useRouter();

    if(router.isFallback){
        return <h2>Loding.....</h2>
    }
    return(
        <>
        <p>title : {blog.title}</p>
        <p>body : {blog.body}</p>
        </>
    )
}

export default Blog;

export async function getStaticPaths(){
   const paths = ['/blog/1','/blog/2','/blog/3' ];
   return{
       paths,fallback:true
   }
}


export async function getStaticProps({query,params}){
    const {blogId} = query || params;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+blogId);
    console.log("response",response)
    const blog = await response.json();

  
    return{
        props:{
            blog
        }
    }
}
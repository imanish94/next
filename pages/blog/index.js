import Link from "next/link";
import BlogItem from "./../../components/blog";

function Blog({blog}){
    console.log(blog);
    return(
        <>
        <h2>Blogs</h2>
        {blog.map((blog,i)=> (
            <BlogItem item={blog} key={i}/>
        )
        )}
        <Link href="/home" passHref><button>Go To Home Page</button></Link>
        </>
    )
}

export default Blog;


export async function getStaticProps(context){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blog = await response.json();

    const notFoundData = true;

    if(!blog){
        return{
            redirect:{
                destination : "/home",
                parmanent : false
            }
        }
    }

    if(!notFoundData){
        return{
            notFound : true
        }
    }

    return{
        props:{
            blog
        },
        revalidate : 10
    }
}
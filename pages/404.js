import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    useEffect(()=>{
        const handleRouterChange = (url) => {
            console.log("change router path ", url)
        }
        router.events.on("routeChangeStart",handleRouterChange);
    })


    function redirectIndexPage(){
        router.push("/")
    }

    return(
        <>
        <h1>Page Not Found</h1>
            <ul>
                <li onClick={()=>router.push("/home")}><a>Go to Home Page</a></li>
                <li onClick={()=>router.push("/blog/learn-next")}><a>Go to Blog Page</a></li>
                <li onClick={redirectIndexPage}><a>Go to Index Page</a></li>
                <li onClick={()=>router.push({
                    pathname: "/posts/[postId]",
                    query : {postId : 4}
                })}><a>Go to post 4</a></li>
            </ul>
        </>
    )
}

export default ErrorPage;
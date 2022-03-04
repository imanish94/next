import Link from "next/link";

function LearnNext(){
    return(
        <>
        <h2>Start Learning Next Js</h2>
        <Link href="/home" passHref><button>Go To Home Page</button></Link>
        </>
    )
}

export default LearnNext;
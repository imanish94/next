import { useRouter } from "next/router";

function NextUser(){
    const router = useRouter();
    const id = router.query.id;
    return(
        <h2>User ID : {id}</h2>
    )
}

export default NextUser;
import { useRouter } from "next/router";

function InfoType(){
    const router = useRouter();
    const info = router.query;
    console.log(info)
    return(
        <h2>Info Type : </h2>
    )
}

export default InfoType;
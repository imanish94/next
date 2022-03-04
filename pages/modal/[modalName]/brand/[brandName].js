import { useRouter } from "next/router";


const BrandName = () => {
    const router = useRouter();
    const {modalName,brandName} = router.query;
    return (
        <>
        <h2>Modal Name : {modalName}</h2>
        <h2>Brand Name : {brandName}</h2>
        </>
    )
}

export default BrandName;
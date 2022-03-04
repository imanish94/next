
const BlogItem = ({item}) => {
    const {id,title,body} = item;
    return(
        <>
        <p>ID : {id}</p>
        <p>Title : {title}</p>
        <p>Body : {body}</p>
        </>
    )
}

export default BlogItem;
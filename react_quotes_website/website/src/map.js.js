import BlogPost from "./BlogPost";
import data from "./data"
    export const List = data.map(item => {
        return (
            <div>
                <BlogPost key = {item.id} item = {item}></BlogPost>
            </div>
        )
    })
    // return (
    //     <div className="posts">
    //         <button className="older">OLDER POSTS</button>
    //     </div>
    // )
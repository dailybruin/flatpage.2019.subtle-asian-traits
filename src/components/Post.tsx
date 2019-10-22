import React from "react";

type PostProps = {
    title: string;
    author: string;
    children: React.ReactNode
}

const Post = <T extends PostProps>(Component: React.ComponentType<T>): React.ComponentType<T> => (props) => {
    <div>
        <span>{title}</span>
        <span>{author}</span>
        {children}
    </div>
}

export default Post;
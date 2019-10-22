import React from 'react';

type HeaderProps = {
    imageURL: string;
    title: string;
    author: string;
}

const Header: React.FC<HeaderProps> = ({ imageURL, title, author }) => {
    return (
        <header style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `linear-gradient(transparent, transparent, #010000), url(${imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            color: "white",
            fontFamily: "Avenir, Helvetica, Arial, sans-serif"
        }}>
            <div style={{
                padding: "2em"
            }}>
                <h1>{title}</h1>
                <h2>By: {author}</h2>
            </div>
        </header>
    );
}

export default Header;
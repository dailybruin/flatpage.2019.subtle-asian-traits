import React from 'react';
import fb from "../images/header.svg";
import colors from "../utils/colors";
import Title from './Title';

type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header style={{
            width: "100vw",
            backgroundColor: `${colors.bg}`,
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2em 3em"
        }}>
            <div style={{

            }}>
                <img alt="Image emulating Facebook Newsfeed with Daily Bruin logo on top right" src={fb} />
                <Title title={title} />
            </div>
        </header>
    );
}

export default Header;
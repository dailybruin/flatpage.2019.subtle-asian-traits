import React from "react";

type FooterProps = {
    developers: string;
    designers: string;
    year: number;
}

const Footer: React.FC<FooterProps> = ({ developers, designers, year }) => (
    <footer style={{
        borderTop: "1px solid black",
        fontFamily: "serif",
        display: "flex",
        flexDirection: "column",
        width: "intrinsic",
        alignItems: "center",
        maxWidth: "40%",
        textAlign: "center"
    }}>
        <p>Content copyright © {year} Daily Bruin. Developed by {developers}. Design by {designers}.</p>
    </footer>
)

export default Footer;
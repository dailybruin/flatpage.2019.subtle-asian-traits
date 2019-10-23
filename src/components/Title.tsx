import React from 'react';
import magnifier from "../images/magnifier.svg";
import colors from '../utils/colors';

type TitleProps = {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "20px",
            width: "100%",
            display: "flex",
            alignItems: "center"
        }}>
            <h1 style={{
                margin: "1em",
                flexGrow: 20,
                fontSize: "3em",
            }}>{title}</h1>
            <div style={{
                backgroundColor: `${colors.gray.light}`,
                display: "flex",
                justifyContent: "center",
                alignSelf: "stretch",
                borderRadius: "0px 20px 20px 0px",
            }}>
                <img style={{
                    margin: "0px"
                }} width="60%" alt="Magnifying glass emulating search function." src={magnifier} />
            </div>
        </div>
    );
}

export default Title;
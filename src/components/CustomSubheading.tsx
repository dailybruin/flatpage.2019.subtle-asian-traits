import React from 'react';

type CustomSubHeadingProps = {
    text: string;
}

const CustomSubHeading: React.FC<CustomSubHeadingProps> = ({ text }) => {
    return (
        <h2>
            {text}
        </h2>
    );
}

export default CustomSubHeading;
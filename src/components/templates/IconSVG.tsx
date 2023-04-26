import React from "react";

const SPRITE_SVG_URL = "/sprited-icons.svg";

type Props = { imageId: string } & React.SVGAttributes<HTMLOrSVGElement>;

const IconSVG: React.FC<Props> = ({ imageId, ...props }) => (
    <svg {...props}>
        <use href={`${SPRITE_SVG_URL}#${imageId}`}/>
    </svg>
);

IconSVG.defaultProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

export default IconSVG;

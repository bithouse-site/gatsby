import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import useHeader from '../../hooks/useHeader';
import "./style.css";

export function Logo(): React.ReactElement {
    const headerImage = useHeader().allSanityHeader?.nodes[0].logo.asset

    return (
        <div className={"Logo"} aria-roledescription="logo">
            <GatsbyImage image={headerImage.gatsbyImageData} alt="Logo bitlogic"/>
        </div>
    );
}

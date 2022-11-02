import React from 'react';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import "./style.css";

interface LogoProps {
    fontSize?: string;
    color?: string;
}

export function Logo(props: LogoProps): React.ReactElement {
    const siteConfiguration = useSiteConfiguration();
    const fontSize = props.fontSize || '2rem';
    const color = props.color || 'var(--primary-color)';

    return (
        <div className={"Logo"} aria-roledescription="logo" style={{ fontSize, color }}>
            {siteConfiguration.logo.text}
        </div>
    );
}

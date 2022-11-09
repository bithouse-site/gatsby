import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { PageSection } from '../../types';
import {PortableText} from '@portabletext/react';
import useHero from '../../hooks/useHero';
import * as classes from './style.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';

export function Hero(props: PageSection): React.ReactElement {
    const dataHero = useHero().allSanityHero?.nodes[0];
    const heroImage = dataHero?.imageHero?.asset?.gatsbyImageData;

    return (
        <Animation type="fadeUp" delay={400}>
            <Section anchor={props.sectionId} additionalClasses={[classes.HeroContainer]}>
                <div className={classes.Hero}>
                    <div className={classes.Intro}>
                        {heroImage && (
                            <Animation className={classes.Image} type="waving-hand" duration={2500} iterationCount={3}>
                                <GatsbyImage
                                    image={heroImage}
                                    alt="Intro Image"
                                    loading="eager"
                                />
                            </Animation>
                        )}
                    </div>
                    <h1 className={classes.Title}>{dataHero.titleHero}</h1>
                    {/* <p>{dataHero?.description}</p> */}
                    <PortableText value={dataHero._rawRichTextHero} />
                    <Animation type="fadeLeft" delay={800}>
                        {dataHero.socialNetworks === true ? (
                            <SocialMedia logo={undefined} />
                        ) : null}
                    </Animation>
                </div>
            </Section>
        </Animation>
    );
}

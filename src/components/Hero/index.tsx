import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';/* 
import SocialMedia  from '../../components/Footer/SocialMedia/SocialMedia'; */
/* import { useLocalDataSource } from './data'; */
import { PageSection } from '../../types';
/* import useHero from '../../hooks/useHero' */
import * as classes from './style.module.css';

export function Hero(props: PageSection): React.ReactElement {
   /*  const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0]; */
 /*    const dataHero = useHero().allSanityHero?.nodes[0];
    const heroImage = dataHero?.imageHero.asset; */

    return (
        <Animation type="fadeUp" delay={400}>
            <Section anchor={props.sectionId} additionalClasses={[classes.HeroContainer]}>
                {/* <div className={classes.Hero}>
                    <div className={classes.Intro}>
                        {heroImage && (
                            <Animation className={classes.Image} type="waving-hand" duration={2500} iterationCount={3}>
                                <GatsbyImage
                                    image={heroImage.gatsbyImageData}
                                    alt="Intro Image"
                                    loading="eager"
                                />
                            </Animation>
                        )}
                    </div>
                    <h1 className={classes.Title}>{dataHero.titleHero}</h1>
                    <p>{dataHero?.description}</p>
                    <Animation type="fadeLeft" delay={600}>
                        {data.socialProfiles && (
                            <SocialMedia />
                        )}
                    </Animation>
                </div> */}
            </Section>
        </Animation>
    );
}

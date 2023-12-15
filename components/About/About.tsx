'use client'
import cx from 'clsx';
import {Title, Text, Container, Button, Overlay, SimpleGrid, ThemeIcon, rem} from '@mantine/core';
import {IconHeart, IconTag, IconStethoscope} from '@tabler/icons-react';

import classes from './About.module.css';
import Image from "next/image";


export const MOCKDATA = [
    {
        icon: IconStethoscope,
        title: 'Personalised Consultation',
        description:
            'Here at Harts Salon, we recognize that everyone has a different type of hair.' +
            ' That’s why we believe in personalizing our services for you – by making recommendations ' +
            'based on your face shape, skin tone and lifestyle, you will be made to look and feel your best.',
    },
    {
        icon: IconHeart,
        title: 'Quality Service',
        description:
            'We believe in only selling products that we would use on ourselves.' +
            ' That’s why we do intensive research on products we intend to use or sell before bringing them in, ' +
            'ensuring that your hair health is never compromised regardless of colour or style of choice.' +
            ' Our stylists also undergo weekly trainings to maintain a consistent quality in the service we provide.' +
            ' Your hair is in good hands!'
    },
    {
        icon: IconTag,
        title: 'Transparent Pricing',
        description:
            'Not a fan of hidden costs? Neither are we – All costs are made clear to you before proceeding with any' +
            ' service, so rest assured that you will not be pressured into spending more than you are comfortable to.',
    },
];
const AWARDS = [
    {image: '/bestinsg_logo_tfe-1.png', link: 'https://www.thefunempire.com/hair-salons-singapore/'},
    {image: '/img.png', link: 'https://dailyvanity.sg/news/good-affordable-cheap-hair-salons-singapore'},
    {image: '/img_3.png', link: 'https://girlstyle.com/sg/article/81598/best-hair-salons-singapore-korean-perms'},
    {image: '/img_2.png', link: 'https://zula.sg/bleach-hair-singapore/'},
]

interface FeatureProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
}

interface AwardProps {
    image: string;
    link: string;
}

const size = rem(75)
const iconSize = rem(30)

export function Feature({icon: Icon, title, description}: FeatureProps) {
    return (
        <div className={classes.feature}>
            <ThemeIcon variant="filled" color={'black'} size={size} radius={size}>
                <Icon style={{width: iconSize, height: iconSize}} stroke={1.5}/>
            </ThemeIcon>
            <Text className={classes.title} mt="sm" mb={7}>
                {title}
            </Text>
            <Text className={classes.description} size="sm" c="dimmed" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

export function Award({image, link}: AwardProps) {
    return (
        <Image
            className={classes.image}
            alt={'award'}
            width={240}
            height={240}
            src={image} onClick={()=>window.open(link, '_blank').focus()}/>
    );
}

export function About() {
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index}/>);
    const awards = AWARDS.map((feature, index) => <Award {...feature} key={index}/>);

    return (

        <Container className={classes.wrapper} size={'md'}>
            <Title fw={300} py={30}>About Us</Title>
            <SimpleGrid cols={{base: 1, md: 3}} spacing="lg">
                {features}
            </SimpleGrid>
            <Title fw={300} pt={30}>Reviews & Accolades</Title>
            <SimpleGrid cols={{base: 1, sm:2, md: 4}} spacing={'lg'} mb={30}>
                {awards}
            </SimpleGrid>

        </Container>
    );
}
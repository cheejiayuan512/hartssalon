import {Title, Text, Container, Button, Overlay, SimpleGrid, ThemeIcon, rem, Stack, Box} from '@mantine/core';
import classes from './Contact.module.css';
import {ContactIconsList} from "@/components/Contact/ContactList";


export function Contact() {

    return (

        <Container className={classes.wrapper} size={'md'}>
            <Title fw={300} py={30}>Contact Us</Title>
            <div className={classes.inner}>
            <div className={classes.contacts}>
                <ContactIconsList/>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.793795206038!2d103.8540481086434!3d1.2984692617373257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19affc46e93f%3A0x8152f4416f67e002!2sHARTS%20(BUGIS)!5e0!3m2!1sen!2ssg!4v1702651207035!5m2!1sen!2ssg"
                width="600"  style={{border:0}} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Container>
    );
}
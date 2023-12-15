import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
    return (
        <div className={classes.wrapper}>

            <div className={classes.inner}>
                <Title className={classes.title}>
                  Welcome to Harts Salon
                </Title>


            </div>
        </div>
    );
}
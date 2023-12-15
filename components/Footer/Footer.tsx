import {Container, Group, ActionIcon, rem, Text} from '@mantine/core';
import {IconBrandFacebook, IconBrandWhatsapp, IconBrandInstagram} from '@tabler/icons-react';
import classes from './Footer.module.css';

export function Footer() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner} >

                <Group gap={0} className={classes.texts} justify="center" wrap="nowrap">
                    <Text> Locate Us</Text>
                    <Text component={'a'} href={'https://www.google.com/maps/search/?api=1&query=HARTS+(BUGIS)'} target={'_blank'} className={classes.text}>9 Tan Quee Lan Street, #02-05, S188098</Text>
                    <Text className={classes.text}>2 minutes walk from Bugis MRT Exit D</Text>
                </Group>
                <Group gap={0} className={classes.texts} justify="center" wrap="nowrap">
                    <Text> Opening Hours</Text>
                    <Text className={classes.text}>Weekdays : 1pm to 9pm</Text>
                    <Text className={classes.text}>Weekends/Public Holidays : 11am to 7pm</Text>
                </Group>
                <Group gap={0} className={classes.texts} justify="center" wrap="nowrap">
                <Group gap={0} className={classes.links} justify="center" wrap="nowrap">

                    <ActionIcon size="xl" color="gray" variant="subtle"
                                component="a"
                                href="https://www.facebook.com/hartssalon/"
                                target="_blank" >
                        <IconBrandFacebook style={{width: rem(40), height: rem(40)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="xl" color="gray" variant="subtle"
                                component="a"
                                href="https://instagram.com/harts_salon"
                                target="_blank">
                        <IconBrandInstagram style={{width: rem(40), height: rem(40)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="xl" color="gray" variant="subtle"
                                component="a"
                                href="https://api.whatsapp.com/send?phone=6587767517"
                                target="_blank">
                        <IconBrandWhatsapp style={{width: rem(40), height: rem(40)}} stroke={1.5}/>
                    </ActionIcon>
                </Group>
                </Group>

            </Container>
        </div>
    );
}
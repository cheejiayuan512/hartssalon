'use client'
import {Menu, Group, Center, Burger, Container, Drawer, ScrollArea, Button, rem, Divider} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Navbar.module.css';
import Image from 'next/image';
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {useEffect} from "react";


export function Navbar() {
    const [opened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
    const router = useRouter()
    const pathname = usePathname();
    useEffect(() => {
        closeDrawer()
    }, [pathname]);
    return (
        <>
            <header className={classes.header}>
                <Container size="md">
                    <div className={classes.inner}>
                        <Image
                            className={classes.toastImage}
                            onClick={() => router.push('/')}
                            src="/mainlogo-1.png"
                            width={153}
                            height={40}
                            alt="toast-image"
                        /> <Group gap={5} visibleFrom="sm">
                        <Link href="/" className={classes.link}>
                            Home
                        </Link>
                        <Link href="/about" className={classes.link}>
                            About
                        </Link>
                        <Link href="/services" className={classes.link}>
                            Services
                        </Link>
                        <Link href="/contact-us" className={classes.link}>
                            Contact Us
                        </Link>
                    </Group>
                        <Burger opened={opened} onClick={toggleDrawer} size="sm" hiddenFrom="sm"/>
                    </div>
                </Container>
            </header>
            <Drawer
                opened={opened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={<Image
                className={classes.toastImage} src="/mainlogo-1.png"
            width={153}
            height={40}
            alt="toast-image"
            />}
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider mb="sm"/>

                    <Link href="/" className={classes.link}>
                        Home
                    </Link>
                    <Divider my="sm"/>

                    <Link href="/about" className={classes.link}>
                        About
                    </Link>
                    <Divider my="sm"/>

                    <Link href="/services" className={classes.link}>
                        Services
                    </Link>
                    <Divider my="sm"/>
                    <Link href="/contact-us" className={classes.link}>
                        Contact Us
                    </Link>
                    <Divider my="sm"/>

                </ScrollArea>
            </Drawer>
        </>
    );
}
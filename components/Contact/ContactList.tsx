import {Text, Box, Stack, rem, ActionIcon} from '@mantine/core';
import {IconSun, IconPhone, IconMapPin, IconAt, IconBrandWhatsapp} from '@tabler/icons-react';
import classes from './ContactList.module.css';
import Link from "next/link";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
    disabledIcon: boolean;
    href:string,
}

function ContactIcon({icon: Icon, title, description, disabledIcon,href,...others}: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                {disabledIcon ?
                    <Icon style={{width: rem(24), height: rem(24)}}/>
                    : <ActionIcon variant={'subtle'} c={'black'}  component={Link} href={href} target='_blank' >
                        <Icon style={{width: rem(24), height: rem(24)}}/>
                    </ActionIcon>


                }

            </Box>

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>

            </div>
        </div>
    );
}

const MOCKDATA = [
    {href:'',
        disabledIcon: true, title: 'Opening Hours', description: <><Text>Weekdays : 1pm to 9pm</Text><Text>Weekends/Public
            Holidays : 11am to 7pm</Text></>, icon: IconSun
    },
    {href:"https://www.google.com/maps/search/?api=1&query=HARTS+(BUGIS)",disabledIcon: false, title: 'Address', description: '9 Tan Quee Lan Street #02-05, Singapore 188098', icon: IconMapPin},
    {href:'mailto:harts.salon@outlook.com',disabledIcon: false, title: 'Email', description: 'harts.salon@outlook.com', icon: IconAt},
    {href:'tel:+6562545762',disabledIcon: false, title: 'Phone', description: '+65 62545762', icon: IconPhone},
    {href:'https://api.whatsapp.com/send?phone=6587767517',disabledIcon: false, title: 'WhatsApp', description: '+65 87767517', icon: IconBrandWhatsapp},
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}
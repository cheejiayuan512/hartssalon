'use client'
import cx from 'clsx';
import {
    Title,
    Text,
    Container,
    Button,
    Overlay,
    SimpleGrid,
    ThemeIcon,
    rem,
    Divider,
    Table,
    ScrollArea,
    List
} from '@mantine/core';
import classes from './Services.module.css';
import {IconArrowRight, IconClock, IconTag} from "@tabler/icons-react";

export function Services() {
    return (
            <Container className={classes.wrapper} size={'md'}>
                <Title fw={300} py={30}>Bundle Promotions</Title>
                <Divider variant="dotted" className={classes.divider}/>
                <div className={classes.inner}>
                    <Title fw={500} py={30}>Colour & Treatment Bundle</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>S</Table.Th>
                                <Table.Th>M</Table.Th>
                                <Table.Th>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Full head bundle</Table.Td>
                                <Table.Td w={100}>188</Table.Td>
                                <Table.Td w={100}>248</Table.Td>
                                <Table.Td w={100}>288</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginBlock: 20}}
                        icon={
                            <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Includes one tone colour (non-bleach) and triple treats treatment</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Top up $50 to add balayage/full head highlight</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Top up $60 to upgrade treatment (e.g Inkarami)</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Top up 50% off price of smoothening/glam-edy treatment to upgrade to smoothening
                        treatment/glam-edy</List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Duration: 2 hours (depends on individual hair)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Last appointment : 7pm (weekdays) 5pm (weekends/PH)
                    </List.Item>
                </List>

                    <Title fw={500} py={30}>Digital Perm & Treatment Bundle </Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th w={100}>S</Table.Th>
                                <Table.Th w={100}>M</Table.Th>
                                <Table.Th w={100}>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'b'}>
                                <Table.Td>Glam Wave (Harts Treatment perm)</Table.Td>
                                <Table.Td>248</Table.Td>
                                <Table.Td>308</Table.Td>
                                <Table.Td>348</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginBlock: 20}}
                        icon={
                            <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Includes digital perm, treatment and cut</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Additional $10 for creative stylist, $20 for leading stylist and $40 for director</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Top up $40 for straightening (smoothening treatment) on top
                        <List withPadding>
                            <List.Item>*Not recommended for bleached hair</List.Item>
                        </List>
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Duration: approx 3 hours (might vary depends on individual hair & perm style!)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Last appointment : 6pm (weekdays) 4pm (weekends/PH)
                    </List.Item>
                </List>


                    <Title fw={500} py={30}>Scalp & Hair Treatment Bundle</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>S</Table.Th>
                                <Table.Th>M</Table.Th>
                                <Table.Th>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>HARTS Rejuvenate</Table.Td>
                                <Table.Td w={100}>168</Table.Td>
                                <Table.Td w={100}>198</Table.Td>
                                <Table.Td w={100}>228</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginBlock: 20}}
                        icon={
                            <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Includes scalp treatment and triple treats treatment</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Top up $60 to upgrade treatment (e.g Inkarami)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Duration: 1-1.5 hours (depends on individual hair)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Last appointment : 7:30pm (weekdays) 5:30pm (weekends/PH)
                    </List.Item>
                </List>


                    <Title fw={500} py={30}>Touch-up & Treatment Bundle</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>S</Table.Th>
                                <Table.Th>M</Table.Th>
                                <Table.Th>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>HARTS Revitalize</Table.Td>
                                <Table.Td w={100}>168</Table.Td>
                                <Table.Td w={100}>198</Table.Td>
                                <Table.Td w={100}>228</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginBlock: 20}}
                        icon={
                            <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Includes scalp treatment and triple treats treatment</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Top up $60 to upgrade treatment (e.g Inkarami)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Duration: 1-1.5 hours (depends on individual hair)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Last appointment : 7:30pm (weekdays) 5:30pm (weekends/PH)
                    </List.Item>
                </List>
                    <Title fw={500} py={30}>Pre-lightening & Colour Bundle</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>$</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>HARTS Dimension</Table.Td>
                                <Table.Td w={300}>From $248 to $398 (by consultation)</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginBlock: 20}}
                        icon={
                            <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Includes one time pre-lightening(bleaching), colouring and bond treatment</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Optional: 50% off additional treatment (e.g Inkarami, Glamedy ect)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Optional: $40-$80 for additional bleaching
                    </List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Up to 2 colours of your choice! (Additional $10-30 per colour from 3rd colour onwards)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>15% off for partial highlights, hidden colour, half head colour or roots bleach (with full
                        head
                        colour)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>20% off for roots bleach & roots colour
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Duration: 3.5 hours and above (highly dependent on individual hair & style)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    > Last appointment : 5pm (weekdays) 3pm (weekends/PH)
                    </List.Item>
                </List>

                    <Title fw={500} py={30}>Hidden Colour Promo (15% OFF!)</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>$</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Hidden colouring (whole head)</Table.Td>
                                <Table.Td w={300}>From $210.80 to $338.30 (after discount)</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginBlock: 20}}
                        icon={
                            <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Includes one time pre-lightening(bleaching) for inner layer, colouring (whole head) and bond
                        treatment</List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Optional: 50% off additional treatment (e.g Inkarami, Glamedy ect)

                    </List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Optional: $50-$90 for additional bleaching
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    >Duration: 3 hours and above (highly dependent on individual hair & style)
                    </List.Item>
                    <List.Item
                        icon={
                            <IconClock style={{width: rem(16), height: rem(16)}}/>
                        }
                    > Last appointment : 5pm (weekdays) 3pm (weekends/PH)
                    </List.Item>
                </List>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>$</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Non-bleach hidden colour</Table.Td>
                                <Table.Td w={300}>From $102 to $161.5 (after discount)</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                    <List spacing={rem(5)}>
                        <List.Item style={{marginBlock: 20}}
                                   icon={
                                       <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                                   }
                        >Includes colouring inner part only</List.Item>
                        <List.Item
                            icon={
                                <IconClock style={{width: rem(16), height: rem(16)}}/>
                            }
                        >Duration: 1-2 hours (highly dependent on individual hair & style)
                        </List.Item>
                        <List.Item
                            icon={
                                <IconClock style={{width: rem(16), height: rem(16)}}/>
                            }
                        > Last appointment : 7pm (weekdays) 5pm (weekends/PH)
                        </List.Item>
                    </List>

                </div>
                <Text fs={'italic'} c="dimmed" mt={40} >*Additional $40 for waist length</Text>
                <Text fs={'italic'} c="dimmed" my={20}>*Additional $80 for hip length</Text>
                <Text fs={'italic'} c="dimmed" my={50}>All prices are subject to prevailing GST</Text>
                <Title fw={300} py={30}>À la carte Services</Title>
                <Divider variant="dotted" className={classes.divider}/>
                <div className={classes.inner}>
                    <Title fw={500} py={30}>Cut, Wash and Blow</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th w={100}>S</Table.Th>
                                <Table.Th w={100}>M</Table.Th>
                                <Table.Th w={100}>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Stylist</Table.Td>
                                <Table.Td>45</Table.Td>
                                <Table.Td>50</Table.Td>
                                <Table.Td>55</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Creative Stylist</Table.Td>
                                <Table.Td>50</Table.Td>
                                <Table.Td>55</Table.Td>
                                <Table.Td>60</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Leading Stylist</Table.Td>
                                <Table.Td>55</Table.Td>
                                <Table.Td>60</Table.Td>
                                <Table.Td>65</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Director Stylist</Table.Td>
                                <Table.Td>60</Table.Td>
                                <Table.Td>65</Table.Td>
                                <Table.Td>70</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                    <Title fw={500} py={30}>Add-on Haircut Price</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th w={300}>All Lengths</Table.Th>

                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Stylist</Table.Td>
                                <Table.Td>40</Table.Td>

                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Creative Stylist</Table.Td>
                                <Table.Td>45</Table.Td>

                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Leading Stylist</Table.Td>
                                <Table.Td>50</Table.Td>

                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Director Stylist</Table.Td>
                                <Table.Td>55</Table.Td>

                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                    <List spacing={rem(5)}>
                        <List.Item
                            style={{marginBlock: 20}}
                            icon={
                                <IconArrowRight style={{width: rem(16), height: rem(16)}}/>
                            }
                        >Please be informed that we do not provide up-do styling services. (e.g. wedding styling, event
                            up-do styling)
                        </List.Item>
                    </List>
                    <Title fw={500} py={30}>Non-bleach Colour</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>S</Table.Th>
                                <Table.Th>M</Table.Th>
                                <Table.Th>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Fringe Highlights**</Table.Td>
                                <Table.Td w={100}>90</Table.Td>
                                <Table.Td w={100}>100</Table.Td>
                                <Table.Td w={100}>110</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Roots Retouch**</Table.Td>
                                <Table.Td w={100}>90</Table.Td>
                                <Table.Td w={100}>100</Table.Td>
                                <Table.Td w={100}>110</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Full Head Colour/One Tone Colour</Table.Td>
                                <Table.Td w={100}>120</Table.Td>
                                <Table.Td w={100}>160</Table.Td>
                                <Table.Td w={100}>180</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Full Head Highlight/Balayage</Table.Td>
                                <Table.Td w={100}>180</Table.Td>
                                <Table.Td w={100}>220</Table.Td>
                                <Table.Td w={100}>260</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Toning</Table.Td>
                                <Table.Td w={100}>90</Table.Td>
                                <Table.Td w={100}>120</Table.Td>
                                <Table.Td w={100}>150</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginTop: 20}}
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>**Add-on service will be charged under short length pricing
                    </List.Item>
                    <List.Item
                        icon={
                            <IconTag style={{width: rem(16), height: rem(16)}}/>
                        }>Additional $10-30 for an additional colour (per colour)
                    </List.Item>
                </List>
                    <Title fw={500} py={30}>Rebonding/Perm</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>S</Table.Th>
                                <Table.Th>M</Table.Th>
                                <Table.Th>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Digital Perm*^</Table.Td>
                                <Table.Td w={100}>180</Table.Td>
                                <Table.Td w={100}>280</Table.Td>
                                <Table.Td w={100}>310</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Soft Rebonding^ </Table.Td>
                                <Table.Td w={100}>180</Table.Td>
                                <Table.Td w={100}>280</Table.Td>
                                <Table.Td w={100}>310</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Roots Perm** </Table.Td>
                                <Table.Td w={100}>90</Table.Td>
                                <Table.Td w={100}>120</Table.Td>
                                <Table.Td w={100}>150</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Fringe Perm/Rebonding</Table.Td>
                                <Table.Td w={100}>70</Table.Td>
                                <Table.Td w={100}>80</Table.Td>
                                <Table.Td w={100}>90</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginTop: 20}}
                        icon={<></>}>*Includes Haircut (additional $10 for creative stylist, $20 for leading stylist &
                        $40 for director service)
                    </List.Item>
                    <List.Item
                        icon={<></>}>^Not recommended for bleached hair
                    </List.Item>
                </List>
                    <Title fw={500} py={30}>Treatment</Title>
                    <Table>
                        <Table.Thead className={cx(classes.header)}>
                            <Table.Tr>
                                <Table.Th></Table.Th>
                                <Table.Th>S</Table.Th>
                                <Table.Th>M</Table.Th>
                                <Table.Th>L</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr key={'a'}>
                                <Table.Td>Organic scalp treatment** </Table.Td>
                                <Table.Td w={100}>120</Table.Td>
                                <Table.Td w={100}>150</Table.Td>
                                <Table.Td w={100}>180</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>TRIPLE TREATS (3-Steps customised treatment) </Table.Td>
                                <Table.Td w={100}>120</Table.Td>
                                <Table.Td w={100}>150</Table.Td>
                                <Table.Td w={100}>180</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Olaplex Treatment </Table.Td>
                                <Table.Td w={100}>120</Table.Td>
                                <Table.Td w={100}>150</Table.Td>
                                <Table.Td w={100}>180</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Silk Repair Treatment</Table.Td>
                                <Table.Td w={100}>160</Table.Td>
                                <Table.Td w={100}>200</Table.Td>
                                <Table.Td w={100}>240</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Tokio Inkarami Treatment </Table.Td>
                                <Table.Td w={100}>160</Table.Td>
                                <Table.Td w={100}>200</Table.Td>
                                <Table.Td w={100}>240</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Smoothening Treatment^ </Table.Td>
                                <Table.Td w={100}>250</Table.Td>
                                <Table.Td w={100}>300</Table.Td>
                                <Table.Td w={100}>350</Table.Td>
                            </Table.Tr>
                            <Table.Tr key={'a'}>
                                <Table.Td>Glamedy</Table.Td>
                                <Table.Td w={100}>250</Table.Td>
                                <Table.Td w={100}>300</Table.Td>
                                <Table.Td w={100}>350</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table> <List spacing={rem(5)}>
                    <List.Item
                        style={{marginTop: 20}}
                        icon={<></>}>**Add-on service will be charged under short length pricing
                    </List.Item>
                    <List.Item
                        icon={<></>}>^Not recommended for bleached hair
                    </List.Item>
                </List>
                </div>
                <Text fs={'italic'} c="dimmed" mt={40} >*Additional $40 for waist length</Text>
                <Text fs={'italic'} c="dimmed" my={20}>*Additional $80 for hip length</Text>
                <Text fs={'italic'} c="dimmed" my={50}>All prices are subject to prevailing GST</Text>
            </Container>
    );
}
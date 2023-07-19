
// ! Very important, to prevent "import" errors
'use client';
import styles from './page.module.css'
import { Box, Center, ChakraProvider, Stack, Text } from '@chakra-ui/react';


// Here we create an array of data we would like to map to elements
const notifications = [
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions for the upcoming exam in April and graduate together lololo"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
	{
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Let's exchange the past questions"
	},
]

// Here we map the array to elements we want to display per item in the array
//! Notice the "key" property in the "Box", it must be a compulsory, unique item. Here I simply use the index of the item as they key
const notificationList = notifications.map((notification) => 
	(
		<Box borderBottom={"1px solid black"} key={notifications.indexOf(notification)}  pl={3}>
			<Text fontSize='xs'>{notification.date}</Text>
			<Text fontSize='md'>{notification.text}</Text>
		</Box>
	)
)

// So this is it "ChakraProvider" is a must for chakra components to work properly
// We have the title in the "center" tag
// And the "notificationsList" which is a map of the notifications, is rendered as a literal i.e. "{}"

export default function Demo(){
	return (
		<ChakraProvider>
			<Box border={'1px solid black'} w='350px' color='black'>
				<Center pt={4} pb={4} >UNILAG CHANNEL</Center>
				<Stack bg={'#f0f0f0'} width={'100%'}>
					{notificationList}
				</Stack>
			</Box>
		</ChakraProvider>
  )
}
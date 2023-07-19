
// ! Very important, to prevent "import" errors
'use client';
import styles from './page.module.css'
import { Box, Center, ChakraProvider, Stack, Text } from '@chakra-ui/react';


// Here we create an array of data we would like to map to elements
const notifications = [
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Do you have any of the questions of Algebra? I have some of Biology's questions"
	},
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Yes I have"
	},
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "No I don't, I need it"
	},
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Here: https://jobs.shitaraba.net/schools/5444"
	},
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Yes I have"
	},
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Yes I have"
	},
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Yes I have"
	},
	{
		person: "Someone",
		date: "2023/03/02 (Sat) 24:43:44",
		text: "Yes I have"
	},
]

// Here we map the array to elements we want to display per item in the array
//! Notice the "key" property in the "Box", it must be a compulsory, unique item. Here I simply use the index of the item as they key
const notificationList = notifications.map((notification) => 
	(
		<Box borderBottom={"1px solid black"} key={notifications.indexOf(notification)}  pl={3}>
			<Text fontSize='xs' marginBottom={"1em"}> <span>{notifications.indexOf(notification) + 1}</span> <b>{notification.person}</b> {notification.date}</Text>
			<Text fontSize='xs' marginBottom={"1em"}>{notification.text}</Text>
		</Box>
	)
)

// So this is it "ChakraProvider" is a must for chakra components to work properly
// We have the title in the "center" tag
// And the "notificationsList" which is a map of the notifications, is rendered as a literal i.e. "{}"

export default function Demo(){
	return (
		<ChakraProvider>
			<Box border={'1px solid #0a0a0a'} w='350px' color='black'>
				<Box pb={4}>
					<Center pt={4} pb={4}>UNILAG CHANNEL</Center>
					<Text as='b' pl={3} marginBottom={"10px"}>{"Let's exchange the past question"}</Text>
				</Box>
				<Stack bg={'#f0f0f0'} width={'100%'}>
					{notificationList}
				</Stack>
			</Box>
		</ChakraProvider>
  )
}

// ! Very important, to prevent "import" errors
'use client';
import styles from './page.module.css'
import { Box, Center, ChakraProvider, Input, Flex, Textarea, Button } from '@chakra-ui/react';

// So this is it "ChakraProvider" is a must for chakra components to work properly
// We center the title with the "Center" tag
// We use a flex with a "gap" property set to "1em" give the item a gap


// If you notice the input and textarea have the "size" set to sm, you can specify different sizes, xl, lg etc
export default function Demo(){
	return (
		<ChakraProvider>
			<Box border={'1px solid black'} w='350px' color='black' p={4}>
				<Center pt={4} pb={4} >UNILAG CHANNEL</Center>
				<Flex flexDirection={'column'} gap={'1em'}>
  				<Input placeholder='Thread title' size='sm' border={"1px solid black"} />
					<Textarea size='sm' placeholder='Here is a sample placeholder' border={"1px solid black"} borderRadius={0} />
					<Button colorScheme='blue' borderRadius={0} boxShadow={"0px 4px 4px #00000040"}>Create a new thread</Button>
				</Flex>
			</Box>
		</ChakraProvider>
  )
}
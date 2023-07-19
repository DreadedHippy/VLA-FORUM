
// ! Very important, to prevent "import" errors
'use client';
import styles from './page.module.css';
import { Modal, ChakraProvider, Textarea, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, Button, ModalFooter, ModalBody, Stack} from '@chakra-ui/react';

// So this is it "ChakraProvider" is a must for chakra components to work properly

//? The Modal tag is used to show a modal. A modal is a dialog that focuses the user's attention exclusively on an information via a window that is overlaid on primary content.
//? ModalOverlay is the dimmed overlay behind the modal
//? By default, you cannot scroll with a modal on the screen but "blockScrollOnMount={false}" allows scrolling
//? We have the ModalContent which holds "header", "body", and "footer"
//? Additionally, you can specify a ModalCloseButton just after the modal header to show a cancel button at the top right of the modal
//? I put my interaction buttons in the footer but feel free to put yours wherever you like.
export default function Demo(){
	return (
		<ChakraProvider>
			<Modal blockScrollOnMount={false} isOpen={true} >
				<ModalOverlay />
				<ModalContent borderRadius={0} width={"300px"}>
					{/* <ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton /> */}
					<ModalBody>
						<Textarea size='sm' mt='3rem' placeholder='Your comment' borderRadius={0} mb='1rem'>
						</Textarea>
					</ModalBody>

					<ModalFooter mb={"3rem"}>
						<Stack width={"100%"}>
							<Button colorScheme='blue' width={"100%"} borderRadius={0} boxShadow={"0px 4px 4px #00000040"}>Post</Button>
							<Button colorScheme='gray' width={"100%"} borderRadius={0} boxShadow={"0px 4px 4px #00000040"}>Close</Button>
						</Stack>
					</ModalFooter >
				</ModalContent>
			</Modal>			
		</ChakraProvider>
  )
}
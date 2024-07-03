import {
	Box,
	Button,
	Heading,
	HStack,
	Icon,
	Tag,
	TagLabel,
	Text,
	VStack,
} from "@chakra-ui/react";
import { ArrowUUpLeft, At, Books, DeviceMobile } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../stores/api/users";

const Recap: React.FC = () => {
	const userId = localStorage.getItem("userId");
	const navigate = useNavigate();

	const { data } = useGetMeQuery();

	useEffect(() => {
		if (!userId) {
			console.log("Redirecting due to missing userId in localStorage");
			navigate("/");
		}
	});

	const handleBack = () => {
		localStorage.clear();
		navigate("/");
	};

	return (
		<VStack
			p="16px"
			textAlign="left"
			width="full"
			height="100svh"
			alignItems="start"
			justify="space-between"
			spacing="64px"
		>
			<Heading>Bonjour {data?.first_name} </Heading>

			<VStack
				boxSize="full"
				spacing="24px"
				padding="32px"
				borderRadius="14px"
				bg="whiteAlpha.500"
				border="1px solid"
				borderColor="blackAlpha.200"
				align="start"
			>
				<Heading fontWeight="400">
					{data?.first_name} {data?.last_name}
				</Heading>
				<Tag border="1px solid" borderColor="blackAlpha.200">
					<Icon as={Books} mr="8px" />
					<TagLabel>{localStorage.getItem("userType")?.toUpperCase()}</TagLabel>
				</Tag>
				<VStack
					align="start"
					bg="blackAlpha.200"
					p="32px"
					borderRadius="14px"
					w="full"
					gap="24px"
				>
					<Box>
						<Tag color="gray" p="0">
							<Icon as={DeviceMobile} mr="8px" />
							<TagLabel>Téléphone</TagLabel>
						</Tag>
						<Text>{data?.number}</Text>
					</Box>
					<Box>
						<Tag color="gray" p="0">
							<Icon as={At} mr="8px" />
							<TagLabel>Adress e-mail</TagLabel>
						</Tag>
						<Text>{data?.email}</Text>
					</Box>
				</VStack>
			</VStack>

			<HStack width="full" justify="space-between">
				<Button
					onClick={handleBack}
					variant="outline"
					colorScheme="red"
					rightIcon={<Icon as={ArrowUUpLeft} />}
				>
					Retour
				</Button>
			</HStack>
		</VStack>
	);
};

export default Recap;

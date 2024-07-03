import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputLeftAddon,
	Text,
	VStack,
} from "@chakra-ui/react";
import { ArrowRight, CaretRight, ArrowUUpLeft } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateMeMutation } from "../../stores/api/users";

const Signup: React.FC = () => {
	const userId = localStorage.getItem("userId");
	const navigate = useNavigate();

	const [lastName, setLastName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	useEffect(() => {
		if (!userId) {
			console.log("Redirecting due to missing userId in localStorage");
			navigate("/");
		}
	});

	const [updateMe] = useUpdateMeMutation();

	const canValidate = (): boolean | undefined =>
		lastName !== "" && firstName !== "" && phoneNumber !== "";

	const handleSubmit = async () => {
		try {
			await updateMe({
				first_name: firstName,
				last_name: lastName,
				number: phoneNumber,
			});
			navigate("/recap");
		} catch (error) {
			console.error(error);
		}
	};

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
			spacing="16px"
		>
			<Heading>Dites-nous en plus sur vous!</Heading>
			<Text color="gray" size="lg">
				Passons maintenant à vos informations personnelles.
			</Text>

			<VStack boxSize="full" spacing="32px" as="form">
				<FormControl>
					<FormLabel>Nom</FormLabel>
					<Input
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
						id="last_name"
						type="text"
						placeholder="Michel"
					/>
					<FormHelperText color="gray.400">Votre nom complet.</FormHelperText>
				</FormControl>
				<FormControl>
					<FormLabel>Prénom</FormLabel>
					<Input
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
						id="fist_name"
						type="text"
						placeholder="Pierre"
					/>
					<FormHelperText color="gray.400">Votre prénom.</FormHelperText>
				</FormControl>
				<FormControl>
					<FormLabel>Nom</FormLabel>
					<InputGroup>
						<InputLeftAddon color="gray.400" gap="8px" bg="inherit">
							<Text>FR</Text>
							<Icon as={CaretRight} transform="rotate(90deg)" />
						</InputLeftAddon>
						<Input
							onChange={(e) => setPhoneNumber(e.target.value)}
							value={phoneNumber}
							id="number"
							type="tel"
							placeholder="07 87 34 22 12"
						/>
					</InputGroup>
					<FormHelperText color="gray.400">
						Vous serez contacté via ce numéro.
					</FormHelperText>
				</FormControl>
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
				<Button
					onClick={handleSubmit}
					isDisabled={!canValidate()}
					rightIcon={<Icon as={ArrowRight} />}
				>
					Continuer
				</Button>
			</HStack>
		</VStack>
	);
};

export default Signup;

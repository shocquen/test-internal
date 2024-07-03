import {
	FormControl,
	FormLabel,
	Icon,
	Input,
	InputGroup,
	InputLeftAddon,
	useToast,
} from "@chakra-ui/react";
import { At } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryLayout from "../../components/layouts";
import { useCreateUserMutation } from "../../stores/api/users";

const Email: React.FC = () => {
	const userType = localStorage.getItem("userType");
	const [email, setEmail] = useState("");
	const [createUser] = useCreateUserMutation();

	const navigate = useNavigate();
	const toast = useToast();

	useEffect(() => {
		if (!userType) {
			console.log("Redirecting due to invalid state...");
			navigate("/");
		}
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!emailIsValid) {
			try {
				const user = await createUser({ email }).unwrap();
				console.log("User created successfully", user);
				localStorage.setItem("userId", user._id);
				navigate("/otp");
			} catch (error) {
				console.error("Failed to create user", error);
				toast({
					title: "Error creating user.",
					description:
						"Oh nooo an error... Maybe you try to duplicate a email?",
					status: "error",
					duration: 9000,
					isClosable: true,
				});
			}
		}
	};

	const emailIsValid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	return (
		<PrimaryLayout
			heading="Renseigner votre email"
			text={
				(userType == "agent" &&
					"Aidez des milliers de locataires à trouver leur bonheur sur Qeeps !") ||
				"Rejoignez des milliers de locataires qui ont trouvés leur bonheur sur Qeeps !"
			}
			buttonText="Continuer"
			confirmButton={handleSubmit}
			isConfirmButtonDisabled={emailIsValid}
		>
			<FormControl
				display="flex column"
				justifyContent="center"
				alignItems="center"
				isInvalid={emailIsValid}
				padding="32px"
				borderRadius="14px"
				bg="whiteAlpha.500"
				border="1px solid"
				borderColor="blackAlpha.200"
			>
				<FormLabel textAlign="center">Votre e-mail</FormLabel>
				<InputGroup borderRadius="14px" bg="white">
					<InputLeftAddon
						borderRadius="14px 0 0 14px"
						color="gray.400"
						gap="8px"
						bg="inherit"
					>
						<Icon as={At} transform="rotate(90deg)" />
					</InputLeftAddon>
					<Input
						borderRadius="14px"
						id="email"
						type="email"
						placeholder="maildecontact@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</InputGroup>
			</FormControl>
		</PrimaryLayout>
	);
};

export default Email;

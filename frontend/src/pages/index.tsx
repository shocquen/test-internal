import { Button, Icon, Text, VStack } from "@chakra-ui/react";
import { Buildings, User } from "@phosphor-icons/react";
import { PrimaryLayout } from "../components/layouts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [whichButtonSelected, setButtonSelected] = useState("candidate");

	const enableConfirmButton = function (
		event: React.MouseEvent<HTMLButtonElement>
	) {
		event.preventDefault();
		setIsButtonDisabled(false);
		setButtonSelected(event.currentTarget.name);
	};
	const navigate = useNavigate();

	const handleSubmit = () =>
		navigate("/confirmation", {
			state: { selected: whichButtonSelected },
		});
	return (
		<PrimaryLayout
			heading="Qui êtes-vous ?"
			text="Sélectionnez si vous êtes un agent ou bien si vous êtes un candidat."
			buttonText="Connexion rapide"
			isConfirmButtonDisabled={isButtonDisabled}
			confirmButton={handleSubmit}
		>
			<VStack width="full" gap="8px">
				<Button
					name="agent"
					onClick={enableConfirmButton}
					variant="brandPrimary"
				>
					<Icon
						bg="gray.100"
						as={Buildings}
						boxSize="56px"
						p="14px"
						borderRadius="full"
					/>
					<Text>Je suis un agent</Text>
				</Button>

				<Button
					name="candidate"
					onClick={enableConfirmButton}
					variant="brandPrimary"
				>
					<Icon
						bg="gray.100"
						as={User}
						boxSize="56px"
						p="14px"
						borderRadius="full"
					/>
					<Text>Je suis un candidat</Text>
				</Button>
			</VStack>
		</PrimaryLayout>
	);
}

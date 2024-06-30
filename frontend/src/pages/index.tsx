import { Button, Icon, Text, VStack } from "@chakra-ui/react";
import { Buildings, User } from "@phosphor-icons/react";
import { PrimaryLayout } from "../components/layouts";
import { useState } from "react";

export default function Index() {
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [whichButtonSelected, setButtonSelected] = useState("candidate");

	const enableConfirmButton = function (
		event: React.MouseEvent<HTMLButtonElement>
	) {
		setIsButtonDisabled(false);
		setButtonSelected(event.currentTarget.name);
	};

	return (
		<PrimaryLayout
			heading="Qui êtes-vous ?"
			text="Sélectionnez si vous êtes un agent ou bien si vous êtes un candidat."
			buttonText="Connexion rapide"
			isConfirmButtonDisabled={isButtonDisabled}
			formData={{ selected: whichButtonSelected }}
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

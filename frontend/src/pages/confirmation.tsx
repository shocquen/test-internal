import { Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { PrimaryLayout } from "../components/layouts";

interface state {
	selected: string;
}
export default function Confirmation() {
	const location = useLocation();
	return (
		<PrimaryLayout
			heading="Qui êtes-vous ?"
			text="Sélectionnez si vous êtes un agent ou bien si vous êtes un candidat."
			buttonText="Connexion rapide"
			isConfirmButtonDisabled={false}
		>
			<VStack width="full" gap="8px">
				<Text>{(location.state as state)?.selected}</Text>
			</VStack>
		</PrimaryLayout>
	);
}

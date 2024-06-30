import { Button, Icon, Text, VStack } from "@chakra-ui/react";
import { Buildings, User } from "@phosphor-icons/react";
import { PrimaryLayout } from "../components/layouts";

export default function Index() {
	return (
		<PrimaryLayout
			heading="Qui êtes-vous ?"
			text="Sélectionnez si vous êtes un agent ou bien si vous êtes un candidat."
			buttonText="Connexion rapide"
		>
			<VStack width="full" gap="8px">
				<Button variant="brandPrimary">
					<Icon
						bg="gray.100"
						as={Buildings}
						boxSize="56px"
						p="14px"
						borderRadius="full"
					/>
					<Text>Je suis un agent</Text>
				</Button>

				<Button variant="brandPrimary">
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

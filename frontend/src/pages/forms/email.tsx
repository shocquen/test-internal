import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import PrimaryLayout from "../../components/layouts";
import { Location, useLocation } from "react-router-dom";

interface State {
	selected: string;
}
const Email: React.FC = () => {
	const [email, setEmail] = useState("");

	const location: Location = useLocation();
	const state = location.state as State;

	// const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
	};

	const emailIsValid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	return (
		<PrimaryLayout
			heading="Renseigner votre email"
			text={
				(state.selected == "agent" &&
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
			>
				<FormLabel textAlign="center">Votre e-mail</FormLabel>
				<Input
					placeholder=" @  |  maildecontact@example.com"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>
		</PrimaryLayout>
	);
};

export default Email;

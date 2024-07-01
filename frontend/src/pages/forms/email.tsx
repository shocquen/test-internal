import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import PrimaryLayout from "../../components/layouts";
import { Location, useLocation, useNavigate } from "react-router-dom";

interface State {
	selected: string | null;
}

const Email: React.FC = () => {
	const [email, setEmail] = useState("");

	const navigate = useNavigate();
	const location: Location = useLocation();
	const state = location.state as State;

	useEffect(() => {
		const state: State = location.state as State;
		if (state?.selected == null) {
			console.log("Redirecting due to invalid state...");
			navigate("/");
		}
	}, [location.state, navigate]);
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
				(state?.selected == "agent" &&
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

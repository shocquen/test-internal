import { Spacer, VStack, Heading, Button } from "@chakra-ui/react";
import { Location, useLocation, useNavigate } from "react-router-dom";
import BrandTitle from "../components/brandTitle";
import { useEffect } from "react";

interface State {
	selected: string | null;
}

const Confirmation: React.FC = () => {
	const location: Location = useLocation();
	const navigate = useNavigate();
	const state = location.state as State;

	useEffect(() => {
		const state: State = location.state as State;
		if (state?.selected == null) {
			console.log("Redirecting due to invalid state...");
			navigate("/");
		}
	}, [location.state, navigate]);

	const confirmButton = () =>
		navigate("/email", { state: location.state as State });

	return (
		<VStack
			bgImage={"../../public/back2.png"}
			bgPosition="top"
			bgRepeat="no-repeat"
			bgSize="contain"
			height="100svh"
			p="16px"
			pt="500px"
		>
			<BrandTitle p="8px" />
			<Heading textAlign="center" fontSize="36px" fontWeight={700} p="0 54px">
				{(state?.selected == "agent" && "Simplifiez votre gestion locative") ||
					"Trouvez votre chez-vous"}
			</Heading>
			<Spacer />
			<Button id="confirmButton" variant="brandAction" onClick={confirmButton}>
				Connexion rapide
			</Button>
		</VStack>
	);
};

export default Confirmation;

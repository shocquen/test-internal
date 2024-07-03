import {
	Button,
	Card,
	HStack,
	Icon,
	PinInput,
	PinInputField,
	Text,
	VStack,
	useToast,
} from "@chakra-ui/react";
import { Envelope } from "@phosphor-icons/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryLayout from "../../components/layouts";
import {
	useGenerateUserOTPMutation,
	useVerifyUserOTPQuery,
} from "../../stores/api/users";

const Otp: React.FC = () => {
	const userId = localStorage.getItem("userId");
	const toast = useToast();
	const navigate = useNavigate();
	const [generateUserOTP] = useGenerateUserOTPMutation();

	const [otpInput, setOtpInput] = useState("");

	useEffect(() => {
		if (!userId) {
			console.log("Redirecting due to missing userId in localStorage");
			navigate("/");
		}
	}, [userId, navigate]);

	const generateOTP = useCallback(async () => {
		const otp = await generateUserOTP(userId ?? "");
		if (!otp.data?.otp) throw "No otp found";
		console.log("new OTP generated", otp.data.otp);
		toast({
			title: "OTP (Never in prod)",
			status: "info",
			duration: null,
			isClosable: true,
			description: otp.data.otp,
		});
	}, [generateUserOTP, userId, toast]);

	const handleRedoOTP = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await generateOTP();
		} catch (error) {
			console.log("Failed to generate an OTP");
		}
	};

	const renderRef = useRef<boolean>(false);
	useEffect(() => {
		if (!renderRef.current) {
			void generateOTP();
			renderRef.current = true;
		}
	}, [generateOTP]);

	const HandleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!isSuccess) return;

		localStorage.setItem("token", data.token);
		navigate("/signup");
	};

	const { data, isSuccess } = useVerifyUserOTPQuery(
		{
			id: userId ?? "",
			otp: otpInput,
		},
		{
			skip: otpInput.length < 5,
		}
	);

	return (
		<PrimaryLayout
			heading="Un petit coup d'oeil à cos mails"
			text="Vous venez de recevoir un code d'accès de notre part !"
			buttonText="Continuer"
			confirmButton={HandleSubmit}
			isConfirmButtonDisabled={!isSuccess}
		>
			<Card p="32px 64px">
				<VStack gap="16px" justifyContent="center" alignItems="center">
					<Text textAlign="center" fontWeight={600}>
						Code de sécurité
					</Text>
					<HStack width="full" justifyContent="center">
						<PinInput onChange={setOtpInput} otp>
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
						</PinInput>
					</HStack>
					<Text fontSize="medium" textAlign="center" color="gray">
						Merci d’entrer le code de sécurité que vous avec reçu par e-mail.
					</Text>
					<Button
						variant="outline"
						onClick={handleRedoOTP}
						rightIcon={<Icon as={Envelope} />}
						w="full"
					>
						Je n'ai rien reçu
					</Button>
				</VStack>
			</Card>
		</PrimaryLayout>
	);
};

export default Otp;

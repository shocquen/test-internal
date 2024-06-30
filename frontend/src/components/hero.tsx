import { Heading, Text, Box } from "@chakra-ui/react";

interface HeroProps {
	heading: string;
	text: string;
}

export default function Hero({ heading, text }: HeroProps) {
	return (
		<Box width="full" mb="16px">
			<Heading size="md" mb="8px">
				{heading}
			</Heading>
			<Text fontSize="xs" color="gray">
				{text}
			</Text>
		</Box>
	);
}

import { Heading } from "@chakra-ui/react";

const TITLE = "Qeeps";

export default function BrandTitle({ p }: { p: string }) {
	return (
		<Heading as="h1" p={p}>
			{TITLE}
		</Heading>
	);
}

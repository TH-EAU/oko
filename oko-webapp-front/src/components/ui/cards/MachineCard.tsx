import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const MachineCard: React.FC<{
  description: string;
  footer: string;
}> = ({ description, footer }) => {
  return (
    <Stack
      border="1px solid #FFF1"
      px={5}
      py={3}
      boxShadow="oko"
      rounded="lg"
      gap={0}
      h="full"
    >
      <Stack>
        <HStack gap={4} alignItems="start">
          <Box py={3} fontWeight="bold" fontSize="xx-small">
            <Box w={2} h={2} bg="#0ea5e9" boxSizing="initial" rounded="full" />
          </Box>
          <Stack gap={0}>
            <Heading
              p={0}
              m={0}
              as="h4"
              fontSize="sm"
              color="greyScale.800"
              fontWeight="medium"
            >
              {description}
            </Heading>
            <Text color="#A1A1AA" fontSize="x-small">
              {footer}
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default MachineCard;

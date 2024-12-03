import {
  Button,
  Heading,
  HStack,
  Icon,
  Separator,
  Stack,
} from "@chakra-ui/react";
import MachineCard from "@/components/ui/cards/MachineCard";

import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { GoPlus } from "react-icons/go";
import { PiFolderSimplePlusFill, PiFolderSimpleFill } from "react-icons/pi";
import CreateMachine from "../modals/CreateMachine.modal";

const MachineBar: React.FC = () => {
  return (
    <Stack
      gap={0}
      minW={80}
      h="full"
      borderRight="1px #FFF2 solid"
      pr={1}
      mx={1}
    >
      <HStack justify="space-between">
        <Heading px={5} py={5} fontWeight="light">
          Machines
        </Heading>
        <HStack>
          <Button size="sm" variant="ghost" shadow="oko">
            <Icon>
              <PiFolderSimplePlusFill />
            </Icon>
          </Button>
          <CreateMachine />
        </HStack>
      </HStack>
      <AccordionRoot collapsible multiple variant="plain">
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionItemTrigger
              fontSize="small"
              fontWeight="light"
              px={5}
              py={2}
              indicatorPlacement="start"
            >
              <Icon>
                <PiFolderSimpleFill />
              </Icon>{" "}
              {item.title}
            </AccordionItemTrigger>
            <AccordionItemContent px={10} pb={5}>
              <Stack>
                <MachineCard
                  description="Ubuntu-Server-2024LTS"
                  footer="Up since 2024/02/11 13:02"
                />
                <MachineCard
                  description="Ubuntu-Server-2024LTS"
                  footer="Up since 2024/02/11 13:02"
                />
              </Stack>
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Stack>
  );
};

const items = [
  {
    value: "a",
    title: "S3 IL Examen C# 2024",
  },
  {
    value: "b",
    title: "Second Item",
  },
  {
    value: "c",
    title: "Third Item",
  },
];

export default MachineBar;

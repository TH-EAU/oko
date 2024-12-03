"use client";

import MachineBar from "@/components/layout/MachineBar";
import Navbar from "@/components/layout/Navbar";
import { Container, Heading, HStack, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(null);
  // console.log(user);
  return (
    <>
      <HStack alignItems="start">
        <Navbar />
        <MachineBar />
        <Container maxW="4xl">
          {!active && (
            <Stack>
              <Heading>Retrouvez toutes vos Vm ici</Heading>
            </Stack>
          )}
        </Container>
      </HStack>
    </>
  );
}

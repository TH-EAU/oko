import { Button, Center, IconButton, Separator, Stack } from "@chakra-ui/react";
import { RiBox3Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import LogoMin from "../ui/icons/LogoMin";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <Stack minW={14} maxW={14} borderRight="1px #FFF2 solid" h="full">
      <Center my={4} pt={2}>
        <LogoMin currentColor="#FFF" size={20} />
      </Center>
      <Separator />
      <Center>
        <Link href="/">
          <IconButton variant="ghost" boxShadow="oko">
            <RiBox3Line />
          </IconButton>
        </Link>
      </Center>
      <Center>
        <Link href="/settings">
          <IconButton variant="ghost" boxShadow="oko">
            <LuSettings2 />
          </IconButton>
        </Link>
      </Center>
    </Stack>
  );
};

export default Navbar;

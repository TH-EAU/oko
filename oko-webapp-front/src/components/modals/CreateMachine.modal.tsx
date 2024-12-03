import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogBackdrop,
} from "@/components/ui/dialog";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import {
  Button,
  createListCollection,
  Fieldset,
  HStack,
  Icon,
  Input,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { FaUbuntu } from "react-icons/fa";
import { SiKalilinux, SiDebian, SiWindows } from "react-icons/si";

const CreateMachine = () => {
  return (
    <DialogRoot size="md" motionPreset="slide-in-bottom" placement="center">
      <DialogBackdrop />
      <DialogTrigger as="span">
        <Button variant="ghost" size="sm" shadow="oko">
          +
        </Button>
      </DialogTrigger>
      <DialogContent p={10} bgColor="#111C" backdropFilter="blur(5px)">
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>Créer une machine virtuelle</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Fieldset.Root size="lg" maxW="md">
            <Fieldset.HelperText>
              Renseigner les informations ci-dessous
            </Fieldset.HelperText>
            <Fieldset.Content>
              <Field label="Name">
                <Input p={2} name="name" />
              </Field>
              <SelectRoot collection={templates} size="sm" variant="outline">
                <SelectLabel>Template</SelectLabel>
                <SelectTrigger>
                  <SelectValueText p={2} />
                </SelectTrigger>
                <SelectContent p={2} zIndex={10000}>
                  {templates.items.map((template) => (
                    <SelectItem p={1} item={template} key={template.value}>
                      <HStack>
                        <Icon>{template.icon}</Icon> {template.label}
                      </HStack>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Fieldset.Content>
          </Fieldset.Root>
        </DialogBody>
        <DialogFooter />
      </DialogContent>
    </DialogRoot>
  );
};

export default CreateMachine;

const templates = createListCollection({
  items: [
    { label: "Ubuntu", value: "ubuntu", icon: <FaUbuntu /> },
    { label: "Kali", value: "kali", icon: <SiKalilinux /> },
    { label: "Debian", value: "debian", icon: <SiDebian /> },
    { label: "Widows", value: "windows", icon: <SiWindows /> },
  ],
});

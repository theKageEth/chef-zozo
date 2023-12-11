import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const ModalHome = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        className="bg-gradient-to-tr from-pink-500 to-blue-400 text-white shadow-lg w-[300px] h-[100px]"
        onPress={onOpen}
      >
        Check What is Cooking!
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/pixel/cooking.gif"}
                    priority={true}
                    width={250}
                    height={300}
                  />

                  <Link href="/main">
                    <Button color="success" variant="ghost">
                      Desert
                    </Button>
                  </Link>
                </div>
              </ModalBody>

              <ModalBody className="text-center">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/pixel/desert.gif"}
                    priority={true}
                    width={200}
                    height={200}
                  />

                  <Link href="/desert">
                    <Button color="success" variant="ghost">
                      Desert
                    </Button>
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-end">
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalHome;

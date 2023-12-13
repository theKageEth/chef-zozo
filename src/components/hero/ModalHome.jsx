"use client";
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
        className="bg-gradient-to-tr from-orange-300 to-purple-300 dark:from-purple-800 dark:to-blue-950  text-black dark:text-white hover:shadow-lg w-[300px] h-[100px]  font-semibold"
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
                      Main Dishes
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
                      Deserts
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

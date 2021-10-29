import React, { useRef, useCallback, useEffect, Fragment } from "react";
import { useSpring, animated } from "react-spring";
import { GrClose } from "react-icons/gr";
import { ModalView, ModalContent, ModalCloseButton } from "../assets";

const Modal = (props: { open: boolean; setClose: Function; children: any }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 25,
    },
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(.8)",
    transition: "all 200ms",
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.setClose();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        props.setClose();
      }
    },
    [props.setClose, open]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {open ? (
        <>
          <ModalView ref={modalRef} onClick={(e) => closeModal(e)}>
            <animated.div style={animation}>
              <ModalContent>
                <ModalCloseButton onClick={() => props.setClose()}>
                  <GrClose />
                </ModalCloseButton>
                {props.children}
              </ModalContent>
            </animated.div>
          </ModalView>
        </>
      ) : null}
    </>
  );
};

export default Modal;

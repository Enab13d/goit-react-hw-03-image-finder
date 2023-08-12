import { Overlay, ModalWindow } from "./Modal.styled";

export const Modal = ({ url }) => {
  return (
    <Overlay>
      <ModalWindow>
        <img src={url} alt="" />
      </ModalWindow>
    </Overlay>
  );
};

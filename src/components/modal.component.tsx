import { ReactElement } from "react";
import Modal from "react-bootstrap/Modal";

interface RsModalProps {
    closeButton?: boolean;
    isShown: boolean;
    onHide: () => void;
    title: string;
    children: ReactElement | ReactElement[];
}

export function RsModal(props: RsModalProps) {
    return (
        <Modal show={props.isShown} onHide={props.onHide}>
            <Modal.Header closeButton={props.closeButton ?? true}>{props.title}</Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
        </Modal>
    );
}

import "./DialogCode.scss";
import { Icon } from "@gui/fluent-ui-allure";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DialogModal } from "../common/dialog/DialogModal";

interface IDialogCode {
  nameButtonModal: string;
  titleDialogModal: string;
  contentModal: { name: string }[];
  cancelModal?: string;
  submitModal: string;
  markdownContent: string;
}

const DialogCode: React.FC<IDialogCode> = (props) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClickActive = () => {
    setActive(!active);
  };

  return (
    <div className="dialog">
      <div className="dialog-btn">
        <DialogModal
          content={props.contentModal}
          nameButton={props.nameButtonModal}
          submit={props.submitModal}
          titleDialog={props.titleDialogModal}
          cancel={props.cancelModal}
        />
      </div>
      {active && (
        <div className="dialog-code">
          <SyntaxHighlighter language="javascript" style={a11yLight}>
            {props.markdownContent}
          </SyntaxHighlighter>
        </div>
      )}

      <div className="dialog-icon">
        {active ? (
          <Icon
            className="open"
            iconName="fas-sort-down"
            onClick={handleClickActive}
          />
        ) : (
          <Icon
            className="close"
            iconName="fas-code"
            onClick={handleClickActive}
          />
        )}
      </div>
    </div>
  );
};

export default DialogCode;

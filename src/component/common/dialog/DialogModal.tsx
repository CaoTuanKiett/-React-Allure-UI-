import * as React from "react";

import {
  PrimaryButton,
  DefaultButton,
  Dialog,
  DialogFooter,
} from "@gui/fluent-ui-allure";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";

interface IDialogModal {
  nameButton: string;
  titleDialog: string;
  content: { name: string }[];
  cancel?: string;
  submit: string;
}

export const DialogModal: React.FC<IDialogModal> = (props) => {
  const [isDialogClosed, setDialogClosed] = React.useState(true);

  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  let themeClass: string = "";
  switch (currentTheme) {
    case "Dark":
      themeClass = "dark-mode";
      break;
    case "Ochre":
      themeClass = "ochre-mode";
      break;
    case "Violet":
      themeClass = "violet-mode";
      break;
    default:
      themeClass = "light-mode";
  }

  return (
    <div className={`dialogModal`}>
      <DefaultButton onClick={() => setDialogClosed(false)}>
        {props.nameButton}
      </DefaultButton>
      <Dialog
        hidden={isDialogClosed}
        title={props.titleDialog}
        maxWidth="480px"
        minWidth="480px"
      >
        <div style={{ maxHeight: 100 }}>
          {props.content.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
        <DialogFooter>
          {props.cancel && (
            <DefaultButton onClick={() => setDialogClosed(true)}>
              {props.cancel}
            </DefaultButton>
          )}
          {props.submit && (
            <PrimaryButton
              className={`dialog-footer-btn ${themeClass}`}
              onClick={() => setDialogClosed(true)}
            >
              {props.submit}
            </PrimaryButton>
          )}
        </DialogFooter>
      </Dialog>
    </div>
  );
};

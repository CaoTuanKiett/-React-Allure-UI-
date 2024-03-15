import { useTranslation } from "react-i18next";

import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import "./Dialog.scss";
import DialogCode from "../../component/dialogCode/DialogCode";

const Dialog = () => {
  const { t } = useTranslation();

  const emailConfirmContent = `import * as React from "react";
    import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";

    export const SampleBasic = () => {
        const [isDialogClosed, setDialogClosed] = React.useState(true);
        return (
            <div>
                <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
                <Dialog hidden={isDialogClosed} title="Email Confirm" maxWidth="480px" minWidth="480px">
                    <div style={{ maxHeight: 100 }}>
                        <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                        <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                        <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                        <p>Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.</p>
                    </div>
                    <DialogFooter>
                        <DefaultButton onClick={() => setDialogClosed(true)}>Cancel</DefaultButton>
                        <PrimaryButton onClick={() => setDialogClosed(true)}>Submit</PrimaryButton>
                    </DialogFooter>
                </Dialog>
            </div>
        );
    };`;

  const confirmContent = `import * as React from "react";
  import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure";
  
  export const SampleNoDismiss = () => {
      const [isDialogClosed, setDialogClosed] = React.useState(true);
      return (
          <div>
              <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
              <Dialog hidden={isDialogClosed} title="Confirm" maxWidth="480px">
                  <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, excepturi, veniam, odit quos eveniet laudantium ea aut amet in est possimus minima rerum explicabo ducimus
                      quisquam optio! Alias, totam?
                  </div>
                  <DialogFooter>
                      <PrimaryButton onClick={() => setDialogClosed(true)} text="OK" />
                  </DialogFooter>
              </Dialog>
          </div>
      );
  };`;

  const emailConfirm = [
    {
      name: "Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.",
    },
    {
      name: "Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.",
    },
    {
      name: "Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.",
    },
    {
      name: "Do you want to send this message without a subject? If you want to send, please click 'Send', or you can cancel by pressing 'Don't send' or 'Close'.",
    },
  ];

  const confirm = [
    {
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, excepturi, veniam, odit quos eveniet laudantium ea aut amet in est possimus minima rerum explicabo ducimus quisquam optio! Alias, totam?",
    },
  ];

  return (
    <div className="dialog">
      <DefaultLayout>
        <div className="dialog-container">
          <div className="dialog-title">
            <h2>{t("dialog.title")}</h2>
            <p>{t("dialog.intro")}</p>
          </div>

          <div className="whenUse">
            <h3>{t("dialog.use")}</h3>
            <p>{t("dialog.use-1")}</p>
            <p>{t("dialog.use-2")}</p>
          </div>

          <div className="basic">
            <h3>{t("dialog.basic-usage")}</h3>
            <p className="basic-title">Layout:</p>
            <p>{t("dialog.layout")}</p>
            <p className="basic-title">Header:</p>
            <p>{t("dialog.header")}</p>
            <p className="basic-title">Button:</p>
            <p>{t("dialog.button")}</p>
          </div>

          <div>
            <DialogCode
              contentModal={emailConfirm}
              markdownContent={emailConfirmContent}
              nameButtonModal={t("dialog.open-dialog")}
              submitModal={t("dialog.submit")}
              titleDialogModal={t("dialog.email-confirm")}
              cancelModal={t("dialog.cancel")}
            />
          </div>

          <div className="confirm">
            <h3>{t("dialog.confirm")}</h3>
            <DialogCode
              contentModal={confirm}
              markdownContent={confirmContent}
              nameButtonModal={t("dialog.open-dialog")}
              submitModal={t("dialog.ok")}
              titleDialogModal={t("dialog.email-confirm")}
            />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Dialog;

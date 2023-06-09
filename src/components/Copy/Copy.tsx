import React, { memo, useMemo } from "react";

import { CopyService } from "$/services/CopyService";
import CopyAction from "$/components/Copy/CopyAction";
import { snackbarNotify } from "$/entity/notify";

interface IProps {
  mode?: "primary" | "secondary" | "tertiary" | "outline" | "link";
  copyText?: string;
  isButton?: boolean;
  className?: string;
  textToClickBoard: string;
  onAfterClickBoard?: () => void;
}

function Copy({
  mode,
  copyText,
  isButton,
  className,
  textToClickBoard,
  onAfterClickBoard,
}: IProps) {
  const copyService = useMemo(() => new CopyService(), []);

  function copyToClickBoard(text: string) {
    copyService.copyToClickBoard$
      .run(text)
      .then(() => {
        snackbarNotify.notify({ type: "success", message: "Скопировано" });
        onAfterClickBoard?.();
      })
      .catch(() =>
        snackbarNotify.notify({
          type: "error",
          message: "Не удалось скопировать",
        })
      );
  }

  const onClick = () => copyToClickBoard(textToClickBoard);

  return (
    <>
      <CopyAction
        copyText={copyText}
        onClick={onClick}
        className={className}
        isButton={isButton}
        mode={mode}
      />
    </>
  );
}

export default memo(Copy);

import React from "react";
import { Banner } from "@vkontakte/vkui";
import { Icon16ErrorCircleFill } from "@vkontakte/icons";

import classes from "./ErrorBlock.module.css";

function ErrorBlock() {
  return (
    <Banner
      className={classes.errorBlock}
      before={<Icon16ErrorCircleFill width={28} height={28} />}
      header="Данное сообщение пришлось скрыть"
      subheader="Cообщение содержит грубое или оскорбляющее содержание."
    />
  );
}

export default ErrorBlock;

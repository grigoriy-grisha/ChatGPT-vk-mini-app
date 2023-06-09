import React, { useEffect } from "react";
import { Button, Placeholder, Spinner } from "@vkontakte/vkui";
import {
  Icon24ArrowRightSquareOutline,
  Icon28BracketsSlashSquareOutline,
} from "@vkontakte/icons";

import { CardBlock } from "$/components/CardBlock";
import { githubController } from "$/entity/Github";

import classes from "./Repository.module.css";

function Repository() {
  useEffect(() => githubController.getRepository(), []);

  const loading = githubController.getRepository$.loading.get();
  const result = githubController.getRepository$.result.get();

  return (
    <CardBlock className={classes.container}>
      {loading ? (
        <Spinner size="large" />
      ) : (
        <Placeholder
          icon={<Icon28BracketsSlashSquareOutline width={56} height={56} />}
          header={result?.name}
          action={
            <Button
              mode="outline"
              after={<Icon24ArrowRightSquareOutline />}
              size="m"
              href={result?.html_url}
              target="_blank"
            >
              Перейти в репозиторий
            </Button>
          }
        >
          Присоединяйся к разработке приложения
        </Placeholder>
      )}
    </CardBlock>
  );
}

export default Repository;

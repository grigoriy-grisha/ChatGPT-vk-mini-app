import React from "react";

import { Button, Panel, Placeholder } from "@vkontakte/vkui";
import { Icon36GhostSimpleOutline } from "@vkontakte/icons";

interface IProps {
  id: string;
}
function ForbiddenPage({ id }: IProps) {
  return (
    <Panel
      id={id}
      style={{
        minHeight: "100vh",
        background: "var(--vkui--color_background)",
      }}
    >
      <div style={{ paddingTop: 150 }}>
        <Placeholder
          icon={<Icon36GhostSimpleOutline width={64} height={64} />}
          header="Доступ запрещен"
          action={
            <Button href="https://vk.me/public220371433" mode="outline">
              Перейти в сообщество
            </Button>
          }
        >
          За подробностями можно обратиться в личные сообщения сообщества
        </Placeholder>
      </div>
    </Panel>
  );
}

export default ForbiddenPage;

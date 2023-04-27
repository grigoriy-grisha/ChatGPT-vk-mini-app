import React, { useEffect } from "react";
import { SplitLayout, useConfigProvider, View } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import "@vkontakte/vkui/dist/vkui.css";
import "./index.css";

import { vkUserModel } from "./entity/user";
import { Home } from "./panels/Home";
import { Chapters } from "./panels/Chapters";
import { Chat } from "./panels/Chat";
import { OpenSource } from "./panels/OpenSource";
import { ChatSettings } from "./panels/ChatSettings";

import { OneDark } from "./OneDark";
import { OneLight } from "./OneLight";
import { Panels, RoutingPages, Views } from "./entity/routing";
import { useLocation, useRouter } from "@happysanta/router";

const App = () => {
  const location = useLocation();
  const router = useRouter();

  useEffect(() => {
    bridge.send("VKWebAppGetUserInfo").then((user) => vkUserModel.fill(user));
  }, []);

  useEffect(() => {
    router.pushPage(RoutingPages.home);
  }, []);

  const goBack = () => router.popPage();
  const goToChapters = () => router.pushPage(RoutingPages.chapters);
  const goToChat = () => router.pushPage(RoutingPages.chat);
  const goToOpenSource = () => router.pushPage(RoutingPages.openSource);
  const goToChatSettings = () => router.pushPage(RoutingPages.chatSettings);

  const { appearance } = useConfigProvider();

  return (
    <SplitLayout>
      {appearance === "dark" ? <OneDark /> : <OneLight />}
      <View
        id={Views.viewMain}
        activePanel={location.getViewActivePanel(Views.viewMain)!}
        onSwipeBack={goBack}
        history={
          location.hasOverlay() ? [] : location.getViewHistory(Views.viewMain)
        }
      >
        <Home
          id={Panels.home}
          goToChapters={goToChapters}
          goToChat={goToChat}
          goToOpenSource={goToOpenSource}
        />
        <Chapters id={Panels.chapters} goToChat={goToChat} goBack={goBack} />
        <Chat
          id={Panels.chat}
          goBack={goBack}
          goToChatSettings={goToChatSettings}
        />
        <OpenSource
          id={Panels.openSource}
          goBack={goBack}
          goToChapters={goToChapters}
        />
        <ChatSettings id={Panels.chatSettings} goBack={goBack} />
      </View>
    </SplitLayout>
  );
};
export default App;

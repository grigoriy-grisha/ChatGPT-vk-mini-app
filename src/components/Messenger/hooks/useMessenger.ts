import { useEffect } from "react";

import { ChatGpt } from "$/entity/GPT";
import { LessonItem } from "$/entity/lessons";

import { useMessengerScroll } from "./useMessengerScroll";
import { useRouter } from "@happysanta/router";
import { Panels, RoutingPages } from "$/entity/routing";

type HookMessengerParams = {
  lesson: LessonItem | null;
  chatGpt: ChatGpt;
};

export function useMessenger({ chatGpt, lesson }: HookMessengerParams) {
  const isTyping = chatGpt.sendCompletions$.loading.get();
  const router = useRouter();

  const { scrollRef, scrollToBottom, showScrollDown } =
    useMessengerScroll(isTyping);

  const onStartChat = () => {
    const initialRequest = lesson?.initialRequest;
    if (initialRequest) initialRequest.select();

    chatGpt.send(initialRequest?.text || "Привет, что ты можешь?");
  };

  const handlerSend = (message: string) => {
    if (!message) return;
    chatGpt.send(message);
    setTimeout(scrollToBottom, 50);
  };

  return {
    isTyping,
    scrollRef,
    showScrollDown,
    onStartChat,
    handlerSend,
    scrollToBottom,
  };
}

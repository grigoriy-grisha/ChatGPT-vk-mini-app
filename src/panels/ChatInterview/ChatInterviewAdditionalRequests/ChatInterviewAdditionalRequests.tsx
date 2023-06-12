import React, { useState } from "react";
import { Button, Div, IconButton, Separator } from "@vkontakte/vkui";

import { InterviewController } from "$/entity/interview/InterviewController";
import { chatGpt } from "$/entity/GPT";
import { Icon24Cancel, Icon24QuestionOutline } from "@vkontakte/icons";

import classes from "./ChatInterviewAdditionalRequests.module.css";

interface IProps {
  interviews: InterviewController;
  scrollToBottom: () => void;
}

function ChatInterviewAdditionalRequests({
  interviews,
  scrollToBottom,
}: IProps) {
  const [helpIsClosed, setHelpIsClosed] = useState(true);

  const currentInterview = interviews.getCurrentInterview();

  if (!currentInterview) return null;

  const isStarted = chatGpt.chatGptInterview.isStarted$.get();

  const currentQuestion = currentInterview.getCurrentQuestion();

  const isTyping = chatGpt.chatGptInterview.sendCompletions$.loading.get();
  const isQuestioned = currentQuestion.isQuestioned$.get();
  const nextQuestionIsDisabled = !isStarted
    ? isStarted
    : !isQuestioned ||
      isTyping ||
      chatGpt.chatGptInterview.timer.isStopped$.get();

  const isLastQuestion = currentInterview.isLastQuestion$.get();

  function getQuestionActionText() {
    if (currentInterview.isNextLastQuestion$.get()) return "Последний вопрос";
    if (isLastQuestion) return "Вопросов нет";
    if (isStarted) return "Следующий вопрос";

    return "Начать собеседование";
  }

  return (
    <>
      <Separator wide />
      <Div className={classes.additionalRequests}>
        <Button
          disabled={nextQuestionIsDisabled || isLastQuestion}
          mode={isLastQuestion ? "outline" : "primary"}
          onClick={async () => {
            if (isStarted) {
              interviews.getCurrentInterview().nextQuestion();
            }

            await chatGpt.chatGptInterview.sendQuestion(
              interviews.getCurrentInterview().getCurrentQuestion().question
            );

            scrollToBottom();
          }}
        >
          {getQuestionActionText()}
        </Button>
      </Div>
      <Separator wide />
      {helpIsClosed && (
        <Div>
          <div className={classes.helpWrapper}>
            <div className={classes.helpBlock}>
              <div
                style={{
                  paddingRight: 8,
                  color: "var(--vkui--color_background_accent_themed)",
                }}
              >
                <Icon24QuestionOutline width={28} height={28} />
              </div>
              Подыграйте Чат боту. Представьте, что вы проходите собеседование.
              <br />
              Отвечайте на вопросы Chat GPT.
            </div>
            <IconButton
              className={classes.cancelIcon}
              onClick={() => setHelpIsClosed(false)}
            >
              <Icon24Cancel />
            </IconButton>
          </div>
        </Div>
      )}
    </>
  );
}

export default ChatInterviewAdditionalRequests;

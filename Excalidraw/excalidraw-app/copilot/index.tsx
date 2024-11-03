import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { atom, useAtom } from "jotai";
import { useEffect, useState, useCallback } from "react";
import { ChatFeed, Message } from "react-chat-ui"; // source code: https://github.com/brandonmowat/react-chat-ui#readme
import { Dialog } from "../../packages/excalidraw/components/Dialog";
import { FilledButton } from "../../packages/excalidraw/components/FilledButton";
import {
  brainIcon,
  microphoneIcon,
  microphoneMutedIcon,
} from "../../packages/excalidraw/components/icons";
import Stack from "../../packages/excalidraw/components/Stack";
import { TextField } from "../../packages/excalidraw/components/TextField";
import { useUIAppState } from "../../packages/excalidraw/context/ui-appState";
import { KEYS } from "../../packages/excalidraw/keys";
import type { ExcalidrawImperativeAPI } from "../../packages/excalidraw/types";
import { ADD_VISUAL_PREDICTION } from "../clients/mutations";
import { GET_ALL_AGENTS } from "../clients/queries";
import { GRAPHQL_SUBSCRIPTION } from "../clients/subscriptions";
import {
  addElementsToBoard,
  convertObjectsToExcalidrawElements,
} from "./elementRenderer/jsonElementRenderer";
import { useTranscribe } from "./transcription/hooks/useTranscription";
import { EventTypes } from "./types/eventTypes";

/**
 * Atom to manage the state of the Copilot dialog.
 * @type {PrimitiveAtom<{ isOpen: boolean }>}
 */
export const copilotDialogState = atom({ isOpen: false });

// TODO: Replace with actual subscription ID. For now, we're using a random string, to avoid conflicts.
const SUBSCRIPTION_ID = Math.random().toString(36).substring(7);

/**
 * The Copilot component renders a dialog that allows users to prompt an AI to generate shapes on the whiteboard.
 *
 * @param {Object} props - The component props.
 * @param {ExcalidrawImperativeAPI} props.excalidrawAPI - The Excalidraw API instance.
 * @returns {JSX.Element} The rendered component.
 */
export function Copilot({
  excalidrawAPI,
}: {
  excalidrawAPI: ExcalidrawImperativeAPI;
}) {
  const [{ isOpen }, setShareDialogState] = useAtom(copilotDialogState);
  const { openDialog } = useUIAppState();

  // State
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [receivedErrorResponse, setReceivedErrorResponse] = useState(false);
  // Queries & mutations
  const [addPrediction] = useMutation(ADD_VISUAL_PREDICTION);
  const { data: agents, loading: agentsLoading } = useQuery(GET_ALL_AGENTS);
  const [drawingAgentId, setDrawingAgentId] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    new Message({
      id: 1,
      senderName: "AI",
      message: "Here, you can prompt the AI to generate shapes.",
    }),
  ]);

  // Hooks
  const transcribe = useTranscribe();

  // TODO: Replace this with actual code that is good.
  useEffect(() => {
    if (!agentsLoading && agents?.getAllAgents) {
      const drawingAgent = agents.getAllAgents.find(
        (agent: any) => agent.name === "Drawing Agent",
      );
      if (drawingAgent) {
        setDrawingAgentId(drawingAgent.id);
      }
    }
  }, [agents, agentsLoading]);

  /**
   * Updates the prompt with the transcript.
   * @param transcript {string} The transcript.
   * @returns {void}
   * @sideeffect Updates the prompt with the transcript.
   */
  useEffect(() => {
    if (transcribe.isTranscribing) {
      setUserMessage((prev) => [prev, transcribe.transcript].join(" "));
    }
  }, [transcribe.isTranscribing, transcribe.transcript, setUserMessage]);

  /**
   * Handles the confirmation of the user's message.
   */

  const addChatMessage = useCallback(
    (message: string, senderName: string) => {
      setChatMessages((existingMessges) => [
        ...existingMessges,
        new Message({ id: existingMessges.length + 1, senderName, message }),
      ]);
    },
    [setChatMessages],
  );

  const handleConfirm = () => {
    setReceivedErrorResponse(false);
    if (!userMessage || isLoading || !drawingAgentId) {
      return;
    }
    addChatMessage(userMessage, "You");

    transcribe.stopTranscribing();
    addPrediction({
      variables: {
        subscriptionId: SUBSCRIPTION_ID,
        agentId: drawingAgentId,
        variables: {
          userMessage,
        },
      },
    });

    setUserMessage("");

    setIsLoading(true);
  };

  // const handleGetSceneElements = () => {
  //   const sceneElements = excalidrawAPI.getSceneElements();
  //   // console.log("Scene Elements:", sceneElements);
  // };

  /**
   * Closes the Copilot dialog when the main Excalidraw dialog is opened.
   */
  useEffect(() => {
    if (openDialog) {
      setShareDialogState({ isOpen: false });
    }
  }, [openDialog, setShareDialogState]);

  /**
   * Subscribes to the GraphQL subscription for visual prediction updates.
   * When new data is received, it updates the whiteboard with the generated shapes.
   */
  useSubscription(GRAPHQL_SUBSCRIPTION, {
    variables: { subscriptionId: SUBSCRIPTION_ID },
    onData: ({ data }) => {
      const eventType = data.data.predictionAdded.type.toString();
      switch (eventType) {
        case EventTypes.DATA:
          break;
        case EventTypes.RECIEVED:
          addChatMessage("Server received request", "AI");
          break;
        case EventTypes.ERROR:
          setIsLoading(false);
          addChatMessage("Error occurred when processing request", "AI");
          setReceivedErrorResponse(true);
          break;
        case EventTypes.SUCCESS:
          setIsLoading(false);
          setShareDialogState({ isOpen: false });
          addChatMessage("Server returned result", "AI");

          const result = JSON.parse(data.data.predictionAdded.result);
          const boardElements = convertObjectsToExcalidrawElements(
            result,
            excalidrawAPI,
          );
          addElementsToBoard(excalidrawAPI, boardElements);
          break;
        default:
          break;
      }
    },
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog
      onCloseRequest={() => setShareDialogState({ isOpen: false })}
      title={<div>Shape Assistant</div>}
      className="MagicSettings"
      autofocus={false}
    >
      <div style={{ maxHeight: "500px" }}>
        <ChatFeed messages={chatMessages} isTyping={isLoading} showSenderName />
        <TextField
          value={userMessage}
          placeholder="Prompt the AI to generate shapes"
          label="AI Input"
          onChange={setUserMessage}
          selectOnRender
          onKeyDown={(event) => event.key === KEYS.ENTER && handleConfirm()}
        />
        <Stack.Row gap={2}>
          <FilledButton
            className="MagicSettings__confirm"
            size="large"
            label={`${transcribe.isTranscribing ? "Stop" : "Start"} Recording`}
            variant="icon"
            icon={
              transcribe.isTranscribing ? microphoneMutedIcon : microphoneIcon
            }
            color="muted"
            onClick={() => {
              if (transcribe.isTranscribing) {
                transcribe.stopTranscribing();
              } else {
                transcribe.startTranscribing();
              }
            }}
          />
          {receivedErrorResponse ? (
            <div style={{ color: "red" }}>
              Error occurred when processing the prompt
            </div>
          ) : (
            <></>
          )}
          <FilledButton
            className="MagicSettings__confirm"
            size="large"
            label={isLoading ? "Loading..." : "Generate"}
            icon={brainIcon}
            onClick={handleConfirm}
          />
          {/* <FilledButton
          className="MagicSettings__confirm"
          size="large"
          label="Log Elements"
          onClick={handleGetSceneElements}
        /> */}
        </Stack.Row>
      </div>
    </Dialog>
  );
}

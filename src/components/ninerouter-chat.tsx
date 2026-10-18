"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatModel = {
  id: string;
};

const defaultUrl =
  process.env.NEXT_PUBLIC_NINEROUTER_URL || "http://localhost:20128";

async function getResponseError(response: Response) {
  const body = await response.text();

  if (body) {
    try {
      const payload: unknown = JSON.parse(body);
      if (
        typeof payload === "object" &&
        payload !== null &&
        "error" in payload
      ) {
        const error = payload.error;
        if (
          typeof error === "object" &&
          error !== null &&
          "message" in error &&
          typeof error.message === "string"
        ) {
          return error.message;
        }
        if (typeof error === "string") {
          return error;
        }
      }
    } catch {
      return body;
    }

    return body;
  }

  return `Request failed with status ${response.status}.`;
}

function readModels(payload: unknown): ChatModel[] {
  if (
    typeof payload !== "object" ||
    payload === null ||
    !("data" in payload) ||
    !Array.isArray(payload.data)
  ) {
    throw new Error("The models response did not contain a data array.");
  }

  const models = payload.data.filter(
    (model): model is ChatModel =>
      typeof model === "object" &&
      model !== null &&
      "id" in model &&
      typeof model.id === "string"
  );

  if (models.length === 0) {
    throw new Error("No chat models were returned by 9Router.");
  }

  return models;
}

function readAssistantMessage(payload: unknown): string {
  if (
    typeof payload !== "object" ||
    payload === null ||
    !("choices" in payload) ||
    !Array.isArray(payload.choices)
  ) {
    throw new Error("The chat response did not contain any choices.");
  }

  const content = payload.choices[0]?.message;
  if (
    typeof content !== "object" ||
    content === null ||
    !("content" in content) ||
    typeof content.content !== "string"
  ) {
    throw new Error("The chat response did not contain a text reply.");
  }

  return content.content;
}

export function NinerouterChat() {
  const [endpoint, setEndpoint] = useState(defaultUrl);
  const [apiKey, setApiKey] = useState("");
  const [models, setModels] = useState<ChatModel[]>([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const authorizationHeaders = (): Record<string, string> => {
    const headers: Record<string, string> = {};
    if (apiKey) {
      headers.Authorization = `Bearer ${apiKey}`;
    }
    return headers;
  };

  const connect = async () => {
    let baseUrl: string;
    try {
      const parsedUrl = new URL(endpoint);
      if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
        throw new Error("The URL must use HTTP or HTTPS.");
      }
      baseUrl = parsedUrl.toString().replace(/\/+$/, "");
    } catch {
      setError("Enter a valid 9Router base URL, such as http://localhost:20128.");
      return;
    }

    setEndpoint(baseUrl);
    setModels([]);
    setSelectedModel("");
    setError("");
    setIsConnecting(true);

    try {
      const response = await fetch(`${baseUrl}/v1/models`, {
        headers: authorizationHeaders(),
      });
      if (!response.ok) {
        throw new Error(await getResponseError(response));
      }

      const availableModels = readModels(await response.json());
      setModels(availableModels);
      setSelectedModel(availableModels[0].id);
    } catch (connectionError) {
      setError(
        connectionError instanceof Error
          ? connectionError.message
          : "Could not connect to 9Router."
      );
    } finally {
      setIsConnecting(false);
    }
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = draft.trim();
    if (!content || !selectedModel || isSending) {
      return;
    }

    setError("");
    setIsSending(true);
    try {
      const response = await fetch(`${endpoint}/v1/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...authorizationHeaders(),
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [...messages, { role: "user", content }],
          stream: false,
        }),
      });
      if (!response.ok) {
        throw new Error(await getResponseError(response));
      }

      const reply = readAssistantMessage(await response.json());
      setMessages([
        ...messages,
        { role: "user", content },
        { role: "assistant", content: reply },
      ]);
      setDraft("");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Could not get a response from 9Router."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="chat" className="bg-slate-100 pt-24 pb-32 dark:bg-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
              Chat with AI
            </h2>
            <p className="text-base font-medium text-secondary">
              Connect to your 9Router instance and chat with any available model.
            </p>
          </div>

          <div className="mb-6 grid gap-4 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
            <div>
              <label
                htmlFor="ninerouter-url"
                className="mb-2 block text-sm font-semibold text-dark dark:text-white"
              >
                9Router base URL
              </label>
              <input
                id="ninerouter-url"
                type="url"
                value={endpoint}
                onChange={(event) => {
                  setEndpoint(event.target.value);
                  setModels([]);
                  setSelectedModel("");
                  setError("");
                }}
                placeholder="http://localhost:20128"
                className="w-full rounded-md bg-slate-100 p-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                autoComplete="url"
              />
            </div>

            <div>
              <label
                htmlFor="ninerouter-key"
                className="mb-2 block text-sm font-semibold text-dark dark:text-white"
              >
                API key <span className="font-normal">(optional)</span>
              </label>
              <input
                id="ninerouter-key"
                type="password"
                value={apiKey}
                onChange={(event) => {
                  setApiKey(event.target.value);
                  setModels([]);
                  setSelectedModel("");
                  setError("");
                }}
                placeholder="Only required if your 9Router instance requires authentication"
                className="w-full rounded-md bg-slate-100 p-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                autoComplete="off"
              />
            </div>

            <button
              type="button"
              onClick={connect}
              disabled={isConnecting}
              className="justify-self-start rounded-lg bg-primary py-2 px-5 font-semibold text-white hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isConnecting ? "Connecting..." : "Load models"}
            </button>

            <p className="text-sm text-secondary">
              This page connects directly from your browser to the URL above.
              The API key stays in memory for this page only. Do not enter a
              shared production key; your browser sends it directly to that
              server. The server must allow requests from this site.
            </p>
          </div>

          {models.length > 0 && (
            <div className="mb-6">
              <label
                htmlFor="ninerouter-model"
                className="mb-2 block text-sm font-semibold text-dark dark:text-white"
              >
                Model
              </label>
              <select
                id="ninerouter-model"
                value={selectedModel}
                onChange={(event) => setSelectedModel(event.target.value)}
                className="w-full rounded-md bg-white p-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
              >
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.id}
                  </option>
                ))}
              </select>
            </div>
          )}

          {error && (
            <p
              role="alert"
              className="mb-4 rounded-md bg-red-100 p-3 text-sm text-red-800"
            >
              {error}
            </p>
          )}

          <div
            aria-live="polite"
            className="mb-6 max-h-[28rem] min-h-24 space-y-4 overflow-y-auto rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800"
          >
            {messages.length === 0 ? (
              <p className="text-sm text-secondary">
                Load models to start a conversation.
              </p>
            ) : (
              messages.map((message, index) => (
                <div
                  key={`${index}-${message.role}`}
                  className={`rounded-lg p-4 ${
                    message.role === "user"
                      ? "ml-8 bg-teal-50 text-dark dark:bg-slate-700 dark:text-white"
                      : "mr-8 bg-slate-100 text-dark dark:bg-slate-900 dark:text-white"
                  }`}
                >
                  <p className="mb-1 text-xs font-semibold uppercase text-secondary">
                    {message.role === "user" ? "You" : "Assistant"}
                  </p>
                  <p className="whitespace-pre-wrap break-words text-sm">
                    {message.content}
                  </p>
                </div>
              ))
            )}
            {isSending && (
              <p className="text-sm text-secondary">Waiting for a reply...</p>
            )}
          </div>

          <form onSubmit={sendMessage} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="ninerouter-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="ninerouter-message"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Write a message..."
              rows={2}
              className="min-w-0 flex-1 resize-y rounded-md bg-white p-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
            />
            <button
              type="submit"
              disabled={!selectedModel || isSending || !draft.trim()}
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Component, ReactNode } from "react";
import Icon from "@mdi/react";
import { mdiCoffeeOutline } from "@mdi/js";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
          style={{ background: "#000000" }}
        >
          <Icon path={mdiCoffeeOutline} size={2} color="#888888" aria-hidden="true" />
          <h1 className="text-xl font-bold" style={{ color: "#ffffff" }}>
            Something went wrong.
          </h1>
          <p className="text-sm max-w-sm" style={{ color: "#888888" }}>
            Please refresh the page or contact us directly at{" "}
            <a href="mailto:heybrewcafeph@gmail.com" style={{ color: "#dca47d" }}>
              heybrewcafeph@gmail.com
            </a>
            .
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 text-sm font-semibold"
            style={{ background: "#dca47d", color: "#000000", borderRadius: "30px" }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

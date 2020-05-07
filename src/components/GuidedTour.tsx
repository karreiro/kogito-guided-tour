/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState, useRef, useLayoutEffect } from "react";

import { Dialog } from "./Dialog";
import { HighlightLayer } from "./HighlightLayer";
import { CurrentTutorialContext } from "../contexts/CurrentTutorialContext";
import { CurrentStepContext } from "../contexts/CurrentStepContext";
import { EventLabel } from "../core/GuidedTourEventBus";

import "./GuidedTour.sass";
import { Tutorial } from "..";

export const GuidedTour = () => {
  const tutorials = useRef<Tutorial[]>([]);
  const currentTutorialLabel = useRef("");
  const [currentTutorial, setCurrentTutorial] = useState<Tutorial>();
  const [currentStep, setCurrentStep] = useState(0);

  useRegisterTutorialListener(registerTutorial);
  useStartTutorialListener(startTutorial);

  function getCurrentTutorial() {
    const label = currentTutorialLabel.current;
    return tutorials.current.find((tutorial) => tutorial.label === label);
  }

  function refreshTutorialState() {
    const tutorial = getCurrentTutorial();
    if (tutorial) {
      setCurrentTutorial(tutorial);
    }
  }

  function registerTutorial(tutorial: Tutorial) {
    tutorials.current = [...tutorials.current, tutorial];

    refreshTutorialState();
  }

  function startTutorial(tutorialLabel: string) {
    currentTutorialLabel.current = tutorialLabel;

    setCurrentStep(0);
    refreshTutorialState();
  }

  return (
    <CurrentTutorialContext.Provider value={{ currentTutorial }}>
      <CurrentStepContext.Provider value={{ currentStep, setCurrentStep }}>
        <HighlightLayer />
        <Dialog />
      </CurrentStepContext.Provider>
    </CurrentTutorialContext.Provider>
  );
};

function useRegisterTutorialListener(onRegisterTutorial: (tutorial: Tutorial) => void) {
  useLayoutEffect(
    createListener("registerTutorial", (event) => onRegisterTutorial(event.detail)),
    []
  );
}

function useStartTutorialListener(onStartTutorial: (tutorialLabel: string) => void) {
  useLayoutEffect(
    createListener("startTutorial", (event) => onStartTutorial(event.detail)),
    []
  );
}

function createListener(eventLabel: EventLabel, consumer: (customEvent: CustomEvent) => void) {
  function listener(e: any) {
    consumer(e as CustomEvent);
  }
  return () => {
    document.addEventListener(eventLabel, listener);
    return () => {
      document.removeEventListener(eventLabel, listener);
    };
  };
}

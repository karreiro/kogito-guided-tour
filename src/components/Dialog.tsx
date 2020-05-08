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

import React, { useContext, useState } from "react";

import { NavigationControls } from "./NavigationControls";
import { CurrentTutorialContext } from "../contexts/CurrentTutorialContext";
import { CurrentStepContext } from "../contexts/CurrentStepContext";
import { Step } from "../api/Step";

import "./Dialog.sass";

export const Dialog = () => {
  const [isEnabled] = useState(true);
  const { currentTutorial } = useContext(CurrentTutorialContext);
  const { currentStep } = useContext(CurrentStepContext);
  const step = currentTutorial?.steps[currentStep];

  function getDialogClass() {
    if (isEnabled) {
      return "kgt-dialog kgt-dialog--enabled";
    } else {
      return "kgt-dialog kgt-dialog--disabled";
    }
  }

  function getContent(step: Step) {
    const content = step.content;

    if (typeof content === "function") {
      return content({});
    }

    if (content instanceof HTMLElement) {
      return <div dangerouslySetInnerHTML={{ __html: content.outerHTML }} />;
    }

    return content;
  }

  function stepDialog(step: Step) {
    const [x, y] = getCoordinates(step);

    return (
      <div style={{ left: x, top: y }} className={getDialogClass()}>
        <h1 className="kgt-dialog__title">Welcome!</h1>
        <div>{getContent(step)}</div>
        <NavigationControls />
      </div>
    );
  }

  function getCoordinates(step: Step): [number | string, number | string] {
    const rect = step.selector.getReferenceRect();
    const padding = 20;

    switch (step.position) {
      case "right":
        return [rect.x + rect.width + padding, rect.y];
      case "bottom":
        return [rect.x, rect.y + rect.height + padding];
      default:
        return ["", ""];
    }
  }

  function emptyDialog() {
    return (
      <div className={getDialogClass()}>
        <h1 className="kgt-dialog__title">Oops!</h1>
        <div className="kgt-dialog__icon--error"></div>
        <p className="kgt-dialog__message--error">The content could not be loaded.</p>
      </div>
    );
  }

  return step ? stepDialog(step) : emptyDialog();
};

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

import React, { useState, useContext } from "react";

import { NavigationControls } from "./NavigationControls";
import { CurrentTutorialContext } from "../contexts/CurrentTutorialContext";
import { CurrentStepContext } from "../contexts/CurrentStepContext";

import "./Dialog.sass";

export const Dialog = () => {
  const [isEnabled] = useState(true);
  const { currentTutorial } = useContext(CurrentTutorialContext);
  const { currentStep } = useContext(CurrentStepContext);

  function getDialogClass() {
    if (isEnabled) {
      return "kgt-dialog kgt-dialog--enabled";
    } else {
      return "kgt-dialog kgt-dialog--disabled";
    }
  }

  function getStep() {
    const step = currentTutorial?.steps[currentStep];
    const content = step?.content;

    if (typeof content === "function") {
      return content({});
    } else {
      return content;
    }
  }

  return (
    <div className={getDialogClass()}>
      <h1>Welcome!</h1>
      <div>{getStep()}</div>
      <NavigationControls />
    </div>
  );
};

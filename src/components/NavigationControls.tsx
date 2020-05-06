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

import React, { useState } from "react";

import "./NavigationControls.sass";

export const NavigationControls = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [numberOfSteps] = useState(5);
  const enabledButtonClass = "kgt-nav-controls__button";
  const disabledButtonClass = "kgt-nav-controls__button kgt-nav-controls__button--disabled";

  function getPrevButtonClassName() {
    return currentStep === 0 ? disabledButtonClass : enabledButtonClass;
  }

  function getNextButtonClassName() {
    return currentStep === numberOfSteps ? disabledButtonClass : enabledButtonClass;
  }

  function prev() {
    setCurrentStep(currentStep - 1);
  }

  function next() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <div className="kgt-nav-controls">
      <button onClick={prev} className={getPrevButtonClassName()}>
        ←
      </button>
      <div className="kgt-nav-controls__step-number">
        {currentStep}/{numberOfSteps}
      </div>
      <button onClick={next} className={getNextButtonClassName()}>
        →
      </button>
    </div>
  );
};

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

import React, { useContext } from "react";

import "./HighlightLayer.sass";

import { CurrentStepContext } from "../contexts/CurrentStepContext";
import { CurrentTutorialContext } from "../contexts/CurrentTutorialContext";

export const HighlightLayer = () => {
  const { currentTutorial } = useContext(CurrentTutorialContext);
  const { currentStep } = useContext(CurrentStepContext);
  const step = currentTutorial?.steps[currentStep];
  const highlightEnabled = step && step.highlightEnabled;
  const rect = step?.selector.getReferenceRect(); // TODO: extract to outils

  const width = window.innerWidth;
  const height = window.innerHeight;
  const padding = 10; // TODO: extract to global
  const x = rect ? rect.x - padding : 0; // TODO: remove rect checks
  const y = rect ? rect.y - padding : 0;
  const rectWidth = rect ? rect.width + padding * 2 : 0;
  const reactHeight = rect ? rect.height + padding * 2 : 0;

  const params = `M0 0 H${width} V${height} H0Z 
                  M${x} ${y} V${y + reactHeight} H${x + rectWidth} V${y}Z`;

  return (
    <svg style={{ display: highlightEnabled ? "" : "none" }} className="kgt-svg-layer">
      <path d={params} style={{ fill: "rgba(0, 0, 0, .5)" }} />
    </svg>
  );
};

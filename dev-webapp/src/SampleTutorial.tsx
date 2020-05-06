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

import { KogitoGuidedTour, Tutorial, DemoMode, CoodinateSelector } from "kogito-guided-tour";
import {} from "kogito-guided-tour";
import React, { useEffect } from "react";

const SAMPLE_TUTORIAL_LABEL = "Sample tutorial";

export function useSampleTutorial() {
  useEffect(() => {
    const tour = new KogitoGuidedTour();

    tour.setup();
    tour.registerTutorial(getSampleTutorial());
    tour.start(SAMPLE_TUTORIAL_LABEL);

    return () => tour.teardown();
  });
}

function getSampleTutorial() {
  return new Tutorial(SAMPLE_TUTORIAL_LABEL, [
    {
      selector: new CoodinateSelector(1, 1),
      position: "right",
      mode: new DemoMode(),
      content: () => {
        return <div>First step</div>;
      },
    },
    {
      selector: new CoodinateSelector(1, 1),
      position: "right",
      mode: new DemoMode(),
      content: () => {
        return <div>Second step</div>;
      },
    },
  ]);
}

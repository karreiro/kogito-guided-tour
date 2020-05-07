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

import React from "react";
import ReactDOM from "react-dom";

import { Tutorial } from "./api/Tutorial";
import { Event } from "./api/Event";
import { DemoMode } from "./api/Mode";
import { CoodinateSelector } from "./api/Selector";
import { Dialog } from "./components/Dialog";
import { GuidedTourDomUtils } from "./core/GuidedTourDomUtils";

class KogitoGuidedTour {
  private currentStepIndex = 0;

  private tutorials: Tutorial[] = [];

  private domUtils = new GuidedTourDomUtils();

  // TODO: KOGITO-1991
  start(tutorialLabel: string): void {
    console.log("TODO: start tutorial", tutorialLabel);
  }

  // TODO: KOGITO-1990
  registerTutorial(tutorial: Tutorial): void {
    this.tutorials.push(tutorial);
    console.log("TODO: register tutorial", tutorial);
  }

  // TODO: KOGITO-1991
  update(event: Event): void {
    this.currentStepIndex = this.currentStepIndex + 1;
    console.log("TODO: start", event);
  }

  /**
   * Setup the Guided Tour component on a {@link HTMLElement} at the
   * `document` level.
   *
   * Notice: When this method is called from a `React` app, is must be called
   * into a `React.useEffect` function or a `React.Component#componentDidMount`
   * function , e.g.:
   *
   * ```typescript
   * useEffect(() => {
   *   const tour = new KogitoGuidedTour();
   *   tour.setup();
   *   return () => tour.teardown();
   * }, []);
   * ```
   */
  setup() {
    // TODO: Render
    // <KogitoGuidedTourParent> with globals, dialog, etc
    // Dialog state: step
    ReactDOM.render(<Dialog />, this.domUtils.getGuidedTourHTMLElement());
  }

  /**
   * Teardown the Guided Decision tour component, by removing the
   * {@link HTMLElement} created by the {@link setup} method.
   */
  teardown() {
    const guidedTourElement = this.domUtils.getGuidedTourHTMLElement();
    guidedTourElement?.parentElement?.removeChild(guidedTourElement);
  }
}

// TODO: export the whole public API
export { KogitoGuidedTour, Tutorial, DemoMode, CoodinateSelector };

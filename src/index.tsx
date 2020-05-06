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

class KogitoGuidedTour {
  private GUIDED_TOUR_SELECTOR = "kogito-guided-tour-" + KogitoGuidedTour.randomHash();

  private currentStepIndex = 0;

  private tutorials: Tutorial[] = [];

  private guidedTourElement: HTMLElement | null = null;

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
   * {@link document} level.
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
    ReactDOM.render(<Dialog />, this.getGuidedTourElement()); // TODO: render on useEffect (?)
  }

  /**
   * Teardown the Guided Decision tour component, by removing the
   * {@link HTMLElement} created by the {@link setup} method.
   */
  teardown() {
    const guidedTourElement = this.getGuidedTourElement();
    guidedTourElement?.parentElement?.removeChild(guidedTourElement);
  }

  private getGuidedTourElement() {
    this.guidedTourElement = this.guidedTourElement || this.findGuidedTourElement();
    return this.guidedTourElement;
  }

  private findGuidedTourElement() {
    const existingElement = document.getElementById("#" + this.GUIDED_TOUR_SELECTOR);
    return existingElement || this.createGuidedTourElement();
  }

  private createGuidedTourElement() {
    const newElement = document.createElement("div");
    newElement.id = this.GUIDED_TOUR_SELECTOR;
    document.body.appendChild(newElement);
    return newElement;
  }

  private static randomHash() {
    return Math.random().toString(36).substr(2, 9);
  }
}

// TODO: export the whole public API
export { KogitoGuidedTour, Tutorial, DemoMode, CoodinateSelector };

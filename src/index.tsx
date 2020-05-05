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
import { Dialog } from "./components/Dialog";

export class KogitoGuidedTour {
  private GUIDED_TOUR_SELECTOR = "kogito-guided-tour-" + KogitoGuidedTour.randomHash();

  private currentStepIndex = 0;
  private tutorials: Tutorial[] = [];
  private guidedTourElement: HTMLElement | null = null;

  // TODO: KOGITO-1990
  registerTutorial(tutorial: Tutorial): void {
    this.tutorials.push(tutorial);
    console.log("TODO: register tutorial", tutorial);
  }

  // TODO: KOGITO-1991
  start() {
    ReactDOM.render(<Dialog />, this.getGuidedTourElement());
  }

  // TODO: KOGITO-1991
  update(event: Event): void {
    this.currentStepIndex = this.currentStepIndex + 1;
    console.log("TODO: start", event);
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

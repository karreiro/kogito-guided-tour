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
import { GuidedTour } from "./components/GuidedTour";
import { GuidedTourDomUtils } from "./core/GuidedTourDomUtils";
import { GuidedTourEventBus } from "./core/GuidedTourEventBus";

class KogitoGuidedTour {
  private static domUtils = new GuidedTourDomUtils();

  private static eventBus = new GuidedTourEventBus();

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
   *    KogitoGuidedTour.setup();
   *    return () => KogitoGuidedTour.teardown();
   * }, []);
   * ```
   */
  static setup() {
    ReactDOM.render(<GuidedTour />, this.domUtils.getGuidedTourHTMLElement(), () => {
      this.eventBus.enableBus();
    });
  }

  /**
   * Teardown the Guided Decision tour component, by removing the
   * {@link HTMLElement} created by the {@link setup} method.
   */
  static teardown() {
    const guidedTourElement = this.domUtils.getGuidedTourHTMLElement();
    guidedTourElement?.parentElement?.removeChild(guidedTourElement);
  }

  /**
   * Start a tutorial.
   */
  static start(tutorialLabel: string): void {
    this.eventBus.startTutorial(tutorialLabel);
  }

  /**
   * Register a tutorial.
   */
  static registerTutorial(tutorial: Tutorial): void {
    this.eventBus.registerTutorial(tutorial);
  }

  // TODO: KOGITO-1991
  static update(event: Event): void {
    console.log("TODO: start", event);
  }
}

// TODO: export the whole public API
export { KogitoGuidedTour, Tutorial, DemoMode, CoodinateSelector };

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

export class GuidedTourDomHelper {
  private elementId: string;

  private guidedTourElement: HTMLElement | null;

  constructor() {
    this.elementId = "kgt-parent-" + GuidedTourDomHelper.randomHash();
    this.guidedTourElement = null;
  }

  public getGuidedTourElement() {
    this.guidedTourElement = this.guidedTourElement || this.findGuidedTourElement();
    return this.guidedTourElement;
  }

  private findGuidedTourElement() {
    const idSelector = "#" + this.elementId;
    const existingElement = document.getElementById(idSelector);
    return existingElement || this.createGuidedTourElement();
  }

  private createGuidedTourElement() {
    const div = this.createDivHTMLElement();
    div.id = this.elementId;
    return div;
  }

  private createDivHTMLElement() {
    const div = document.createElement("div");
    return document.body.appendChild(div);
  }

  private static randomHash() {
    return Math.random().toString(36).substr(2, 9);
  }
}

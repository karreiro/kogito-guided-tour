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

export type ReferenceRect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

export class Selector {
  private bottom = 0;
  private height = 0;
  private left = 0;
  private right = 0;
  private top = 0;
  private width = 0;
  private x = 0;
  private y = 0;

  getReferenceRect(): ReferenceRect {
    return {
      bottom: this.bottom,
      height: this.height,
      left: this.left,
      right: this.right,
      top: this.top,
      width: this.width,
      x: this.x,
      y: this.y,
    };
  }
}

export class NoneSelector extends Selector {}

export class QuerySelector extends Selector {
  constructor(public query: string) {
    super();
  }

  getReferenceRect(): ReferenceRect {
    const domReference = document.querySelector(this.query);
    if (domReference) {
      return domReference.getBoundingClientRect();
    } else {
      return super.getReferenceRect();
    }
  }
}

export class GraphSelector extends Selector {
  constructor(public nodeName: string, public supplier: (nodeName: string) => ReferenceRect) {
    super();
  }

  getReferenceRect(): ReferenceRect {
    return { ...this.supplier(this.nodeName) };
  }
}

export class GridSelector extends Selector {
  constructor(
    public cellCoordinate: [number, number],
    public supplier: (cellCoordinate: [number, number]) => ReferenceRect
  ) {
    super();
  }

  getReferenceRect(): ReferenceRect {
    return { ...this.supplier(this.cellCoordinate) };
  }
}

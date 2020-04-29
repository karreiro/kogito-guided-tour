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

export interface Selector {
  getCoordinate(): [number, number];
}

export class QuerySelector implements Selector {
  constructor(public query: string) {}

  // TODO: KOGITO-1986
  getCoordinate(): [number, number] {
    return [0, 0];
  }
}

export class GraphSelector implements Selector {
  constructor(public nodeName: string) {}

  // TODO: KOGITO-1988
  getCoordinate(): [number, number] {
    return [0, 0];
  }
}

export class GridSelector implements Selector {
  constructor(public cell: [number, number]) {}

  // TODO: KOGITO-1987
  getCoordinate(): [number, number] {
    return [this.cell[0], this.cell[1]];
  }
}

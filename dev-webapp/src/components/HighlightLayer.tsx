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

import "./HighlightLayer.sass";

const HighlightLayer = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = 85;
  const y = 570;
  const rectWidth = 230;
  const reactHeight = 65;

  const params = `M0 0     H${width} V${height} H0Z 
                  M${x} ${y} V${y + reactHeight} H${x + rectWidth} V${y}Z`;

  return (
    <svg className="svg-layer">
      <path d={params} style={{ fill: "rgba(0, 0, 0, .75)" }} />
    </svg>
  );
};

export default HighlightLayer;

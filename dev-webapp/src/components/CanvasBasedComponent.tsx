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

import React, { useEffect, useRef } from "react";

import "./CanvasBasedComponent.sass";

const CanvasBasedComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

    const dpr = window.devicePixelRatio || 1;

    // Scale for high resolution displays
    context.scale(dpr, dpr);

    // Draw background
    const canvasWidth = canvas.width / dpr;
    const canvasHeight = canvas.height / dpr;

    context.fillStyle = "#FFFFFF";
    context.strokeStyle = "#333333";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.strokeRect(0, 0, canvasWidth, canvasHeight);

    // Draw rectangle
    const rectWidth = 140 / dpr;
    const rectHeight = 60 / dpr;
    const x = 60 / dpr;
    const y = 60 / dpr;

    context.fillStyle = "#EEEEEE";
    context.strokeStyle = "#222222";
    context.fillRect(x, y, rectWidth, rectHeight);
    context.strokeRect(x, y, rectWidth, rectHeight);
  }, []);

  return (
    <div className="component">
      <h2>Canvas based component</h2>
      <canvas ref={canvasRef} width={400} height={300} />
      <button>Start Guided Tour</button>
    </div>
  );
};

export default CanvasBasedComponent;

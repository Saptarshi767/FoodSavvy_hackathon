import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const FoodScanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [detectedItem, setDetectedItem] = useState("Detecting...");

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam: ", error);
      }
    };

    const detectFood = async () => {
      const model = await cocoSsd.load();
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const foodItems = [
        "banana",
        "apple",
        "orange",
        "sandwich",
        "cake",
        "hot dog",
        "pizza",
        "donut",
        "broccoli",
      ];

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const detectFrame = async () => {
        const predictions = await model.detect(video);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        predictions.forEach((prediction) => {
          if (foodItems.includes(prediction.class)) {
            ctx.beginPath();
            ctx.rect(...prediction.bbox);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.stroke();
            ctx.fillText(prediction.class, prediction.bbox[0], prediction.bbox[1] - 10);
            setDetectedItem(`Detected: ${prediction.class}`);
          }
        });

        requestAnimationFrame(detectFrame);
      };

      detectFrame();
    };

    setupCamera().then(detectFood);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Food Scanner</h1>
      <div style={{ position: "relative", display: "inline-block" }}>
        <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }} />
        <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      </div>
      <h3>{detectedItem}</h3>
    </div>
  );
};

export default FoodScanner;
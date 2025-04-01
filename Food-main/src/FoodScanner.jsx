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
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4", // Light background for a clean look
    }}>
      <h1 style={{ marginBottom: "20px", fontSize: "28px", color: "#333" }}>Food Scanner</h1>

      {/* Video Container */}
      <div style={{ 
        position: "relative", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%", 
        maxWidth: "600px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff"
      }}>
        <video ref={videoRef} autoPlay playsInline style={{ 
          width: "100%", 
          borderRadius: "10px" 
        }} />
        <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      </div>

      {/* Detected Item Display */}
      <div style={{ 
        marginTop: "20px",
        background: "#ffffff", 
        padding: "15px", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
        minWidth: "250px", 
        textAlign: "center",
        marginRight: "50px" // Extra right margin
      }}>
        <h3 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>{detectedItem}</h3>
      </div>
    </div>
  );
};

export default FoodScanner;

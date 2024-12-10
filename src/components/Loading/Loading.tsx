import React from "react";

type LoadingProps = {
  size?: number; // Tamanho do círculo (opcional)
  color?: string; // Cor do círculo (opcional)
};

const Loading: React.FC<LoadingProps> = ({ size = 40, color = "#000" }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `${size / 10}px solid ${color}33`, // Fundo semi-transparente
        borderTop: `${size / 10}px solid ${color}`, // Cor principal
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  );
};

export default Loading;

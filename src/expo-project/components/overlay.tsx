import { Canvas, DiffRect, Paint, rect, rrect } from "@shopify/react-native-skia";
import React from 'react';
import { Dimensions, Platform, StyleSheet } from "react-native";

const { width = 500, height = 1000 } = Dimensions.get("window"); // Fallback values
const innerDimension = 300;

const outer = rrect(rect(0, 0, width, height), 0, 0);
const inner = rrect(
  rect(
    width / 2 - innerDimension / 2,
    height / 2 - innerDimension / 1.2,
    innerDimension,
    innerDimension
  ),
  50,
  50
);

export const Overlay = () => {
  return (
    <Canvas
      style={
        Platform.OS === "android" ? { flex: 1 } : StyleSheet.absoluteFillObject
      }
    >
      {/* 只绘制半透明背景 */}
      <DiffRect inner={inner} outer={outer} color="black" opacity={0.5}>
        <Paint style="stroke" />
      </DiffRect>
      
      {/* 仅在内正方形上添加边框 */}
      <DiffRect inner={inner} outer={inner} color="transparent" opacity={1}>
        <Paint style="stroke" color="white" strokeWidth={4} />
      </DiffRect>
    </Canvas>
  );
};
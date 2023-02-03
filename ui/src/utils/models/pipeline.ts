import { Node, Edge } from "react-flow-renderer";

export interface VertexMetrics {
  ratePerMin: string;
  ratePerFiveMin: string;
  ratePerFifteenMin: string;
  podMetrics: any[];
}

export interface VertexWatermark {
  watermark: number;
  watermarkLocalTime: string;
  isWaterMarkEnabled: boolean;
}

export interface EdgeInfo {
  fromVertex: string;
  toVertex: string;
  ackPendingCount: number;
  pendingCount: number;
  totalMessages: number;
  isFull: boolean;
  bufferUsage: number;
  bufferUsageLimit: number;
  bufferLength: number;
}

export interface GraphData {
  vertices: Node[];
  edges: Edge[];
  pipeline?: Pipeline;
}

export interface Conditions {
  keyIn: any[];
}

export interface Pipeline {
  spec: Spec;
  metadata: any;
  status?: any;
}

export interface Spec {
  vertices: PipelineVertex[];
  edges: PipelineEdge[];
  watermark: any,
}

export interface PipelineVertex {
  name: string;
  source?: any;
  udf?: any;
  sink?: any;
}

export interface PipelineEdge {
  from: string;
  to: string;
  conditions?: Conditions;
}

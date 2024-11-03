import type { ReadonlyPoint, ReadonlyPointArray } from "../types/boardTypes";
import { generateRandomId } from "../utils/randomIdGenerator";

import type {
  AppState,
  ExcalidrawImperativeAPI,
} from "../../../packages/excalidraw/types";

import type {
  ExcalidrawArrowElement,
  ExcalidrawElement,
  ExcalidrawEllipseElement,
  ExcalidrawFreeDrawElement,
  ExcalidrawLinearElement,
  ExcalidrawTextElement,
  NonDeletedExcalidrawElement,
} from "../../../packages/excalidraw/element/types";

// Function to draw an element on the Excalidraw board
export const addElementsToBoard = async (
  excalidrawAPI: ExcalidrawImperativeAPI,
  elementsToAdd: NonDeletedExcalidrawElement[],
) => {
  const existingElements = await excalidrawAPI.getSceneElements();
  const newElements = [...existingElements, ...elementsToAdd];
  await excalidrawAPI.updateScene({ elements: newElements });
};

// Define the ReferenceFrame type
type ReferenceFrame = {
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};

// Function to perform coordinate space conversion
const convertCoordinates = (
  x: number,
  y: number,
  referenceFrame: ReferenceFrame,
  utilizeOffset: 0 | 1,
  flipY: boolean = true,
): [number, number] => {
  const { offsetX, offsetY, width, height, xMin, xMax, yMin, yMax } =
    referenceFrame;
  const xMultiplier = width / (xMax - xMin);
  const yMultiplier = height / (yMax - yMin);
  const scaledX = utilizeOffset * offsetX + x * xMultiplier;
  let scaledY;
  if (flipY) {
    scaledY = utilizeOffset * offsetY + -1 * y * yMultiplier;
  } else {
    scaledY = utilizeOffset * offsetY + y * yMultiplier;
  }
  return [scaledX, scaledY];
};

// Define a constant for the reference frame
const DEFAULT_REFERENCE_FRAME: ReferenceFrame = {
  offsetX: 69,
  offsetY: 169,
  width: 500,
  height: 500,
  xMin: 0,
  xMax: 5,
  yMin: 0,
  yMax: 5,
};

const createElementFromJSON = (
  elementProperties: Partial<ExcalidrawElement>,
  description: string,
  excalidrawAPI: ExcalidrawImperativeAPI,
): NonDeletedExcalidrawElement => {
  const appState = excalidrawAPI.getAppState();
  let creator;
  if (elementProperties.angle) {
    elementProperties = {
      ...elementProperties,
      angle: elementProperties.angle * -1,
    };
  }
  switch (elementProperties.type) {
    case "freedraw":
      creator = elementCreators.freedraw;
      break;
    case "text":
      creator = elementCreators.text;
      break;
    case "line":
      creator = elementCreators.line;
      break;
    case "arrow":
      creator = elementCreators.arrow;
      break;
    case "ellipse":
      creator = elementCreators.ellipse;
      break;
    default:
      throw new Error(`Unsupported element type: ${elementProperties.type}`);
  }

  return creator.create(
    elementProperties as any,
    description,
    appState,
  ) as NonDeletedExcalidrawElement;
};

// Element creators for each object type
const elementCreators = {
  freedraw: {
    create: (
      elementProperties: Partial<ExcalidrawFreeDrawElement>,
      description: string,
      appState: AppState,
      referenceFrame: ReferenceFrame = DEFAULT_REFERENCE_FRAME,
    ) => {
      const [scaledX, scaledY] = convertCoordinates(
        elementProperties.x as number,
        elementProperties.y as number,
        referenceFrame,
        1,
      );
      // Assert that points is a ReadonlyPointArray, or use an empty array as fallback
      const points = (elementProperties.points as ReadonlyPointArray) ?? [];
      const scaledPoints = points.map(([x, y]) =>
        convertCoordinates(x, y, referenceFrame, 0),
      );

      return {
        ...createBaseElement(elementProperties, [scaledX, scaledY], appState),
        type: "freedraw",
        points: scaledPoints,
        simulatePressure: elementProperties.simulatePressure ?? false,
        pressures: elementProperties.pressures ?? [],
        lastCommittedPoint: elementProperties.lastCommittedPoint ?? null,
        description,
      };
    },
  },
  text: {
    create: (
      elementProperties: Partial<ExcalidrawTextElement>,
      description: string,
      appState: AppState,
      referenceFrame: ReferenceFrame = DEFAULT_REFERENCE_FRAME,
    ) => {
      const [scaledX, scaledY] = convertCoordinates(
        elementProperties.x as number,
        elementProperties.y as number,
        referenceFrame,
        1,
      );

      return {
        ...createBaseElement(elementProperties, [scaledX, scaledY], appState),
        type: "text",
        text: elementProperties.text,
        fontSize: elementProperties.fontSize ?? 36,
        fontFamily: elementProperties.fontFamily ?? 1,
        textAlign: elementProperties.textAlign ?? "left",
        verticalAlign: elementProperties.verticalAlign ?? "top",
        width: elementProperties.text ? elementProperties.text.length * 18 : 18,
        height: 90,
        containerId: elementProperties.containerId ?? null,
        originalText: elementProperties.text,
        description,
        lineHeight:
          elementProperties.lineHeight ?? brandUnitlessLineHeight(1.25),
      };
    },
  },
  line: {
    create: (
      elementProperties: Partial<ExcalidrawLinearElement>,
      description: string,
      appState: AppState,
      referenceFrame: ReferenceFrame = DEFAULT_REFERENCE_FRAME,
    ) => {
      const [scaledX, scaledY] = convertCoordinates(
        elementProperties.x as number,
        elementProperties.y as number,
        referenceFrame,
        1,
      );
      // Assert that points is a ReadonlyPointArray, or use an empty array as fallback
      const points = (elementProperties.points as ReadonlyPointArray) ?? [];
      const scaledpoints = points.map(([x, y]) =>
        convertCoordinates(x, y, referenceFrame, 0),
      );

      return {
        ...createBaseElement(elementProperties, [scaledX, scaledY], appState),
        type: "line",
        points: scaledpoints,
        lastCommittedPoint: elementProperties.lastCommittedPoint ?? null,
        startBinding: elementProperties.startBinding ?? null,
        endBinding: elementProperties.endBinding ?? null,
        startArrowhead: elementProperties.startArrowhead ?? null,
        endArrowhead: elementProperties.endArrowhead ?? null,
        customData: elementProperties.customData,
        description,
      };
    },
  },
  arrow: {
    create: (
      elementProperties: Partial<ExcalidrawArrowElement>,
      description: string,
      appState: AppState,
      referenceFrame: ReferenceFrame = DEFAULT_REFERENCE_FRAME,
    ) => {
      const [scaledX, scaledY] = convertCoordinates(
        elementProperties.x as number,
        elementProperties.y as number,
        referenceFrame,
        1,
      );
      // Assert that points is a ReadonlyPointArray, or use an empty array as fallback
      const points = (elementProperties.points as ReadonlyPointArray) ?? [];
      const scaledpoints = points.map(([x, y]) =>
        convertCoordinates(x, y, referenceFrame, 0),
      );

      return {
        ...createBaseElement(elementProperties, [scaledX, scaledY], appState),
        type: "arrow",
        points: scaledpoints,
        lastCommittedPoint: elementProperties.lastCommittedPoint ?? null,
        startBinding: elementProperties.startBinding ?? null,
        endBinding: elementProperties.endBinding ?? null,
        startArrowhead: elementProperties.startArrowhead ?? null,
        endArrowhead: elementProperties.endArrowhead ?? "arrow",
        customData: elementProperties.customData,
        description,
      };
    },
  },
  ellipse: {
    create: (
      elementProperties: Partial<ExcalidrawEllipseElement>,
      description: string,
      appState: AppState,
      referenceFrame: ReferenceFrame = DEFAULT_REFERENCE_FRAME,
    ) => {
      const [scaledX, scaledY] = convertCoordinates(
        elementProperties.x as number,
        elementProperties.y as number,
        referenceFrame,
        1,
      );
      const width = elementProperties.width as number;
      const height = elementProperties.height as number;
      const scaledpoints = convertCoordinates(
        width,
        height,
        referenceFrame,
        0,
        false,
      );
      return {
        ...createBaseElement(elementProperties, [scaledX, scaledY], appState),
        type: "ellipse",
        width: scaledpoints[0],
        height: scaledpoints[1],
        customData: elementProperties.customData,
        description,
      };
    },
  },
};

// Function to create a base element with common properties
const createBaseElement = (
  json: Partial<ExcalidrawElement>,
  startCoordinates: ReadonlyPoint,
  appState: AppState,
) => ({
  ...json,
  angle: json.angle ?? 0,
  backgroundColor: json.backgroundColor ?? "transparent",
  boundElements: json.boundElements ?? null,
  fillStyle: json.fillStyle ?? "solid",
  frameId: json.frameId ?? null,
  groupIds: json.groupIds ?? [],
  height: json.height ?? 0,
  id: json.id ?? generateRandomId(),
  index: json.index ?? "",
  isDeleted: json.isDeleted ?? false,
  link: json.link ?? null,
  locked: json.locked ?? false,
  opacity: json.opacity ?? appState.currentItemOpacity,
  roughness: json.roughness ?? 0,
  seed: json.seed ?? Math.floor(Math.random() * 1000000),
  strokeColor: json.strokeColor ?? appState.currentItemStrokeColor,
  strokeStyle: json.strokeStyle ?? "solid",
  strokeWidth: json.strokeWidth ?? appState.currentItemStrokeWidth,
  type: json.type ?? "",
  updated: json.updated ?? Date.now(),
  version: json.version ?? 1,
  versionNonce: json.versionNonce ?? Math.floor(Math.random() * 1000000),
  width: json.width ?? 0,
  x: startCoordinates[0],
  y: startCoordinates[1],
});

function brandUnitlessLineHeight(
  value: number,
): number & { _brand: "unitlessLineHeight" } {
  return value as number & { _brand: "unitlessLineHeight" };
}

export function convertObjectsToExcalidrawElements(
  objects: any[],
  excalidrawAPI: ExcalidrawImperativeAPI,
): NonDeletedExcalidrawElement[] {
  const flattenedObjects = objects.flatMap((obj) => obj.result);
  return flattenedObjects.map((object) =>
    createElementFromJSON(
      object.elementProperties,
      object.description || "",
      excalidrawAPI,
    ),
  );
}

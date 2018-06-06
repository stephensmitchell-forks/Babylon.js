import { IImageProcessingConfiguration } from "./imageProcessingConfiguration";
import { IColorGradingConfiguration } from "./colorGradingConfiguration";
import { IGlowLayerOptions } from "babylonjs";

export interface ISceneConfiguration {
    debug?: boolean;
    clearColor?: { r: number, g: number, b: number, a: number };
    mainColor?: { r?: number, g?: number, b?: number };
    imageProcessingConfiguration?: IImageProcessingConfiguration;
    environmentTexture?: string;
    colorGrading?: IColorGradingConfiguration;
    environmentRotationY?: number;
    /**
     * Deprecated, please use default rendering pipeline
     */
    glow?: boolean | IGlowLayerOptions;
    disableHdr?: boolean;
    renderInBackground?: boolean;
    disableCameraControl?: boolean;
    animationPropertiesOverride?: {
        [propName: string]: any;
    };
    defaultMaterial?: {
        materialType: "standard" | "pbr";
        [propName: string]: any;
    };
    flags?: {
        shadowsEnabled?: boolean;
        particlesEnabled?: boolean;
        collisionsEnabled?: boolean;
        lightsEnabled?: boolean;
        texturesEnabled?: boolean;
        lensFlaresEnabled?: boolean;
        proceduralTexturesEnabled?: boolean;
        renderTargetsEnabled?: boolean;
        spritesEnabled?: boolean;
        skeletonsEnabled?: boolean;
        audioEnabled?: boolean;
    }
}
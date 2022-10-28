import { Fractal } from "./fractal.model";

export class MandelbrotFractals {

    public static mandelbrot: Fractal = {
        x: -0.6,
        y: 0.25,
        zoom: 1.25,
        name: "Mandelbrot",
        zreal: (a: number, b: number) => a * a - b * b,
        zimag: (a: number, b: number) => 2 * a * b
    };

    public static burningShip: Fractal = {
        x: -0.6,
        y: 0.25,
        zoom: 1.25,
        name: "Burning Ship",
        zreal: (a: number, b: number) => a * a - b * b,
        zimag: (a: number, b: number) => 2 * Math.abs(a * b)
    };

    public static mandelbar: Fractal = {
        x: -0.6,
        y: 0.25,
        zoom: 1.25,
        name: "Mandelbar",
        zreal: (a: number, b: number) => a * a - b * b,
        zimag: (a: number, b: number) => -2 * a * b
    };

    public static burningShipBar: Fractal = {
        x: -0.6,
        y: 0.25,
        zoom: 1.25,
        name: "Burning Ship Bar",
        zreal: (a: number, b: number) => a * a - b * b,
        zimag: (a: number, b: number) => -2 * Math.abs(a * b)
    };

    public static mandelbrot3: Fractal = {
        x: 0,
        y: 0.25,
        zoom: 1.2,
        name: "Mandelbrot 3",
        zreal: (a: number, b: number) => a * a * a - 3 * a * b * b,
        zimag: (a: number, b: number) => 3 * a * a * b - b * b * b
    };

    public static burningShip3: Fractal = {
        x: 0,
        y: 0.25,
        zoom: 1.2,
        name: "Burning Ship 3",
        zreal: (a: number, b: number) => a * a * a - 3 * a * b * b,
        zimag: (a: number, b: number) => 3 * Math.abs(a * a * b) - Math.abs(b * b * b)
    };

    public static mandelbar3: Fractal = {
        x: 0,
        y: 0.25,
        zoom: 1.2,
        name: "Mandelbar 3",
        zreal: (a: number, b: number) => a * a * a - 3 * a * b * b,
        zimag: (a: number, b: number) => -3 * a * a * b + b * b * b
    };

    public static burningShipBar3: Fractal = {
        x: 0,
        y: 0.25,
        zoom: 1.2,
        name: "Burning Ship Bar 3",
        zreal: (a: number, b: number) => a * a * a - 3 * a * b * b,
        zimag: (a: number, b: number) => -3 * Math.abs(a * a * b) + Math.abs(b * b * b)
    };

    public static mandelbrot4: Fractal = {
        x: -0.15,
        y: 0.2,
        zoom: 1.35,
        name: "Mandelbrot 4",
        zreal: (a: number, b: number) => a * a * a * a - 6 * a * a * b * b + b * b * b * b,
        zimag: (a: number, b: number) => 4 * a * a * a * b - 4 * a * b * b * b
    };

    public static burningShip4: Fractal = {
        x: -0.15,
        y: 0.2,
        zoom: 1.35,
        name: "Burning Ship 4",
        zreal: (a: number, b: number) => a * a * a * a - 6 * a * a * b * b + b * b * b * b,
        zimag: (a: number, b: number) => 4 * Math.abs(a * a * a * b) - 4 * Math.abs(a * b * b * b)
    };

    public static mandelbar4: Fractal = {
        x: -0.15,
        y: 0.2,
        zoom: 1.35,
        name: "Mandelbar 4",
        zreal: (a: number, b: number) => a * a * a * a - 6 * a * a * b * b + b * b * b * b,
        zimag: (a: number, b: number) => -4 * a * a * a * b + 4 * a * b * b * b
    };

    public static burningShipBar4: Fractal = {
        x: -0.15,
        y: 0.2,
        zoom: 1.35,
        name: "Burning Ship Bar 4",
        zreal: (a: number, b: number) => a * a * a * a - 6 * a * a * b * b + b * b * b * b,
        zimag: (a: number, b: number) => -4 * Math.abs(a * a * a * b) + 4 * Math.abs(a * b * b * b)
    };
}
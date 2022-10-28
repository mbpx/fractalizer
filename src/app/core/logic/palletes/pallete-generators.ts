import { Palette } from "./pallete.model";

export class PaletteGenerators {

    private static getColor(r: number, g: number, b: number) {
        return (255 << 24) | (r << 16) | (g << 8) | b;
    }

    static RedPaletteGenerator(): number[] {
        let palette = [];
        let roffset = 24;
        let goffset = 0;
        let boffset = 16;
        for (let i = 0; i < 256; i++) {
            palette[i] = PaletteGenerators.getColor(roffset, goffset, boffset);
            if (i < 64) {
                roffset += 3;
            } else if (i < 128) {
                goffset += 3;
            } else if (i < 192) {
                boffset += 3;
            }
        }
        return palette;
    }

    static BluePaletteGenerator(): number[] {
        let palette = [];
        let roffset = 16;
        let goffset = 0;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = PaletteGenerators.getColor(roffset, goffset, boffset);
            if (i < 64) {
                boffset += 3;
            } else if (i < 128) {
                roffset += 3;
            } else if (i < 192) {
                goffset += 3;
            }
        }
        return palette;
    }

    static GreenPaletteGenerator(): number[] {
        let palette = [];
        let roffset = 0;
        let goffset = 16;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = PaletteGenerators.getColor(roffset, goffset, boffset);
            if (i < 64) {
                goffset += 3;
            } else if (i < 128) {
                boffset += 3;
            } else if (i < 192) {
                roffset += 3;
            }
        }
        return palette;
    }

    static GreyPaletteGenerator(): number[] {
        let palette = [];
        let roffset = 0;
        let goffset = 16;
        let boffset = 24;
        for (let i = 0; i < 192; i++) {
            palette[i] = PaletteGenerators.getColor(roffset++, goffset++, boffset++);
        }
        return palette;
    }

    static PurplePaletteGenerator(): number[] {
        let palette = [];
        let roffset = 16;
        let goffset = 0;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = PaletteGenerators.getColor(roffset, goffset, boffset);
            if (i < 64) {
                roffset += 1;
                boffset += 2.5;
            } else if (i < 128) {
                roffset += 2.5;
                goffset += 1;
            } else if (i < 192) {
                boffset += 1;
                goffset += 2.5;
            }
        }
        return palette;
    }

    static RainbowPaletteGenerator(): number[] {
        let palette = [];
        let roffset = 16;
        let goffset = 0;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = PaletteGenerators.getColor(roffset, goffset, boffset);
            if (i < 64) {
                roffset += 3;
            } else if (i < 128) {
                goffset += 3;
            } else if (i < 192) {
                boffset += 3;
            }
        }
        return palette;
    }
}


// public static bluePallete: ColorPalettes = {
//     name: "Blue",
//     generatePalette: () => {
//         let palette = [];
//         let roffset = 16;
//         let goffset = 0;
//         let boffset = 24;
//         for (let i = 0; i < 256; i++) {
//             palette[i] = ColorPalettes.getColor(roffset, goffset, boffset);
//             if (i < 64) {
//                 boffset += 3;
//             } else if (i < 128) {
//                 roffset += 3;
//             } else if (i < 192) {
//                 goffset += 3;
//             }
//         }
//         return palette;
//     }
// }

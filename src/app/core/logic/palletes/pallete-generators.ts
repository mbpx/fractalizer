import { Palette } from "./pallete.model";

export class PaletteGenerators {

    static RedPaletteGenerator(): { r: number, g: number, b: number }[] {
        let palette = [];
        let roffset = 24;
        let goffset = 0;
        let boffset = 16;
        for (let i = 0; i < 256; i++) {
            palette[i] = { r: roffset, g: goffset, b: boffset };
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

    static BluePaletteGenerator(): { r: number, g: number, b: number }[] {
        let palette = [];
        let roffset = 16;
        let goffset = 0;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = { r: roffset, g: goffset, b: boffset };
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

    static GreenPaletteGenerator(): { r: number, g: number, b: number }[] {
        let palette = [];
        let roffset = 0;
        let goffset = 16;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = { r: roffset, g: goffset, b: boffset };
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

    static GreyPaletteGenerator(): { r: number, g: number, b: number }[] {
        let palette = [];
        let roffset = 0;
        let goffset = 16;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = { r: roffset, g: goffset, b: boffset };
            roffset += 1;
            goffset += 1;
            boffset += 1;
        }
        return palette;
    }

    static PurplePaletteGenerator(): { r: number, g: number, b: number }[] {
        let palette = [];
        let roffset = 16;
        let goffset = 0;
        let boffset = 24;
        for (let i = 0; i < 256; i++) {
            palette[i] = { r: roffset, g: goffset, b: boffset };
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

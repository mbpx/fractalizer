import { Palette } from "./pallete.model";
import { PaletteGenerators } from "./pallete-generators";

export class ColorPalettes {
    public static redPalette: Palette = {
        name: "Red",
        values: PaletteGenerators.RedPaletteGenerator()
    };

    public static bluePalette: Palette = {
        name: "Blue",
        values: PaletteGenerators.BluePaletteGenerator()
    };

    public static greenPalette: Palette = {
        name: "Green",
        values: PaletteGenerators.GreenPaletteGenerator()
    };

    public static greyPalette: Palette = {
        name: "Grey",
        values: PaletteGenerators.GreyPaletteGenerator()
    };

    public static purplePalette: Palette = {
        name: "Purple",
        values: PaletteGenerators.PurplePaletteGenerator()
    };

    public static palettes: Palette[] = [
        ColorPalettes.redPalette,
        ColorPalettes.bluePalette,
        ColorPalettes.greenPalette,
        ColorPalettes.greyPalette,
        ColorPalettes.purplePalette
    ];
}

export abstract class Fractal {

    x: number;
    y: number;
	zoom: number;
	name: string;

	public abstract zreal(a: number, b: number): number;

	public abstract zimag(a: number, b: number): number;
}
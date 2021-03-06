
export function loadWASM(data: string | ArrayBuffer): Promise<void>;

export class OnigString {
	constructor(content: string);
	readonly content: string;
	readonly dispose?: () => void;
}

export class OnigScanner {
	constructor(patterns: string[]);
	findNextMatchSync(string: string | OnigString, startPosition: number): IOnigMatch;
}

export interface IOnigCaptureIndex {
	index: number
	start: number
	end: number
	length: number
}

export interface IOnigMatch {
	index: number
	captureIndices: IOnigCaptureIndex[]
	scanner: OnigScanner
}

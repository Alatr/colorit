// In a .d.ts file or .ts file that is not a module:
declare module 'jquery'

interface Window {
	opera: string;
}

interface Document {
	documentMode: string;
}
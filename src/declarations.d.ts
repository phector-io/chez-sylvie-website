declare module "aos" {
    export interface AosOptions {
        duration?: number;
        easing?: string;
        offset?: number;
        delay?: number;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
    }
    export function init(options?: AosOptions): void;
}

// declare uuid
declare module "uuid" {
    export function v4(): string;
}

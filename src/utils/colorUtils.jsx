// Utility function to convert RGBA to HEX format
export function rgbaToHex(r, g, b, a = 1) {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    let hex = `#${hexR}${hexG}${hexB}`;

    // Add alpha if it's less than 1 (fully opaque)
    if (a !== 1) {
        const hexA = Math.round(a * 255).toString(16).padStart(2, '0');
        hex += hexA;
    }

    return hex;
}

// Utility function to convert HEX to RGBA format
export function hexToRgba(hex) {
    hex = hex.replace(/^#/, ''); // Remove hash if present

    // Extract alpha if present (8-digit hex code)
    let a = 1;
    if (hex.length === 8) {
        a = parseInt(hex.slice(6, 8), 16) / 255;
        hex = hex.slice(0, 6); // Remove alpha from the hex string
    }

    // Convert hex to RGB components
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return { r, g, b, a };
}

// Utility function to convert RGBA to HSLA format
export function rgbaToHsl(r, g, b, a = 1) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0, s = 0, l = (max + min) / 2;

    // Calculate hue and saturation
    if (delta !== 0) {
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        // Determine hue based on the max component
        switch (max) {
            case r:
                h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                h = ((b - r) / delta + 2) * 60;
                break;
            case b:
                h = ((r - g) / delta + 4) * 60;
                break;
        }
    }

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return a === 1
        ? `hsl(${h.toFixed(1)}, ${s}%, ${l}%)`
        : `hsla(${h.toFixed(1)}, ${s}%, ${l}%, ${a})`;
}

// Color class to handle color conversions and formatting
export class CColor {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toHex() {
        return rgbaToHex(this.r, this.g, this.b, this.a);
    }

    toHsl() {
        return rgbaToHsl(this.r, this.g, this.b, this.a);
    }

    toString(format) {
        switch (format) {
            case 'rgb':
                return this.a !== 1
                    ? `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
                    : `rgb(${this.r}, ${this.g}, ${this.b})`;
            case 'hsl':
                return this.toHsl();
            default:
                return this.toHex();
        }
    }
}

// Utility function to generate a random RGBA color
export function randomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        a: 1
    };
}

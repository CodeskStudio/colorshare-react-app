export function rgbaToHex(r, g, b, a = 1) {
    // Convert each RGB component to a 2-digit hexadecimal string
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    
    // Combine RGB to a hex string
    let hex = `#${hexR}${hexG}${hexB}`;

    // If alpha is provided and not equal to 1, add alpha to the hex string
    if (a !== 1) {
        // Convert alpha to a 2-digit hexadecimal string
        const hexA = Math.round(a * 255).toString(16).padStart(2, '0');
        hex += hexA;
    }

    return hex;
}

export function hexToRgba(hex) {
    // Check if the hex string has a hash character
    if (hex[0] === '#') {
        hex = hex.slice(1);
    }

    // Check if the hex string has an alpha component
    let a;
    if (hex.length === 8) {
        a = parseInt(hex.slice(6, 8), 16) / 255;
        hex = hex.slice(0, 6);
    } else {
        a = 1;
    }

    // Convert the hex string to RGB components
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return { r, g, b, a };
}

export function rgbaToHsl(r, g, b, a = 1) {
    // Convert RGB values to the range of 0-1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find the maximum and minimum values among r, g, b
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    // Calculate lightness
    let h, s, l = (max + min) / 2;

    // Calculate saturation
    if (delta === 0) {
        h = 0; // If there is no difference, the hue is 0
        s = 0; // Saturation is also 0 in this case
    } else {
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        // Calculate hue based on which RGB component is the max
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

    // Convert saturation and lightness to percentages
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    // Check if alpha is 1, then return HSL, otherwise return HSLA
    if (a === 1) {
        return `hsl(${h.toFixed(1)}, ${s}%, ${l}%)`;
    } else {
        return `hsla(${h.toFixed(1)}, ${s}%, ${l}%, ${a})`;
    }
}

export class CColor {
    constructor(r, g, b, a) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    toHex() {
        return rgbaToHex(this.r, this.g, this.b, this.a)
    }

    toHsl() {
        return rgbaToHsl(this.r, this.g, this.b, this.a)
    }

    toString(format) {
        switch (format) {
        case 'rgb':
            if (this.a !== 1) {
                return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
            } else {
                return `rgb(${this.r}, ${this.g}, ${this.b})`
            }
            
        case 'hsl':
            return this.toHsl()
        default:
            return this.toHex()
        }
    }
}


export function randomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        a: 1
    }
}
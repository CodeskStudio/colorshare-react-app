// Color class to handle color conversions and formatting
export class CColor {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    // Convert the RGBA instance to HEX format
    toHex() {
        const hexR = this.r.toString(16).padStart(2, '0');
        const hexG = this.g.toString(16).padStart(2, '0');
        const hexB = this.b.toString(16).padStart(2, '0');
        let hex = `#${hexR}${hexG}${hexB}`;

        if (this.a !== 1) {
            const hexA = Math.round(this.a * 255).toString(16).padStart(2, '0');
            hex += hexA;
        }

        return hex;
    }

    // Convert the RGBA instance to HSL(A) format
    toHsl() {
        let r = this.r / 255;
        let g = this.g / 255;
        let b = this.b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;

        let h = 0, s = 0, l = (max + min) / 2;

        if (delta !== 0) {
            s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

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

        return this.a === 1
            ? `hsl(${h.toFixed(1)}, ${s}%, ${l}%)`
            : `hsla(${h.toFixed(1)}, ${s}%, ${l}%, ${this.a})`;
    }

    // Returns the color as a string in the specified format
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

    // Static method to convert a HEX string to an instance of CColor
    static fromHex(hex) {
        hex = hex.replace(/^#/, '');

        let a = 1;
        if (hex.length === 8) {
            a = parseInt(hex.slice(6, 8), 16) / 255;
            hex = hex.slice(0, 6);
        }

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return new CColor(r, g, b, a);
    }

    // Static method to generate a random color instance
    static random() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = 1;
        return new CColor(r, g, b, a);
    }
}
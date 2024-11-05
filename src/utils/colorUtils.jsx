// src/utils/colorUtils.js


// Generate a random RGB(A) color
export const getRandomColor = () => {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        a: Math.random().toFixed(2)
    };
};



export const getRGBAString = (color) => {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
}
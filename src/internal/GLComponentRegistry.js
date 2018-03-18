// @flow
const set = new Set();

export function markAsGLComponent(Component : any) {
    set.add(Component);
}

export function isGLComponent(Component : any) : boolean {
    return set.has(Component);
}

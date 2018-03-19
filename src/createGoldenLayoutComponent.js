// @flow
import type { ComponentType } from 'react';

type GLReactItem<ComponentBuilder : ComponentType<*>> = {
    type: 'react-component';
    __react_component: ComponentBuilder;
    title: string;
};

/**
 * Convert a React Component's constructor to a GoldenLayout React Component.
 * @arg Component The constructor for the React Component
 * @arg options See [GoldenLayout's Documentation](https://golden-layout.com/docs/ItemConfig.html)
 */
export default function createGoldenLayoutComponent<ComponentBuilder : ComponentType<*>>(Component : ComponentBuilder, options : Object) : GLReactItem<ComponentBuilder> {
    const name = Component.displayName || Component.name;

    return Object.assign({
        type: 'react-component',
        __react_component: Component,
        title: name
    }, options);
}

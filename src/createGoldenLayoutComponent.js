// @flow
import type { ComponentType } from 'react';

type GLReactItem<ComponentBuilder : ComponentType<*>> = {
    type: 'react-component';
    __react_component: ComponentBuilder;
    title: string;
};

export default function createGoldenLayoutComponent<ComponentBuilder : ComponentType<*>>(Component : ComponentBuilder, options : Object) : GLReactItem<ComponentBuilder> {
    const name = Component.displayName || Component.name;

    return Object.assign({
        type: 'react-component',
        __react_component: Component,
        title: name
    }, options);
}

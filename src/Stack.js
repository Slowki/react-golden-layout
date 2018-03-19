// @flow
import ContentItem, { type ContentItemProps } from './ContentItem';
import { markAsGLComponent } from './internal/GLComponentRegistry';
import type { GoldenLayoutItem, GoldenLayoutHeader } from './types';

import React from 'react';
import type { ElementProps } from 'react';

/**
 * React properties for the {@link Stack} component.
 */
export type StackProps = {|
    children: ChildrenArray<any>;
    itemRef?: (GoldenLayoutItem) => mixed;
    headerRef?: (GoldenLayoutHeader) => mixed;
    headerPosition?: false | 'top' | 'left' | 'right' | 'bottom';
    showPopoutIcon?: boolean;
    showMaximiseIcon?: boolean;
    showCloseIcon?: boolean;
|};

function showHideIcon(header : any, name : string, value : boolean) {
    const icon = header.controlsContainer.find(`.lm_${name}`);
    value ? icon.show() : icon.hide();
}

// TODO Stack should be a class with a willReceiveProps function
/**
 * Create a new Stack
 */
export default function Stack(props : StackProps) : * {
    function setSettings(item) {
        if (props.headerPosition !== undefined)
            item.header.position(props.headerPosition);

        if (props.showPopoutIcon !== undefined) {
            showHideIcon(item.header, 'popout', props.showMaximiseIcon);
        }
        
        if (props.showMaximiseIcon !== undefined) {
            showHideIcon(item.header, 'maximise', props.showMaximiseIcon);
        }

        if (props.showCloseIcon !== undefined) {
            showHideIcon(item.header, 'close', props.showMaximiseIcon);
        }

        if (props.itemRef)
            props.itemRef(item);
    }

    return <ContentItem itemRef={setSettings} type="stack" children={props.children} />;
}

markAsGLComponent(Stack);

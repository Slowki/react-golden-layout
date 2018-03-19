// @flow
import Context from './Context';

import React from 'react';
import type { ChildrenArray } from 'react';
import GoldenLayout from 'golden-layout';

type GoldenLayoutComponentState = {|
    goldenLayout : ?GoldenLayout;
    goldenLayoutResizer : ?Function;
|};

/**
 * React properties for the {@link GoldenLayoutComponent} component.
 */
export type GoldenLayoutComponentProps = {|
    children: ChildrenArray<any>;
    className?: string;
    goldenLayoutRef?: (GoldenLayout) => mixed;
|};

/**
 * Create a GoldenLayout instance
 * @example
 * import 'golden-layout/src/css/goldenlayout-base.css';
 * import 'golden-layout/src/css/goldenlayout-dark-theme.css';
 * import GoldenLayout, { Row, Stack, createGoldenLayoutComponent } from 'react-golden-layout';
 * ...
 * <GoldenLayout>
 *     <Row>
 *         <Stack>
 *             {
 *               // To apply properties to a React component, use createGoldenLayoutComponent
 *             }
 *             {createGoldenLayoutComponent(Foo, { isClosable: false, title: "Foo's Title" })}
 *         </Stack>
 *         <Stack>
 *             {
 *               // If you don't want any special settings you can just pass
 *               // React components directly.
 *             }
 *             {Bar}
 *         </Stack>
 *     </Row>
 * </GoldenLayout>
 */
export default class GoldenLayoutComponent extends React.PureComponent<GoldenLayoutComponentProps, GoldenLayoutComponentState> {
    constructor(props : GoldenLayoutComponentProps) {
        super(props);

        this.state = {
            goldenLayout: null,
            goldenLayoutResizer: null
        }
    }

    componentWillUnmount() {
        if (this.state.goldenLayout != null) {
            this.state.goldenLayout.destroy();
            window.removeEventListener('resize', this.state.goldenLayoutResizer);
        }
    }

    render() {
        return <div ref={this.__gotDiv.bind(this)} className={this.props.className}>
            <Context.Provider value={this.state.goldenLayout ? this.state.goldenLayout.root : null}>
                {this.props.children}
            </Context.Provider>
        </div>
    }

    __gotDiv(div : ?HTMLElement) {
        if (div && !this.state.goldenLayout) {
            console.log(div);
            const layout = new GoldenLayout({ content: [] }, div);
            layout.init();
            layout.on('initialised', () => {
                if (this.state.goldenLayout === layout) return;

                const goldenLayoutResizer = () => {
                    layout.updateSize();
                };

                window.addEventListener('resize', goldenLayoutResizer);
                this.setState({
                    goldenLayout: layout,
                    goldenLayoutResizer
                });
                if (this.props.goldenLayoutRef)
                    this.props.goldenLayoutRef(layout);
            });
        }
    }
};

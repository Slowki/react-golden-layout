# react-golden-layout #

A React wrapper around GoldenLayout.

## Example ##
```javascript
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-dark-theme.css';
import GoldenLayout, { Row, Stack, createGoldenLayoutComponent } from 'react-golden-layout';
...
<GoldenLayout>
    <Row>
        <Stack>
            {
              // To apply properties to a React component, use createGoldenLayoutComponent
            }
            {createGoldenLayoutComponent(Foo, { isClosable: false, title: "Foo's Title" })}
        </Stack>
        <Stack>
            {
              // If you don't want any special settings you can just pass
              // React components directly.
            }
            {Bar}
        </Stack>
    </Row>
</GoldenLayout>
```

## Usage with webpack ##
GoldenLayout requires some libraries to be available globally, so if you're using webpack you'll have to use ProvidePlugin:

```javascript
new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
    $: 'jquery',
    jQuery: 'jquery'
})
```

## API ##
See the [documentation site](https://slowki.github.io/react-golden-layout/#goldenlayoutcomponent).

## Acknowledgments ##
Based on [andrewcapodieci's example](https://github.com/andrewcapodieci/golden-layout-react-redux/).

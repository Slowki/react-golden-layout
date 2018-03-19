# react-golden-layout #

A React wrapper around GoldenLayout.

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
See the [documentation site](https://Slowki.github.io/react-golden-layout/).

## Acknowledgments ##
Based on [andrewcapodieci's example](https://github.com/andrewcapodieci/golden-layout-react-redux/).

import SearchBar from "./index";

const meta = {
    title: 'Navigation/Searchbar',
    component: SearchBar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
}

export default meta;

export const Default = {
    args: {}
}
